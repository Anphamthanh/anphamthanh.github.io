#!/bin/bash
# Usage: ./publish.sh drafts/my-post.md
# Reads YAML-ish front matter, converts markdown to HTML, publishes to /posts/

set -euo pipefail
cd "$(dirname "$0")"

if [ $# -lt 1 ]; then
  echo "Usage: ./publish.sh <markdown-file>"
  echo ""
  echo "Front matter format:"
  echo "  ---"
  echo "  title: Your Post Title"
  echo "  date: March 8, 2026"
  echo "  slug: your-post-slug"
  echo "  excerpt: One-liner for the blog listing."
  echo "  tags: Tag1, Tag2, Tag3"
  echo "  read_time: 5 min read"
  echo "  ---"
  exit 1
fi

INPUT="$1"
if [ ! -f "$INPUT" ]; then
  echo "Error: File not found: $INPUT"
  exit 1
fi

# Parse front matter
parse_fm() {
  sed -n '/^---$/,/^---$/p' "$INPUT" | grep "^$1:" | sed "s/^$1: *//"
}

TITLE=$(parse_fm title)
DATE=$(parse_fm date)
SLUG=$(parse_fm slug)
EXCERPT=$(parse_fm excerpt)
TAGS=$(parse_fm tags)
READ_TIME=$(parse_fm read_time)

if [ -z "$TITLE" ] || [ -z "$SLUG" ] || [ -z "$DATE" ]; then
  echo "Error: Front matter must include title, date, and slug"
  exit 1
fi

[ -z "$READ_TIME" ] && READ_TIME="5 min read"

# Extract body (everything after second ---)
BODY=$(awk 'BEGIN{n=0} /^---$/{n++; next} n>=2{print}' "$INPUT")

# Convert markdown to HTML (basic but covers 90% of blog posts)
md_to_html() {
  echo "$1" | awk '
  BEGIN { in_ul=0; in_ol=0; in_code=0; in_p=0 }

  # Fenced code blocks
  /^```/ {
    if (in_code) { print "</code></pre>"; in_code=0 }
    else { print "<pre><code>"; in_code=1 }
    next
  }
  in_code { print; next }

  # Close lists if needed on non-list lines
  /^[^-*0-9]/ || /^$/ {
    if (in_ul) { print "</ul>"; in_ul=0 }
    if (in_ol) { print "</ol>"; in_ol=0 }
  }

  # Blank line
  /^$/ {
    if (in_p) { print "</p>"; in_p=0 }
    next
  }

  # Headers
  /^### / { sub(/^### /, ""); printf "<h3>%s</h3>\n", $0; next }
  /^## /  { sub(/^## /,  ""); printf "<h2>%s</h2>\n", $0; next }

  # Unordered list
  /^[-*] / {
    if (!in_ul) { print "<ul>"; in_ul=1 }
    sub(/^[-*] /, "")
    printf "<li>%s</li>\n", $0
    next
  }

  # Ordered list
  /^[0-9]+\. / {
    if (!in_ol) { print "<ol>"; in_ol=1 }
    sub(/^[0-9]+\. /, "")
    printf "<li>%s</li>\n", $0
    next
  }

  # Blockquote
  /^> / {
    sub(/^> /, "")
    printf "<blockquote><p>%s</p></blockquote>\n", $0
    next
  }

  # Regular paragraph
  {
    if (!in_p) { printf "<p>"; in_p=1 }
    else { printf " " }
    printf "%s", $0
  }

  END {
    if (in_p) print "</p>"
    if (in_ul) print "</ul>"
    if (in_ol) print "</ol>"
  }
  ' | sed -E \
    -e 's/\*\*([^*]+)\*\*/<strong>\1<\/strong>/g' \
    -e 's/\*([^*]+)\*/<em>\1<\/em>/g' \
    -e 's/`([^`]+)`/<code>\1<\/code>/g' \
    -e 's/\[([^]]+)\]\(([^)]+)\)/<a href="\2">\1<\/a>/g'
}

CONTENT_HTML=$(md_to_html "$BODY")

# Build tags HTML
TAGS_HTML=""
IFS=',' read -ra TAG_ARRAY <<< "$TAGS"
for tag in "${TAG_ARRAY[@]}"; do
  tag=$(echo "$tag" | xargs)  # trim whitespace
  TAGS_HTML="$TAGS_HTML<span class=\"post-tag\">$tag</span>"
done

# Create post directory and HTML
POST_DIR="posts/$SLUG"
mkdir -p "$POST_DIR"

cat > "$POST_DIR/index.html" << POSTEOF
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>$TITLE — An Pham</title>
<meta name="description" content="$EXCERPT">
<meta property="og:title" content="$TITLE">
<meta property="og:description" content="$EXCERPT">
<meta property="og:type" content="article">
<meta property="og:url" content="https://anpham.dev/posts/$SLUG/">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>A</text></svg>">
<link rel="stylesheet" href="/css/style.css">
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="/" class="site-name">An Pham</a>
    <div class="nav-links">
      <a href="/">Blog</a>
      <a href="/about/">About</a>
      <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">Light</button>
    </div>
  </div>
</nav>

<div class="container">
  <article>
    <header>
      <h1>$TITLE</h1>
      <div class="article-meta">$DATE · $READ_TIME</div>
      <div class="article-tags">
        $TAGS_HTML
      </div>
    </header>

    <div class="content">
$CONTENT_HTML
    </div>
  </article>

  <footer>
    <p>An Pham · Atlanta, GA · <a href="https://www.linkedin.com/in/an-pham-atl/" target="_blank">LinkedIn</a></p>
  </footer>
</div>

<script>
function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  if (html.classList.contains('light')) {
    html.classList.remove('light');
    btn.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.add('light');
    btn.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
}
(function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const btn = document.querySelector('.theme-toggle');
  if (saved === 'light' || (!saved && !prefersDark)) {
    document.documentElement.classList.add('light');
    btn.textContent = 'Dark';
  }
})();
</script>
</body>
</html>
POSTEOF

# Update index.html — insert new post at top of post-list
ENTRY_FILE=$(mktemp)
cat > "$ENTRY_FILE" << ENTRYEOF

    <li class="post-item">
      <div class="post-date">$DATE</div>
      <h2><a href="/posts/$SLUG/">$TITLE</a></h2>
      <p class="post-excerpt">$EXCERPT</p>
      <div class="post-tags">
        $TAGS_HTML
      </div>
    </li>
ENTRYEOF

# Insert after <ul class="post-list">
TEMPFILE=$(mktemp)
sed '/class="post-list"/r '"$ENTRY_FILE" index.html > "$TEMPFILE" && mv "$TEMPFILE" index.html
rm -f "$ENTRY_FILE"

echo ""
echo "Published: $TITLE"
echo "  URL: https://anpham.dev/posts/$SLUG/"
echo "  File: $POST_DIR/index.html"
echo ""
echo "Next steps:"
echo "  git add posts/$SLUG/index.html index.html"
echo "  git commit -m 'New post: $TITLE'"
echo "  git push origin master"
