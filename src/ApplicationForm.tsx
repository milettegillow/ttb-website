import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ApplicationForm.css'; // You'll need to create this CSS file
import "./App.css"

function ApplicationForm() {
  const [formData, setFormData] = useState({
    personalInfo: [{
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fromScratch: '',
    fastestBuild: '',
    idealCareer: ''}],
    companyName: '',
    companyURL: '',
    projectIdea: '',
    techExperience: '',
    whyInterested: '',
    farAlong: '',
    problemSolving: '', 
    howLong: '',
    haveDemo: '',
    haveUsers: '',
    peopleNeed: '',
    legalEntity: '',
    runway: '', 
    otherIdeas: '',
});

const handlePersonalInfoChange = (index, e) => {
  const { name, value } = e.target;
  const updated = [...formData.personalInfo];
  updated[index][name] = value;
  setFormData({ ...formData, personalInfo: updated });
};

const addTeamMember = () => {
  if (formData.personalInfo.length < 4) {
    setFormData({
      ...formData,
      personalInfo: [
        ...formData.personalInfo,
        { firstName: '', lastName: '', email: '', phone: '', fromScratch: '', fastestBuild: '', idealCareer: '' }
      ]
    });
  }
};

const removeTeamMember = (index: number) => {
  setFormData((prev) => {
    const updated = [...prev.personalInfo];
    updated.splice(index, 1);
    return { ...prev, personalInfo: updated };
  });
};


  const handleChange = (e) => {
    const { name, value, files } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Redirect or show a success message
    alert('Application submitted successfully!');
  };

  return (
    <div className="application-form-container">
      <div>
        <h1 className='application-heading'>TTB Accelerator Application</h1>
      </div>
      <p className="form-intro dyeitblue">
        Thank you for your interest in the TTB Accelerator programme. Please complete all fields below to submit your application.
      </p>

<form onSubmit={handleSubmit}>
      <div className="form-section">
        <h5>Personal Information</h5>

        {formData.personalInfo.map((person, index) => (
            <div
              key={index}
              className="team-member-section"
            >

              {index > 0 && (
                <>
                <button
                  type="button"
                  onClick={() => removeTeamMember(index)}
                  className="button remove-button"
                >
                  Remove
                </button>
                <div className="spacer"></div> 
                </>
              )}

            <h5 className='dyeitwhite leftalign smallfont'>{index === 0 ? "TEAM MEMBER 1" : `Team Member ${index+1}`}</h5>



            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={person.firstName}
                onChange={(e) => handlePersonalInfoChange(index, e)}
                required={index === 0}
              />
            </div>

      <div className="form-group">
        <label>Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={(e) => handlePersonalInfoChange(index, e)}
          required={index === 0}
        />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={(e) => handlePersonalInfoChange(index, e)}
          required={index === 0}
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={person.phone}
          onChange={(e) => handlePersonalInfoChange(index, e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`fromScratch-${index}`}>
          Have you built / set up anything from scratch before, & what was it if yes? *
        </label>
        <textarea
          name="fromScratch"
          value={person.fromScratch}
          onChange={(e) => handlePersonalInfoChange(index, e)}
          required={index === 0}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`fastestBuild-${index}`}>
          What's the fastest you've pulled something together (either technical / non-technical), & what was it? *
        </label>
        <textarea
          name="fastestBuild"
          value={person.fastestBuild}
          onChange={(e) => handlePersonalInfoChange(index, e)}
          required={index === 0}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`idealCareer-${index}`}>
          What does your ideal career look like? *
        </label>
        <textarea
          name="idealCareer"
          value={person.idealCareer}
          onChange={(e) => handlePersonalInfoChange(index, e)}
          required={index === 0}
          rows={4}
        />
      </div>
    </div>
  ))}

  {formData.personalInfo.length < 4 && (
    <button type="button" onClick={addTeamMember} className="button add-button">
      + Add a Team Member
    </button>
  )}
</div>




        <div className="form-section">
          <h5>Team Information</h5>
            
            <div className="form-group">
              <label htmlFor="companyName"> Company Name (non-binding)* </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyURL"> Company Website (if set up) </label>
              <input
                type="text"
                id="companyURL"
                name="companyURL"
                value={formData.companyURL}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="farAlong">How far along are you? *</label>
              <select
                id="farAlong"
                name="farAlong"
                value={formData.farAlong}
                onChange={handleChange}
                required
              >
                <option value="">Select below</option>
                <option value="Team, no idea what to work on">team ✔️ idea ❌ progress ❌ traction ❌</option>
                <option value="Idea of what to work on, haven’t started ">team ✔️ idea ✔️progress ❌ traction ❌</option>
                <option value="Have started building, no traction yet-3">team ✔️ idea ✔️ progress ✔️ traction ❌</option>
                <option value="We’re seeing traction"> team ✔️ idea ✔️ progress ✔️ traction ✔️</option>
              </select>
            </div>

            <div className="form-group">
            <label htmlFor="problemSolving">What problem are you solving? Do you have any domain expertise to solve this particular problem? *</label>
            <textarea
              id="problemSolving"
              name="problemSolving"
              value={formData.problemSolving}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="howLong">How long have you been working on this problem (either individually or as a team)? Provide details: *</label>
            <textarea
              id="howLong"
              name="howLong"
              value={formData.howLong}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="haveDemo"> Do you have a demo? If yes, drop it below *</label>
            <textarea
              id="haveDemo"
              name="haveDemo"
              value={formData.haveDemo}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="haveUsers"> Do you have any users? Provide details *</label>
            <textarea
              id="haveUsers"
              name="haveUsers"
              value={formData.haveUsers}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="peopleNeed"> How do you know people need what you're making? *</label>
            <textarea
              id="peopleNeed"
              name="peopleNeed"
              value={formData.peopleNeed}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="legalEntity"> Have you formed any legal entity yet? Give details if yes *</label>
            <textarea
              id="legalEntity"
              name="legalEntity"
              value={formData.legalEntity}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="runway"> How long is your runway (months)? [aka how long can you keep working on this without any additional funding?] *</label>
            <textarea
              id="runway"
              name="runway"
              value={formData.runway}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="otherIdeas"> Which other ideas have you considered working on as a team? *</label>
            <textarea
              id="otherIdeas"
              name="otherIdeas"
              value={formData.otherIdeas}
              onChange={handleChange}
              placeholder=""
              required
              rows={4}
            />
          </div>
        </div>

        <div className="form-buttons">
         <button type="submit" className="button submit-button">Submit Application</button>
         <Link to="/apply" className="button cancel-button">Cancel</Link>
        </div>

      </form>
    </div>
  );
}

export default ApplicationForm;