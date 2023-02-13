import React from "react";
import "./Outro.scss";

const Outro = () => {
  return (
    <section className="outro">
      <div className="outro__info">
        <p> 35,000+ already joined</p>
        <h2> Stay up-to-date with what we’re doing</h2>
      </div>
      <form className="outro__form">
        <input required placeholder="Enter your email address" />
        <button type="submit">Contact Us</button>
      </form>
    </section>
  );
};

export default Outro;
