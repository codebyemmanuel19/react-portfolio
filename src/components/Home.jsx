import "./Home.css"
function Home(){

    return(
      <section className="home" data-aos="fade-up">
        <div className="home-content">
          <h1>React Developer</h1>
          <h2>Based in Nigeria.</h2>

          <p>
            Passionate about creating clean, modern,
            and user friendly websites. Web design
            should be creative, fast, and impactful.
            Currently deepening skills in JavaScript React
            and building real world projects every day.
          </p>

          <a href="#projects">
            <button>View My Projects</button>
          </a>

        </div>
      </section>
    )
}

export default Home