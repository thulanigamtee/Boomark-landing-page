import React from "react";
import "./Faq.scss";
import iconArrow from "../../assets/images/icon-arrow.svg";

const Faq = () => {
  const showAnswer = (index) => {
    let answers = document.querySelectorAll(".faq__main > div > p");
    answers[index].classList.toggle("active");
  };

  return (
    <section className="faq">
      <div className="faq__header">
        <h2>frequently asked questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="faq__main">
        <div className="faq__main__first">
          <button
            onClick={() => showAnswer(0)}
            className="faq__main__first__question"
          >
            <p>What is Bookmark?</p>
            <img src={iconArrow} alt="icon-arrow" />
          </button>
          <p className="faq__main__first__answer answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div className="faq__main__second">
          <button
            onClick={() => showAnswer(1)}
            className="faq__main__second__question"
          >
            <p>How can I request a new browser?</p>
            <img src={iconArrow} alt="icon-arrow" />
          </button>
          <p className="faq__main__second__answer answer">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div className="faq__main__third">
          <button
            onClick={() => showAnswer(2)}
            className="faq__main__third__question"
          >
            <p>Is there a mobile app?</p>
            <img src={iconArrow} alt="icon-arrow" />
          </button>
          <p className="faq__main__third__answer answer">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        <div className="faq__main__fourth">
          <button
            onClick={() => showAnswer(3)}
            className="faq__main__fourth__question"
          >
            <p>What about other Chromium browsers?</p>
            <img src={iconArrow} alt="icon-arrow" />
          </button>
          <p className="faq__main__fourth__answer answer">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
      </div>
      <button className="faq__btn">More Info</button>
    </section>
  );
};

export default Faq;
