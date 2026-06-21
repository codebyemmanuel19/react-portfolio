import "./Home.css"
function Home(){

    return(
      <section className="home" id="home" data-aos="fade-up">
        <div className="home-content">
          <h1>React Developer</h1>
          <h2>Based in Nigeria.</h2>

          <p>
            Building modern websites and expanding
            my digital marketing skills to help businesses
            grow online.
          </p>

          <a href="#projects">
            <button>View My Projects</button>
          </a>

        </div>
      </section>
    )
}

export default Home