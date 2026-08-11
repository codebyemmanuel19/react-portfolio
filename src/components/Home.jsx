import "./Home.css"

function Home(){
  return(
    <section className="home" id="home" data-aos="fade-up">
      <div className="home-content">

        <span className="availability-badge">
          <span className="dot"></span>
          Available for freelance work
        </span>

        <h1>I Build Websites That Turn Visitors Into Customers</h1>
        <h2>Web Development & Meta/TikTok Ads Specialist</h2>

        <p>
          Fast, modern, mobile-ready websites — built and launched 
          in days, not weeks. I also run the ad campaigns that 
          bring people to your site.
        </p>

        <div className="trust-signals">
          <span>⚡ 2s avg load time</span>
          <span>🌍 Clients across Africa & UK</span>
          <span>💬 Fast response on WhatsApp</span>
        </div>

        <div className="home-buttons">
          <a href="https://wa.me/2349027090880">
            <button className="btn-primary">Get a Free Quote</button>
          </a>

          <a href="#projects">
            <button className="btn-secondary">View My Projects</button>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home