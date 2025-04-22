// FAQ.js
import React, { useState } from "react";
import "./FAQ.css"; // Import the styles

const faqs = [
  {
    question: "Why are you called The Tech Bros?",
    answer:
      "It’s a tongue-in-cheek name 😜 Our community of technical women love it, and that’s who we’re here for!",
  },
  {
    question: "When is your next event?",
    answer:
      "All our events are posted on our Luma calendar. Subscribe to keep up to date 📆",
  },
  {
    question: "What is the format of the accelerator programme?",
    answer:
      "We'll be living in a hacker house for 2 weeks - building out our MVPs together! Then there will be a 6-week hybrid format, with weekly events happening in London (for those able to attend) 👯‍♀️",
  },
  {
    question: "Who's eligible for the accelerator programme?",
    answer:
      "If you're a team* of 1-3 women in STEM, you are eligible to apply 👩🏼‍💻👩🏽‍💻👩🏾‍💻 *(everyone in the team must identify as a woman & be from a technical background)",
  },
  {
    question: "How can I get involved with The Tech Bros?",
    answer:
      "Simple! Email team@thetechbros.io expressing how & why you'd like to get involved and we'll get back to you 💌",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h3 className="dyeitblue">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </button>
          <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
