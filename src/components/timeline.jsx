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
                        <h2>Software Engineering Fellow - Headstarter, Remote USA<span> July 2024 - Septemper 2024</span></h2>
                        <li>Built 5+ Ai Apps and API using Nextjs, OpeAnAI, Pinecone, StripeAPI  with 98% accuracy as seen by 1000 users</li>

                        <li>Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns</li>

                        <li>Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns</li>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Analytics Extern - Webacy, Remote USA<span> May 2024 - June 2024</span></h2>
                        <li>Data Labelling: Built foundational understanding: Gained in-depth knowledge of data labeling, its importance, and demonstrated skills as a data labeling specialist.</li>
                        <li>Web3 and smart contracts: Familiarized with key concepts related to Web3 and smart contracts. Identified and labeled over 500 smart contract vulnerabilities based on predefined risk tags, ensuring data readiness for analysis.</li>
                        <li>Validated the accuracy of data labels applied by peers, achieving a consistency rate of 95% across over 1,000 data points, ensuring high-quality datasets for further analysis</li>

                        <li>Frequency analysis: Enhanced data analysis proficiency by identifying the most common vulnerabilities in the dataset. Analyzed the frequency of each risk tag across over 2,000 labeled smart contracts.</li>

                        <li>Cluster exploration: Conducted cluster analysis on the dataset using unsupervised machine learning techniques. Identified clusters of smart contracts with similar risk profiles, uncovering common types and shared vulnerabilities, which informed better security measures for over 1,500 contracts.
                        </li>
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full stack Developer - BPOSeats, Remote<span> July 2023 - Present</span></h2>
                        <li>Implemented real-time features with WebSockets: Integrated real-time features such as live chat, notifications, and collaborative editing using WebSockets with Django Channels and Vue.js, boosting user retention by 15% and reducing user response time by 40%.</li>

                        <li>Designed RESTful APIs for frontend-backend communication: Designed and implemented over 20 RESTful APIs using Django Rest Framework, enabling seamless communication between the frontend Vue.js components and backend Django services, and reducing data transfer latency by 20%.</li>

                        <li>Developed and deployed dynamic web applications: Successfully designed, developed, and deployed over 10 dynamic web applications using Django and Vue.js, resulting in a 25% increase in user engagement and a 30% reduction in page load times.</li>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full stack Developer - CIM Innovations, Remote USA<span> March 2021 - October 2022</span></h2>
                        <li>Engineered and launched resilient web applications tailored for diverse payment gateways: Proficiently architected, coded, and released over 15 web applications leveraging PHP as the backend technology. Prioritized robustness, scalability, and security throughout the development lifecycle, resulting in a 30% increase in transaction success rates and zero reported security breaches.</li>
                        <li>Integrated frontend and backend systems: Seamlessly integrated frontend technologies such as HTML, CSS, JavaScript, and modern frameworks like React or Angular with PHP backend systems, enhancing user experience and reducing page load times by 25%. Achieved a 40% improvement in overall system performance and user satisfaction.</li>
                        <li>Implemented RESTful APIs: Designed and implemented over 30 RESTful APIs using PHP, facilitating seamless communication between frontend and backend systems and enabling third-party integrations. This resulted in a 50% increase in data processing efficiency and expanded functionality for external services.</li>

                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Banking Officer - Equity Bank Uganda Limited<span> June 2019 - March 2020</span></h2>
                        <li>Successfully processed 45 checks in 1 hour, during a staff shortage incident on a busy day at the bank.<br />Met all reconciliation deadlines between the years 2019 and 2020.</li>                      
                      </div>
                    </div>
                  </article> */}
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
