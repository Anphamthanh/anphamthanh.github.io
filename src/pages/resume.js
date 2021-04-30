import React from "react";

import Layout from "../components/Layout";

// import { Link } from 'gatsby';
import Sidebar from "../components/Sidebar";
import config from "../../config";
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}> {config.email}</a>
          </div>
          <p className="lead mb-5">
            <i>
              I am a technology expert and I am experienced in utilizing
              technology resources to deliver strategic values. With my
              battle-tested skills and knowledge, I can build and lead your
              engineering team to implement all your business needs and show you
              all the possible ways that technology can help to maximize your
              business potential.
            </i>
          </p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="qualification"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <span role="img" aria-label="briefcase">
              💼
            </span>{" "}
            Qualification
          </h2>

          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Highly experienced in building internet solution covering from{" "}
              <b>frontend to backend to infrastructure to DS/AI/ML</b>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Experienced in building complex system such as{" "}
              <b>
                social networks, ticketing, e-commerce, super app, identity
                system
              </b>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Able to <b>build and lead your engineering org</b> to drive
              successful deliverables
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Experienced in building <b>
                highly available and fault tolerant
              </b>{" "}
              distritbuted systems
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>A competitive programmer in
              modern programming languages including{" "}
              <b>Go, Ruby, Python, Rust</b>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Experienced in <b>building/migrating</b> applications with{" "}
              <b>micro-service architecture</b>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Experienced in dealing with different types of databases including{" "}
              <b>SQL and NoSQL</b>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>A quick learner and builder,
              I am able to build usable products quickly utilizing existing
              stacks
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>A <b>very hungry learner</b>!
              I am very fascinated by the new technology and their applications
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <span role="img" aria-label="computer">
              💻
            </span>{" "}
            Experience
          </h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Director of Software Engineering</h3>
              <div className="subheading mb-3">
                <a href="https://tiki.vn" target="_blank" rel="noreferrer">
                  TIKI Corporation
                </a>
                , Ho Chi Minh City, Vietnam
              </div>
              <p>
                TIKI is the leading e-commerce platform in Vietnam and it is on
                its way to be a new unicorn of South East Asia. At TIKI, I am
                <ul>
                  <li>
                    In charge of building Tiki Luot, a social-commerce network
                    connecting seller and buyer and it is the new form of a
                    marketplace for Tiki.
                  </li>
                  <li>
                    In charge of building Tiki mini-app platform backend. This
                    is an effort to turn Tiki into a super app, on which new
                    businesses can build apps to take advantage of the customer
                    base, payment service, and excellent delivery service that
                    Tiki has.
                  </li>
                  <li>
                    Techstack:{" "}
                    <b>Go, React, React Native, Postgres, Redis, AWS...</b>
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Head of Engineering</h3>
              <div className="subheading mb-3">
                <a href="https://tiki.vn" target="_blank" rel="noreferrer">
                  TicketBox Inc., TIKI Corporation
                </a>
                , Ho Chi Minh City, Vietnam
              </div>
              <p>
                TicketBox is the No. 1 ticketing platform in Vietnam. After
                being acquired by Tiki, TicketBox has the opportunity to expand
                its customer base and offer many more attractive services. I was
                hired to head the engineering at TicketBox and leading the
                integration of the TicketBox system into Tiki. At
                TicketBox/Tiki, I
                <ul>
                  <li>
                    Was in charge of the deliverables of the engineering team of{" "}
                    <a
                      href="https://ticketbox.vn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TicketBox
                    </a>{" "}
                    Pte Ltd. - a subsidiary company of TIKI
                  </li>
                  <li>
                    Was in charge of integrating TicketBox existing system into
                    Tiki's eco-system
                  </li>
                  <li>
                    Designed infrastructure and implement the ticketing platform
                    and social e-commerce platform for TicketBox
                  </li>
                  <li>
                    Was in charge of building a digital service platform for
                    Tiki to offer customer selection such that billing, online
                    courses...
                  </li>
                  <li>
                    Techstack: <b>Go, React, Postgres, Redis, AWS...</b>
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2019 - October 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Engineering Lead</h3>
              <div className="subheading mb-3">
                <a
                  href="https://trustingsocial.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  TrustingSocial
                </a>
                , Ho Chi Minh City, Vietnam
              </div>
              <p>
                TrustingSocial is a fintech company that advances data science
                and technology to deliver financial access for all. At
                TrustingSocial, I
                <ul>
                  <li>
                    Revived a dead product name{" "}
                    <a href="https://avay.vn" target="_blank" rel="noreferrer">
                      AVAY
                    </a>{" "}
                    and made it another source of revenue for the company
                  </li>
                  <li>
                    Lead the most elite team of the company to deliver a
                    web-scale lending platform for Vietnam's market
                  </li>
                  <li>
                    Was keen on identifying bottleneck and actively provided
                    metrics and solutions for improvements
                  </li>
                  <li>
                    Designed and implemented core features that provide
                    measurable impacts to the business
                  </li>
                  <li>
                    Held the engineering bar and maintained best practices
                    across the organization
                  </li>
                  <li>
                    Techstack:{" "}
                    <b>Go, Angular, NodeJS, Postgres, MariaDB, Redis, AWS...</b>
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2018 - October 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Engineer</h3>
              <div className="subheading mb-3">
                <a
                  href="https://ultimatesoftware.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ultimate Software
                </a>{" "}
                Inc., Weston, Florida, U.S.A.
              </div>
              <p>
                Ultimate Software is an American technology company that
                develops and sells UltiPro, a cloud-based human capital
                management software system for businesses. At UltimateSoftware,
                I
                <ul>
                  <li>
                    Was a member of the elite team of three who built the first
                    cloud platform solution for UltimateSoftware
                  </li>
                  <li>
                    Was in charge of building and maintaining UltimateSoftware's
                    deployment platform on top of OpenStack
                  </li>
                  <li>
                    Played a key role in architecting and implementing PaaS
                    products for deployment orchestration
                  </li>
                  <li>
                    Techstack: <b>Python, Ruby, Go, Zookeeper, OpenStack,...</b>
                  </li>
                </ul>
                This project saved UltimateSoftware millions of dollars in
                deployment cost every year.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mar 2014 - February 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lead Engineer</h3>
              <div className="subheading mb-3">
                <a
                  href="https://radiusonline.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Radius Online
                </a>{" "}
                Inc., Atlanta, Georgia, U.S.A.{" "}
              </div>
              <p>
                RadiusOnline provides the perfect mix of cutting-edge
                technology, data & analytics, search engine, directory
                visibility, & strategy to maximize their local online success.
                At RadiusOnline, I
                <ul>
                  <li>
                    Lead RadiusOnline core web development and mobile
                    development team
                  </li>
                  <li>
                    Built backend APIs for RadiusOnline digital marketing
                    platform
                  </li>
                  <li>
                    Created and maintained web infrastructure for RadiusOnline
                    Inc.
                  </li>
                  <li>
                    Techstack: <b>Rails, Bootstrap, Postgresql, JS, AWS...</b>
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2013 - December 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">
                <a href="https://ultimatesoftware.com">Ultimate Software</a>{" "}
                Inc., Weston, Florida, U.S.A.
              </div>
              <p>
                Ultimate Software is an American technology company that
                develops and sells UltiPro, a cloud-based human capital
                management software system for businesses. At UltimateSoftware,
                I
                <ul>
                  <li>
                    Built internal dashboards for monitoring hypervisors
                    capacity for our private cloud
                  </li>
                  <li>
                    Built visualization to visualize network deployment topology
                  </li>
                  <li>Worked on various internal projects</li>
                  <li>
                    Techstack:{" "}
                    <b>
                      OpenStack, Python, Ruby, AngularJS, JQuery, D3, Dashing...
                    </b>
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2014 - August 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">
                <a href="https://openspan.com" target="_blank" rel="noreferrer">
                  OpenSpan
                </a>{" "}
                Inc., Atlanta, Georgia, U.S.A.
              </div>
              <p>
                OpenSpan focuses on desktop automation, it has a niche market in
                building automation for non-technical users. At OpenSpan, I
                <ul>
                  <li>
                    Built back end code for OpenSpan Console to work with Amazon
                    Web Service for Cloud deployment
                  </li>
                  <li>Built Cucumber code for OpenSpan Management Console</li>
                  <li>
                    Built translators for OpenSpan to work with different
                    adapters using C#
                  </li>
                  <li>
                    Built a cloud-based automated tester program for used by the
                    core development team
                  </li>
                  <li>
                    Techstack: <b>Rails, AWS, C#, Cucumber, RSpec...</b>
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2014 - August 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <span role="img" aria-label="mortar-board">
              🎓
            </span>{" "}
            Education
          </h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <a href="https://gatech.edu">Georgia Institute of Technology</a>
                , Atlanta, Georgia, U.S.A
              </h3>
              <div className="subheading mb-3">
                Bachelor of Science - Summa Cum Laude (Graduated with Highest
                Honor)
              </div>
              <div>
                <i>
                  <b>Computer Science - Focus on Devices and Intelligence</b>
                </i>
              </div>
              <ul>
                <li>Georgia Tech Cooperative Plan</li>
                <li>Briaerean Honor Society Member</li>
                <li>Gamma Beta Phi Honor Society Member</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <span role="img" aria-label="hammer">
              🔨
            </span>{" "}
            Skills
          </h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Others</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              English (native), Vietnamese (native), Chinese (Conversational)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Golang, Python, Ruby, Rust
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Backend, DevOps, Architecture, Networking, Video Processing,
              Realtime Processing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Management
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <span role="img" aria-label="heart_eyes">
              😍
            </span>{" "}
            Interests
          </h2>
          <p>
            Apart from being a hard-cord software engineer, I enjoy a lot of
            thing around me including music, sports, books, foods, hangout...
          </p>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <span role="img" aria-label="food">
                🍻
              </span>
            </li>
            <li className="list-inline-item">
              <span role="img" aria-label="food">
                🍔
              </span>
            </li>
            <li className="list-inline-item">
              <span role="img" aria-label="food">
                ⚽️
              </span>
            </li>
            <li className="list-inline-item">
              <span role="img" aria-label="food">
                📚
              </span>
            </li>
            <li className="list-inline-item">
              <span role="img" aria-label="food">
                🎶
              </span>
            </li>
            <li className="list-inline-item">
              <span role="img" aria-label="food">
                🎣
              </span>
            </li>
          </ul>
          <p className="mb-0">
            Recently, I have started writing{" "}
            <a href="/">
              <span role="img" aria-label="book">
                📚
              </span>{" "}
              blog{" "}
            </a>
            as a part time hobbies...
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <span role="img" aria-label="trophy">
              🏆
            </span>{" "}
            Awards &amp; Certifications
          </h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              AWS Certified Solution Architect - XXXXXXXXXXVQ13CW
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mensa Member #XXXXXXXX82
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              2012 Outstanding Computer Science Student of the Year Award
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>2<sup>nd</sup> Place, Annual
              Gainesville Mathematics Tournament
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Martin Luther King Day of Service Award
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Member of the International Honor Society
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>3<sup>rd</sup> place
              individual, 4th place team, Gainesville Math Tournament
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Best Newspaper Website 2 Year Division, Georgia Press Association
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
