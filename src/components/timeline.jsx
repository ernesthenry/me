import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full stack Developer - BPOSeats<span> July 2023 - Present</span></h2>
                        <li>Developed and deployed dynamic web applications: Successfully designed, developed, and deployed several dynamic web applications using Django and Vue.js, combining the power of Django for backend logic and Vue.js for interactive frontend experiences.</li>

                        <li>Implemented real-time features with WebSockets: Integrated real-time features such as live chat, notifications, or collaborative editing using WebSockets with Django Channels and Vue.js, enhancing user engagement and interactivity.</li>

                        <li>Designed RESTful APIs for frontend-backend communication: Designed and implemented RESTful APIs using Django Rest Framework, enabling seamless communication between the frontend Vue.js components and backend Django services.</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full stack Developer - CIM Innovations<span> March 2021 - October 2022</span></h2>
                        <li>Engineered and launched resilient web applications tailored for diverse payment gateways: Proficiently architected, coded, and released multiple web applications leveraging PHP as the backend technology. Prioritized robustness, scalability, and security throughout the development lifecycle, ensuring seamless operation and trustworthiness for users.</li>
                        <li>Integrated frontend and backend systems: Seamlessly integrated frontend technologies such as HTML, CSS, JavaScript, and modern frameworks like React or Angular with PHP backend systems, ensuring smooth user experiences and efficient data processing. </li>
                        <li>Implemented RESTful APIs: Designed and implemented RESTful APIs using PHP , facilitating seamless communication between frontend and backend systems and enabling third-party integrations.</li>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Banking Officer - Equity Bank Uganda Limited<span> June 2019 - March 2020</span></h2>
                        <li>Successfully processed 45 checks in 1 hour, during a staff shortage incident on a busy day at the bank.<br />Met all reconciliation deadlines between the years 2019 and 2020.</li>                      
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Hackers Yacht<span> June 2018 - September 2018</span></h2>
                        <p>I joined Hackers Yacht  as a Software Developer-Intern for a period of four months. My major part of the work was into the field of developing mobile apps using react native.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Computer Science graduate <span>2014-2018</span></h2>
                        <p>I pursued my undergraduate degree at Kampala International University and graduated with a Bachelor's of Computer Science Degree. I have taken online courses like DSA, OOPs, React nanodegree, IOT, Web-Data Management over the recent years.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2001-2013</span></h2>
                        <p>I  completed my higher secondary education with major subjects as Geography, Economics & Maths. During my time at school, I developed interest in solving complex problems of the fundamental mathematics which helped me to improve my understanding of any problem and also improve my  problem solving skills.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
