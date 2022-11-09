import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App(props) {
  return (
    <div>
      <div className='App'>
        <header className='Fiora'>
          <div className='linked-in'>
            <a href='https://www.linkedin.com/in/fiorademarco'>
              <img
                className='icon'
                src={require("./Icons/linkedin-icon.png")}
                alt=''
              />
            </a>
          </div>
          <div>
            <div className='portfolio-name'>
              Fiora De Marco ~ Software Engineer
            </div>
          </div>

          <a href='https://github.com/FioraDeMarco'>
            <img
              className='icon'
              src={require("./Icons/GitHub-Mark.png")}
              alt=''
            />
          </a>
        </header>
      </div>
      <div className='display-flex'>
        <br />
        <br />
        <div className='portfolio-name'>
          <Link to='/Portfolio'>Portfolio</Link>
        </div>
        <div className='tile'>
          {/* Software Engineer */}

          <br />
          <br />
          <div className='container'>
            {/* <Link to='/Portfolio'> */}
            Hi, I'm Fiora! I'm a NYC native who loves live music, traveling, and
            watching the Yankees win. Having studied architecture, I have a
            background in design and an understanding of how different
            elements/components can work together optimally to create a good web
            design and user experience. I love the sense of accomplishment I get
            from solving problems by thinking outside the box, breaking them
            down from a high level, and tackling them piece by piece. I am
            currently exploring opportunities for growth as a Software Developer
            in New York City and look forward to working with a team that values
            collaboration in a learning environment. I am someone that can find
            happiness in many situations and I love to learn!
            {/* Want to see more? Check out my PORTFOLIO!
            </Link> */}
            <br />
            <br />
            <div className='portfolio-name'>
              <a href='mailto:fiorademarco7@gmail.com'>
                Like to chat? Send me an email!
                <div className='name'>fiorademarco7@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
