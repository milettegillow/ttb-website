import { useState } from "react";
import "./App.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import FAQ from "./FAQ";

function About() {
  const [count, setCount] = useState(0);

  const columnStyle = {
    flex: 1,
    padding: "1rem",
    borderRadius: "10px",
    backgroundColor: "transparent", // Override the semi-transparent black background
    position: "relative",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    marginBottom: "-25px",
    border: "none",
    boxShadow: "none",
    borderRadius: "10px", // Match your existing photo style
    position: "relative",
    zIndex: 0, // Ensure image is above or below text depending on desired effect
  };

  const imgStyle2 = {
    maxWidth: "50%",
    height: "auto",
    display: "block",
    marginBottom: "-25px",
    border: "none",
    boxShadow: "none",
    borderRadius: "10px", // Match your existing photo style
    position: "relative",
    zIndex: 0, // Ensure image is above or below text depending on desired effect
  };

  const textStyle = {
    position: "relative",
    zIndex: 1, // Higher index = in front
    color: "#fff", // Optional: make sure it's visible on top of the image
  };

  return (
    <div className="scroll-wrapper">
      <div className="app-content">
        <h3>WHY WE EXIST</h3>
        <div className="two-column">
          <div className="column" style={columnStyle}>
            <img
              src="/img/ttbStats.png"
              alt="a graphic illustrating stats"
              className="photo stats-image"
            />
          </div>

          <div className="column" style={columnStyle}>
            {/* <p>
            Female founders are chronically underserved and undervalued. Studies show that only 2% of VC funding goes to all-female teams, despite the fact that having a female on the team results in higher returns.
          </p> */}
            <p className="dyeitpink">
              Female-founded startups are objectively more successful than
              startups with all-male teams, consistently outperforming them.
              However, the funding disproportionately goes to all-male teams;
              79% of founding teams are entirely male, receiving 86% of venture
              funding, whereas the 7% of all-female teams only receive 2% of
              venture funding.
            </p>
            <h4>
              We don't believe funding women is a charitable endeavour. Rather,
              it is a commercial endeavour which many investors are,
              unfortunately, missing out on due to hidden biases in their
              thinking. Partnering with The Tech Bros will not only give you
              access to our incredible talent pool, but to a community where
              these biases are less prevalent.
            </h4>
          </div>
        </div>{" "}
        {/* ✅ this closes the two-column block properly */}
        <h3>OUR TEAM</h3>
        <div className="two-column">
          <div className="column" style={columnStyle}>
            <img
              src="src/assets/milette-headshot.png"
              id="headshot"
              alt="a headshot of Dr. Milette Gillow"
              style={imgStyle}
            />
            <div style={textStyle}>
              <p>
                <a href="https://www.linkedin.com/in/milettegillow/">
                  Dr Milette Gillow
                </a>{" "}
                is co-founder & Vision lead at The Tech Bros. She is a former VC
                and university lecturer in pure mathematics, as well as a
                professional{" "}
                <a href="https://milettegillow.com/">opera singer</a> trained at
                the Royal Academy of Music. Her work with startups has taken her
                to Hong Kong, Berlin, Paris, Dublin, and Amsterdam, most
                recently as a Talent Investor and later a founder-in-residence
                with <a href="https://www.joinef.com/">Entrepreneur First</a>.
                Milette has worked extensively on projects centering women
                throughout her career, from hackathons to panels to concerts,
                and recently joined the Governing Board of{" "}
                <a href="https://oxfordhigh.gdst.net/about/our-governors/">
                  Oxford High School GDST
                </a>
                .
              </p>
            </div>
          </div>
          <div className="column" style={columnStyle}>
            <img
              src="src/assets/sedinam-headshot.png"
              id="headshot"
              alt="a headshot of Sedinam Simpson"
              style={imgStyle}
            />
            <div style={textStyle}>
              <p>
                <a href="https://www.linkedin.com/in/sedinam-simpson/">
                  Sedinam Simpson
                </a>{" "}
                is co-founder & Strategy lead at The Tech Bros. She is a recent
                Machine Learning graduate from the{" "}
                <a href="https://www.cam.ac.uk/">University of Cambridge</a>{" "}
                where she was a{" "}
                <a href="https://deepmind.google/">Google DeepMind Scholar</a>.
                During her undergraduate degree, she was awarded the{" "}
                <a href="https://allangrayorbis.org/">
                  Allan Gray Orbis Foundation Fellowship
                </a>{" "}
                through which she founded a sustainable fashion brand called
                Chara. She previously worked as a Data Scientist, and in her
                free time enjoys attending music events & deep-diving into the
                fashion world.
              </p>
            </div>
          </div>
        </div>
        <div>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default About;
