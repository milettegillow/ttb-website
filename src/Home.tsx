import { useState } from "react";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="scroll-wrapper">
      <div className="app-content">
        <h1 className="thetechbros">
          <span className="mobile-break">the </span>
          {""}
          <span className="mobile-break">tech </span>
          {""}
          <span className="mobile-break">bros.</span>
          {""}
        </h1>
        <h2>
          {"<>"} backing startups with all-female, all-technical founding teams{" "}
          {"</>"}
        </h2>

        <div className="two-column home-block">
          <div className="column text-block">
            <h3>WHAT WE DO</h3>
            <h4 id="emph">
              Our mission is to increase the number of all-female, all-technical
              startups coming into existence.
            </h4>
            <p>
              TTB enables women in highly technical fields, with a focus on
              postgrads and PhDs, to launch their startup through our hands-on
              events & accelerator programme, running July-August 2025 (apply
              here). Through our{" "}
              <a href="events.html">hackathons, panels & workshops</a>, we aid
              women with STEM backgrounds in going from 0 to 1 through
              co-founder matching, MVP coding, and relationships with investors.
            </p>
            <img
              src="img/ttbLogos.png"
              alt="Google, HCVC, Oxford Capital, and Oxford Science Enterprises logos"
              className="photo"
            />
          </div>
          <div className="column image-block">
            <img
              src="/ttbHome1.png"
              alt="a woman pointing at a computer screen while a group of women watches"
              className="photo"
            />
          </div>
        </div>

        <div className="two-column home-block">
          <div className="column image-block">
            <img
              src="/ttbHome2.png"
              alt="a woman pitching to a room full of women"
              className="photo"
            />
          </div>
          <div className="column text-block">
            <h3>WHY WE DO IT</h3>
            <h4>
              It's no secret that the odds are stacked against female founders.
            </h4>
            <p>
              Studies show that when presented with identical pitches, both male
              and female investors rate those pitched by men more favourably.
              Additionally, both male and female investors rated identical
              pitches more highly when they were told a male investor had
              already invested in the company (compared to a female investor).
            </p>
            <p>
              When pitching, male founders are more often asked “promotion”
              questions focused on what might go right, compared to female
              founders who are asked "prevention" questions focused on what
              might go wrong. Studies examining comparable companies observe
              that entrepreneurs who were asked primarily “prevention” questions
              raised an average of seven times less than founders who were
              mostly asked “promotion” questions.
            </p>
            <h4 className="dyeitpink">
              £250 billion of new value could be added to the UK economy if
              women started and scaled new businesses at the same rate as men.
              We're here to make it happen.
            </h4>
          </div>
        </div>

        {/* <button onClick={() => setCount(count + 1)}>
          Click Count: {count}
        </button> */}
      </div>
    </div>
  );
}

export default Home;
