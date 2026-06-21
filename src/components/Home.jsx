import "./Home.css"

function Home(){
  return(
    <section className="home" id="home" data-aos="fade-up">
      <div className="home-content">

        <span className="availability-badge">
          <span className="dot"></span>
          Available for freelance work
        </span>

        <h1>React Developer</h1>
        <h2>Based in Nigeria.</h2>

        <p>
          Building modern websites and expanding
          my digital marketing skills to help businesses
          grow online.
        </p>

        <div className="home-buttons">
          <a href="#projects">
            <button className="btn-primary">View My Projects</button>
          </a>

          <a href="#contact">
            <button className="btn-secondary">Contact Me</button>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home