import "./Home.css"

function Home(){
  return(
    <section className="home" id="home" data-aos="fade-up">
      <div className="home-content">

        <span className="availability-badge">
          <span className="dot"></span>
          Available for freelance work
        </span>

        <h1>Web Developer | TikTok & Meta Ads Specialist</h1>
        <h2>Based in Nigeria.</h2>

        <p>
          I build fast, modern websites and run 
          digital marketing campaigns that help 
          businesses attract more customers online.
        </p>

        <div className="home-buttons">
          <a href="#projects">
            <button className="btn-primary">View My Projects</button>
          </a>

          <a href="https://wa.me/2349027090880">
            <button className="btn-secondary">Contact Me</button>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home