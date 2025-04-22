import "./Apply.css";
import { Link } from "react-router-dom";

function Apply() {
  return (
    <div className="app-content">
      <h1 className="thetechbros">
        <span className="mobile-break">the </span>
        {""}
        <span className="mobile-break">tech </span>
        {""}
        <span className="mobile-break">bros.</span>
        {""}
      </h1>
      <h4 className="dyeitwhite spacerbig">
        The TTB Accelerator programme will run from the 1st of July to the 31st
        of August 2025, taking the best and brightest minds from 0 to 1 &
        helping their teams secure funding at the end of the programme. The
        first two weeks of the programme will take place in a two-week hacker
        house format, with the entire cohort living & working together in a
        focused space. The remaining 6 weeks will take a full-time hybrid
        format, allowing teams to work remotely from wherever they are based,
        with in-person group activities based primarily out of London. The
        programme is open to female, technical founding teams - that is to say:
        every member of the founding team must identify as a woman and must have
        a STEM background.
      </h4>

      <h4 className='spacer'>Applications will open on 22nd April 2025</h4>
      
{/* 
      <Link to="/application-form">
        <button className="button">Apply Now</button>
      </Link> */}

    </div>
  );
}

export default Apply;
