import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/resume.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'An Pham\'s up to date resume' },
                { name: 'keywords', content: 'An Pham, Resume, anphamthanh, Software Engineer' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={'main-body'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
