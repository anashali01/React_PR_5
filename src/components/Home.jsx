import React from "react";

const Home = () => {
  return (
    <div>
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.webp" alt=""> */}
        <h1 className="sitename">Eventix</h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="venue.html">Venue</a></li>
          <li className="dropdown"><a href="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
            <ul>
              <li><a href="speaker-details.html">Speaker Details</a></li>
              <li><a href="buy-tickets.html">Buy Tickets</a></li>
              <li><a href="terms.html">Terms</a></li>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="404.html">404</a></li>
            </ul>
          </li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
      <a className="btn-getstarted" href="buy-tickets.html">Buy Tickets</a>
    </div>
  </header>
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
            <h1 className="hero-title">Global Tech Summit 2026</h1>
            <p className="hero-subtitle">Shaping the Future of Innovation</p>
            <p className="hero-description">Join industry leaders, innovators, and visionaries for three days of groundbreaking discussions, networking opportunities, and transformative insights that will define the next decade of technology.</p>
            <div className="event-details mb-4">
              <div className="detail-item" data-aos="fade-up" data-aos-delay={300}>
                <i className="bi bi-calendar-event" />
                <span>March 15-17, 2026</span>
              </div>
              <div className="detail-item" data-aos="fade-up" data-aos-delay={350}>
                <i className="bi bi-geo-alt" />
                <span>San Francisco Convention Center</span>
              </div>
              <div className="detail-item" data-aos="fade-up" data-aos-delay={400}>
                <i className="bi bi-people" />
                <span>5000+ Attendees Expected</span>
              </div>
            </div>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay={450}>
              <a href="buy-tickets.html" className="btn btn-primary btn-lg me-3">Register Now</a>
              <a href="schedule.html" className="btn btn-outline-primary btn-lg">View Schedule</a>
            </div>
            <div className="countdown-wrapper mt-4" data-aos="fade-up" data-aos-delay={500}>
              <h5 className="countdown-title">Event Starts In:</h5>
              <div className="countdown d-flex justify-content-start" data-count="2026/03/15">
                <div>
                  <h3 className="count-days" />
                  <h4>Days</h4>
                </div>
                <div>
                  <h3 className="count-hours" />
                  <h4>Hours</h4>
                </div>
                <div>
                  <h3 className="count-minutes" />
                  <h4>Minutes</h4>
                </div>
                <div>
                  <h3 className="count-seconds" />
                  <h4>Seconds</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
            <div className="hero-image-wrapper">
              <img src="assets/img/events/gallery-7.webp" alt="Global Tech Summit" className="img-fluid hero-image" />
              <div className="floating-badges">
                <div className="badge-item" data-aos="zoom-in" data-aos-delay={600}>
                  <i className="bi bi-award" />
                  <span>Premium Speakers</span>
                </div>
                <div className="badge-item" data-aos="zoom-in" data-aos-delay={650}>
                  <i className="bi bi-wifi" />
                  <span>Live Streaming</span>
                </div>
                <div className="badge-item" data-aos="zoom-in" data-aos-delay={700}>
                  <i className="bi bi-gift" />
                  <span>Networking Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Hero Section */}
    {/* About Section */}
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="content">
              <h2 data-aos="fade-up" data-aos-delay={200}>Shaping the Future of Digital Innovation</h2>
              <p data-aos="fade-up" data-aos-delay={300}>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p data-aos="fade-up" data-aos-delay={400}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
              <div className="stats-grid" data-aos="fade-up" data-aos-delay={500}>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Days</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Tracks</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">120+</div>
                  <div className="stat-label">Speakers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2500+</div>
                  <div className="stat-label">Attendees</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-wrapper" data-aos="zoom-in" data-aos-delay={300}>
              <img src="assets/img/events/showcase-8.webp" alt="Event showcase" className="img-fluid" />
              <div className="floating-card" data-aos="fade-up" data-aos-delay={600}>
                <div className="card-icon">
                  <i className="bi bi-people" />
                </div>
                <div className="card-content">
                  <h4>Global Network</h4>
                  <p>Connect with professionals from 45+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-grid">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-lightbulb" />
                </div>
                <h4>Innovation Focus</h4>
                <p>Explore cutting-edge technologies and breakthrough solutions that are reshaping industries worldwide.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-trophy" />
                </div>
                <h4>Expert Speakers</h4>
                <p>Learn from industry leaders, successful entrepreneurs, and visionary thinkers who are driving change.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-rocket-takeoff" />
                </div>
                <h4>Career Growth</h4>
                <p>Accelerate your professional development through workshops, mentorship, and networking opportunities.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-graph-up-arrow" />
                </div>
                <h4>Business Insights</h4>
                <p>Gain valuable market intelligence and strategic insights to drive your business forward.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-puzzle" />
                </div>
                <h4>Hands-on Workshops</h4>
                <p>Participate in interactive sessions and practical workshops to develop new skills and knowledge.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={700}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-globe2" />
                </div>
                <h4>Global Community</h4>
                <p>Join a diverse community of innovators, creators, and change-makers from around the world.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section" data-aos="fade-up" data-aos-delay={100}>
          <div className="text-center">
            <h3>Ready to Transform Your Future?</h3>
            <p>Join thousands of professionals who are already shaping tomorrow's innovations.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Register Now</a>
              <a href="#" className="btn btn-outline">View Agenda</a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /About Section */}
    {/* Schedule Section */}
    <section id="schedule" className="schedule section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Schedule</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="schedule-header">
          <ul className="nav nav-tabs" id="schedule-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="schedule-tab-1" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane-1" type="button" role="tab" aria-controls="schedule-tab-pane-1" aria-selected="true">Oct 15<br />Monday</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="schedule-tab-2" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane-2" type="button" role="tab" aria-controls="schedule-tab-pane-2" aria-selected="false">Oct 16<br />Tuesday</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="schedule-tab-3" data-bs-toggle="tab" data-bs-target="#schedule-tab-pane-3" type="button" role="tab" aria-controls="schedule-tab-pane-3" aria-selected="false">Oct 17<br />Wednesday</button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="schedule-tabContent">
          <div className="tab-pane fade show active" id="schedule-tab-pane-1" role="tabpanel" aria-labelledby="schedule-tab-1" tabIndex={0}>
            <div className="schedule-content">
              <div className="session-timeline">
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">9:00</span>
                    <span className="end">10:00</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track keynote">Keynote</span>
                        <span className="room">Main Stage</span>
                      </div>
                      <h3 className="session-title">Sed ut perspiciatis unde omnis iste natus error</h3>
                      <p className="session-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-f-4.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Tempor incididunt ut labore et dolore</h4>
                          <span className="speaker-role">Consectetur adipiscing elit</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:30</span>
                    <span className="end">11:15</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track development">Development</span>
                        <span className="room">Room A</span>
                      </div>
                      <h3 className="session-title">Nemo enim ipsam voluptatem quia voluptas sit</h3>
                      <p className="session-description">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                      <p>
                      </p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-m-6.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Excepteur sint occaecat cupidatat</h4>
                          <span className="speaker-role">Non proident sunt in culpa</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:30</span>
                    <span className="end">11:15</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track design">Design</span>
                        <span className="room">Room B</span>
                      </div>
                      <h3 className="session-title">Sunt in culpa qui officia deserunt mollit</h3>
                      <p className="session-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-f-5.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Duis aute irure dolor</h4>
                          <span className="speaker-role">In reprehenderit in voluptate</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">11:15</span>
                    <span className="end">11:45</span>
                  </div>
                  <div className="session-card break-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track break">Break</span>
                        <span className="room">Lobby</span>
                      </div>
                      <h3 className="session-title">Velit esse cillum dolore</h3>
                      <p className="session-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                  </div>
                </div>{/* End Session Block */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">12:00</span>
                    <span className="end">12:45</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track business">Business</span>
                        <span className="room">Main Stage</span>
                      </div>
                      <h3 className="session-title">Eu fugiat nulla pariatur</h3>
                      <p className="session-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-m-7.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Explicabo nemo enim</h4>
                          <span className="speaker-role">Voluptatem quia voluptas sit</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
              </div>{/* End Session Timeline */}
            </div>{/* End Schedule Content */}
          </div>
          <div className="tab-pane fade" id="schedule-tab-pane-2" role="tabpanel" aria-labelledby="schedule-tab-2" tabIndex={0}>
            <div className="schedule-content">
              <div className="session-timeline">
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">9:30</span>
                    <span className="end">10:15</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track development">Development</span>
                        <span className="room">Room A</span>
                      </div>
                      <h3 className="session-title">Aperiam eaque ipsa quae</h3>
                      <p className="session-description">Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-m-8.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Modi tempora incidunt</h4>
                          <span className="speaker-role">Magnam aliquam quaerat</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:45</span>
                    <span className="end">11:30</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track design">Design</span>
                        <span className="room">Room B</span>
                      </div>
                      <h3 className="session-title">Tempora incidunt ut labore</h3>
                      <p className="session-description">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Excepteur sint occaecat cupidatat non proident.</p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-f-6.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Corporis suscipit laboriosam</h4>
                          <span className="speaker-role">Nisi ut aliquid ex ea commodi</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
              </div>{/* End Session Timeline */}
            </div>{/* End Schedule Content */}
          </div>
          <div className="tab-pane fade" id="schedule-tab-pane-3" role="tabpanel" aria-labelledby="schedule-tab-3" tabIndex={0}>
            <div className="schedule-content">
              <div className="session-timeline">
                <div className="session-block">
                  <div className="session-time">
                    <span className="start">10:00</span>
                    <span className="end">10:45</span>
                  </div>
                  <div className="session-card">
                    <div className="session-info">
                      <div className="session-meta">
                        <span className="track business">Business</span>
                        <span className="room">Main Stage</span>
                      </div>
                      <h3 className="session-title">Consequatur aut perferendis</h3>
                      <p className="session-description">Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Ut enim ad minima veniam.</p>
                      <div className="speaker-info">
                        <img src="assets/img/person/person-m-9.webp" alt="Speaker" className="speaker-avatar img-fluid" />
                        <div className="speaker-details">
                          <h4 className="speaker-name">Accusantium doloremque</h4>
                          <span className="speaker-role">Quia dolor sit amet</span>
                        </div>
                      </div>
                    </div>
                    <button className="add-to-schedule">
                      <i className="bi bi-calendar-plus" />
                      Add to Schedule
                    </button>
                  </div>
                </div>{/* End Session Block */}
              </div>{/* End Session Timeline */}
            </div>{/* End Schedule Content */}
          </div>
        </div>{/* End Tab Content */}
      </div>
      <div className="schedule-actions">
        <button className="btn btn-primary">
          <i className="bi bi-download" />
          Download Full Agenda
        </button>
        <button className="btn btn-outline">
          <i className="bi bi-calendar-event" />
          Export to Calendar
        </button>
      </div>
    </section>{/* /Schedule Section */}
    {/* Speakers Section */}
    <section id="speakers" className="speakers section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Speakers</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="assets/img/events/speaker-8.webp" alt="Speaker" className="img-fluid" />
                <div className="speaker-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
                  </div>
                </div>
              </div>
              <div className="speaker-content">
                <div className="speaker-badge">Keynote</div>
                <h4>Sarah Chen</h4>
                <p className="speaker-title">Chief Technology Officer</p>
                <p className="speaker-company">TechFlow Solutions</p>
                <p className="speaker-bio">Leading digital transformation initiatives across Fortune 500 companies with over 15 years of experience in cloud architecture.</p>
                <div className="speaker-session">
                  <span className="session-topic">Building Scalable Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>{/* End Speaker Card */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={250}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="assets/img/events/speaker-1.webp" alt="Speaker" className="img-fluid" />
                <div className="speaker-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
                  </div>
                </div>
              </div>
              <div className="speaker-content">
                <div className="speaker-badge">Featured</div>
                <h4>Michael Rodriguez</h4>
                <p className="speaker-title">Product Strategy Director</p>
                <p className="speaker-company">Innovation Labs</p>
                <p className="speaker-bio">Passionate about creating user-centered products that solve real-world problems and drive business growth through data-driven insights.</p>
                <div className="speaker-session">
                  <span className="session-topic">Product Management Best Practices</span>
                </div>
              </div>
            </div>
          </div>{/* End Speaker Card */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="assets/img/events/speaker-3.webp" alt="Speaker" className="img-fluid" />
                <div className="speaker-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
                  </div>
                </div>
              </div>
              <div className="speaker-content">
                <h4>Emma Thompson</h4>
                <p className="speaker-title">UX Design Lead</p>
                <p className="speaker-company">Creative Studio</p>
                <p className="speaker-bio">Specialized in creating intuitive digital experiences that bridge the gap between user needs and business objectives.</p>
                <div className="speaker-session">
                  <span className="session-topic">Design Systems at Scale</span>
                </div>
              </div>
            </div>
          </div>{/* End Speaker Card */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={350}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="assets/img/events/speaker-7.webp" alt="Speaker" className="img-fluid" />
                <div className="speaker-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
                  </div>
                </div>
              </div>
              <div className="speaker-content">
                <h4>David Kim</h4>
                <p className="speaker-title">Data Science Manager</p>
                <p className="speaker-company">Analytics Pro</p>
                <p className="speaker-bio">Expert in machine learning algorithms and predictive analytics, helping organizations make data-driven decisions with confidence.</p>
                <div className="speaker-session">
                  <span className="session-topic">AI in Business Applications</span>
                </div>
              </div>
            </div>
          </div>{/* End Speaker Card */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="assets/img/events/speaker-10.webp" alt="Speaker" className="img-fluid" />
                <div className="speaker-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
                  </div>
                </div>
              </div>
              <div className="speaker-content">
                <div className="speaker-badge">Keynote</div>
                <h4>Lisa Johnson</h4>
                <p className="speaker-title">Marketing Director</p>
                <p className="speaker-company">Growth Partners</p>
                <p className="speaker-bio">Driving customer acquisition and retention strategies for high-growth startups through innovative marketing campaigns.</p>
                <div className="speaker-session">
                  <span className="session-topic">Growth Hacking Strategies</span>
                </div>
              </div>
            </div>
          </div>{/* End Speaker Card */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={450}>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src="assets/img/events/speaker-2.webp" alt="Speaker" className="img-fluid" />
                <div className="speaker-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter" /></a>
                  </div>
                </div>
              </div>
              <div className="speaker-content">
                <h4>James Wilson</h4>
                <p className="speaker-title">Security Engineer</p>
                <p className="speaker-company">SecureTech</p>
                <p className="speaker-bio">Protecting digital assets and ensuring cybersecurity best practices across enterprise environments and cloud platforms.</p>
                <div className="speaker-session">
                  <span className="session-topic">Modern Security Frameworks</span>
                </div>
              </div>
            </div>
          </div>{/* End Speaker Card */}
        </div>
      </div>
    </section>{/* /Speakers Section */}
    {/* Call To Action Section */}
    <section id="call-to-action" className="call-to-action section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Ready to Transform Your Event Experience?</h2>
            <p className="lead">Join thousands of forward-thinking professionals at the most innovative tech conference of the year. Discover cutting-edge solutions, network with industry leaders, and accelerate your career.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5" data-aos="zoom-in" data-aos-delay={200}>
          <div className="col-lg-10">
            <div className="cta-card">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="cta-content">
                    <div className="stats-grid mb-4">
                      <div className="stat-item">
                        <span className="stat-number" data-purecounter-start={0} data-purecounter-end={2500} data-purecounter-duration={2}>2500</span>
                        <span className="stat-label">Attendees</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number" data-purecounter-start={0} data-purecounter-end={75} data-purecounter-duration={2}>75</span>
                        <span className="stat-label">Speakers</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number" data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={2}>3</span>
                        <span className="stat-label">Days</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number" data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={2}>25</span>
                        <span className="stat-label">Tracks</span>
                      </div>
                    </div>
                    <h3>Don't Miss Out on the Future</h3>
                    <p>Early bird pricing ends in 5 days. Secure your spot now and save up to 40% on regular ticket prices.</p>
                    <div className="cta-buttons">
                      <a href="#" className="btn btn-primary">Get Your Tickets</a>
                      <a href="#" className="btn btn-outline">View Agenda</a>
                    </div>
                    <div className="trust-indicators mt-4">
                      <div className="trust-item">
                        <i className="bi bi-shield-check" />
                        <span>Money-back guarantee</span>
                      </div>
                      <div className="trust-item">
                        <i className="bi bi-lightning" />
                        <span>Instant confirmation</span>
                      </div>
                      <div className="trust-item">
                        <i className="bi bi-calendar-event" />
                        <span>Flexible cancellation</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-visual">
                    <div className="image-stack">
                      <img src="assets/img/events/showcase-8.webp" alt="Event showcase" className="main-image img-fluid" loading="lazy" />
                      <div className="floating-card card-1" data-aos="fade-up" data-aos-delay={300}>
                        <div className="card-content">
                          <i className="bi bi-people-fill" />
                          <div>
                            <span className="card-number">89%</span>
                            <span className="card-text">Would attend again</span>
                          </div>
                        </div>
                      </div>
                      <div className="floating-card card-2" data-aos="fade-up" data-aos-delay={400}>
                        <div className="card-content">
                          <i className="bi bi-star-fill" />
                          <div>
                            <span className="card-number">4.9/5</span>
                            <span className="card-text">Average rating</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5" data-aos="fade-up" data-aos-delay={300}>
          <div className="col-lg-8">
            <div className="urgency-bar">
              <div className="urgency-content">
                <i className="bi bi-clock-fill" />
                <span className="urgency-text">Limited time offer - Early bird pricing ends soon!</span>
                <div className="countdown d-flex" data-count="2026/01/15">
                  <div>
                    <span className="count-days">00</span>
                    <small>Days</small>
                  </div>
                  <div>
                    <span className="count-hours">00</span>
                    <small>Hours</small>
                  </div>
                  <div>
                    <span className="count-minutes">00</span>
                    <small>Min</small>
                  </div>
                  <div>
                    <span className="count-seconds">00</span>
                    <small>Sec</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Call To Action Section */}
    {/* Tickets Section */}
    <section id="tickets" className="tickets section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Tickets</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="ticket-card">
              <div className="ticket-header">
                <div className="ticket-icon">
                  <i className="bi bi-calendar-event" />
                </div>
                <h4 className="ticket-title">Early Bird</h4>
                <div className="price-section">
                  <span className="currency">$</span>
                  <span className="amount">75</span>
                </div>
                <p className="ticket-subtitle">Limited time offer</p>
              </div>
              <div className="ticket-body">
                <ul className="benefits-list">
                  <li><i className="bi bi-check2" /> Event entrance</li>
                  <li><i className="bi bi-check2" /> Welcome kit</li>
                  <li><i className="bi bi-check2" /> Light refreshments</li>
                  <li><i className="bi bi-x" /> Premium seating</li>
                  <li><i className="bi bi-x" /> Networking session</li>
                </ul>
                <a href="buy-tickets.html" className="ticket-btn">Purchase Now</a>
              </div>
            </div>
          </div>{/* End Ticket Card */}
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="ticket-card premium">
              <div className="ticket-header">
                <div className="ticket-icon">
                  <i className="bi bi-star-fill" />
                </div>
                <h4 className="ticket-title">Regular</h4>
                <div className="price-section">
                  <span className="currency">$</span>
                  <span className="amount">125</span>
                </div>
                <p className="ticket-subtitle">Best value package</p>
              </div>
              <div className="ticket-body">
                <ul className="benefits-list">
                  <li><i className="bi bi-check2" /> Event entrance</li>
                  <li><i className="bi bi-check2" /> Welcome kit</li>
                  <li><i className="bi bi-check2" /> Light refreshments</li>
                  <li><i className="bi bi-check2" /> Premium seating</li>
                  <li><i className="bi bi-x" /> Networking session</li>
                </ul>
                <a href="buy-tickets.html" className="ticket-btn">Purchase Now</a>
              </div>
            </div>
          </div>{/* End Ticket Card */}
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="ticket-card">
              <div className="ticket-header">
                <div className="ticket-icon">
                  <i className="bi bi-gem" />
                </div>
                <h4 className="ticket-title">Premium</h4>
                <div className="price-section">
                  <span className="currency">$</span>
                  <span className="amount">195</span>
                </div>
                <p className="ticket-subtitle">Full experience access</p>
              </div>
              <div className="ticket-body">
                <ul className="benefits-list">
                  <li><i className="bi bi-check2" /> Event entrance</li>
                  <li><i className="bi bi-check2" /> Welcome kit</li>
                  <li><i className="bi bi-check2" /> Light refreshments</li>
                  <li><i className="bi bi-check2" /> Premium seating</li>
                  <li><i className="bi bi-check2" /> Networking session</li>
                </ul>
                <a href="buy-tickets.html" className="ticket-btn">Purchase Now</a>
              </div>
            </div>
          </div>{/* End Ticket Card */}
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={400}>
            <div className="ticket-card">
              <div className="ticket-header">
                <div className="ticket-icon">
                  <i className="bi bi-bank" />
                </div>
                <h4 className="ticket-title">VIP</h4>
                <div className="price-section">
                  <span className="currency">$</span>
                  <span className="amount">275</span>
                </div>
                <p className="ticket-subtitle">Exclusive access</p>
              </div>
              <div className="ticket-body">
                <ul className="benefits-list">
                  <li><i className="bi bi-check2" /> All premium benefits</li>
                  <li><i className="bi bi-check2" /> VIP lounge access</li>
                  <li><i className="bi bi-check2" /> Meet &amp; greet</li>
                  <li><i className="bi bi-check2" /> Exclusive merchandise</li>
                  <li><i className="bi bi-check2" /> Priority support</li>
                </ul>
                <a href="buy-tickets.html" className="ticket-btn">Purchase Now</a>
              </div>
            </div>
          </div>{/* End Ticket Card */}
        </div>
      </div>
    </section>{/* /Tickets Section */}
    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="testimonials-slider swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>Sed ut perspiciatis unde omnis</h2>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p>
                    <p>
                      Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur. Enim ut eos quo.
                    </p>
                    <div className="profile d-flex align-items-center">
                      <img src="assets/img/person/person-m-7.webp" className="profile-img" alt />
                      <div className="profile-info">
                        <h3>Saul Goodman</h3>
                        <span>Client</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="featured-img-wrapper">
                      <img src="assets/img/person/person-m-7.webp" className="featured-img" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Testimonial Item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>Nemo enim ipsam voluptatem</h2>
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <p>
                      Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas voluptatem iure dolorum rerum. Repudiandae doloribus ut repellat harum vero aut. Modi aut velit aperiam aspernatur odit ut vitae.
                    </p>
                    <div className="profile d-flex align-items-center">
                      <img src="assets/img/person/person-f-8.webp" className="profile-img" alt />
                      <div className="profile-info">
                        <h3>Sara Wilsson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="featured-img-wrapper">
                      <img src="assets/img/person/person-f-8.webp" className="featured-img" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Testimonial Item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>
                      Labore nostrum eos impedit
                    </h2>
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    </p>
                    <p>
                      Itaque ut explicabo vero occaecati est quam rerum sed. Numquam tempora aut aut quaerat quia illum. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga. Hic nostrum suscipit corrupti nam expedita adipisci aut optio.
                    </p>
                    <div className="profile d-flex align-items-center">
                      <img src="assets/img/person/person-m-9.webp" className="profile-img" alt />
                      <div className="profile-info">
                        <h3>Matt Brandon</h3>
                        <span>Freelancer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="featured-img-wrapper">
                      <img src="assets/img/person/person-m-9.webp" className="featured-img" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Testimonial Item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>Impedit dolor facilis nulla</h2>
                    <p>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    </p>
                    <p>
                      Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto laborum.
                    </p>
                    <div className="profile d-flex align-items-center">
                      <img src="assets/img/person/person-f-10.webp" className="profile-img" alt />
                      <div className="profile-info">
                        <h3>Jena Karlis</h3>
                        <span>Store Owner</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="featured-img-wrapper">
                      <img src="assets/img/person/person-f-10.webp" className="featured-img" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Testimonial Item */}
          </div>
          <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </div>
    </section>{/* /Testimonials Section */}
    {/* Gallery Section */}
    <section id="gallery" className="gallery section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="gallery-filters isotope-filters" data-aos="fade-up" data-aos-delay={200}>
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-nature">Nature</li>
            <li data-filter=".filter-architecture">Architecture</li>
            <li data-filter=".filter-people">People</li>
          </ul>
          <div className="row gallery-grid isotope-container" data-aos="fade-up" data-aos-delay={300}>
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-1.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Natural Beauty</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-1.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-architecture">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-2.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Urban Landscape</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-2.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-people">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-3.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Candid Moments</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-3.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-4.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Wilderness</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-4.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-architecture">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-5.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Modern Design</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-5.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-people">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-6.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Portrait Studies</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-6.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-7.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Serene Waters</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-7.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
            <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-architecture">
              <div className="gallery-card">
                <div className="gallery-image">
                  <img src="assets/img/gallery/gallery-8.webp" className="img-fluid" alt />
                </div>
                <div className="gallery-overlay">
                  <h4>Historical Places</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="gallery-actions">
                    <a href="assets/img/gallery/gallery-8.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                    <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                  </div>
                </div>
              </div>
            </div>{/* End Gallery Item */}
          </div>
        </div>
      </div>
    </section>{/* /Gallery Section */}
  </main>
  <footer id="footer" className="footer position-relative light-background">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Eventix</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href><i className="bi bi-twitter-x" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <a href><i className="bi bi-linkedin" /></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Hic solutasetp</h4>
          <ul>
            <li><a href="#">Molestiae accusamus iure</a></li>
            <li><a href="#">Excepturi dignissimos</a></li>
            <li><a href="#">Suscipit distinctio</a></li>
            <li><a href="#">Dilecta</a></li>
            <li><a href="#">Sit quas consectetur</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Nobis illum</h4>
          <ul>
            <li><a href="#">Ipsam</a></li>
            <li><a href="#">Laudantium dolorum</a></li>
            <li><a href="#">Dinera</a></li>
            <li><a href="#">Trodelas</a></li>
            <li><a href="#">Flexo</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Eventix</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> | <a href="https://bootstrapmade.com/tools/">DevTools</a>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Home;
