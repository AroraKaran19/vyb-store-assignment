"use client";
import React, { useState } from 'react'

const FAQSection = () => {

  const [faqs, setFaqs] = useState([
    {
      question: "How much does it cost to set up a store?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt",
    },
    {
      question: "What kind of digital products can I sell?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt"
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
      active: true
    },
    {
      question: "Is there a limit to the number of products I can list?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt"
    },
    {
      question: "How do I receive payments for my sales?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt"
    },
    {
      question: "Can I sell internationally on this marketplace?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt"
    },
    {
      question: "What support and resources are available for sellers?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt"
    },
    {
      question: "Is there a review process for uploaded products?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore unde temporibus recusandae saepe ullam quasi quod optio doloremque esse ducimus asperiores aliquam similique nesciunt"
    },
  ])

  const toggleFaq = (index: number) => {
    const updatedFAQ = faqs.map((faq, i) => {
      if (index == i) {
        return {...faq, active: !faq.active }
      } else {
        return {...faq, active: false }
      }
    })
    setFaqs(updatedFAQ);
  };

  return (
    <section id="faq" className="faq-section w-full flex items-stretch sm:flex-col">
      <div className="faq-section_textarea w-[40%] flex flex-col justify-center sm:w-full">
        <h1 className="faq-section_heading w-full text-[#00DC82] sm:text-center">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="faq-section_subheading w-full flex flex-col gap-2 text-white sm:text-center">
          <h2>Quick answers to questions you may have. Can't find what you're looking for?</h2>
          <h2>Check out our full documentation</h2>
        </div>
      </div>
      <div className="faq-section_content_area w-[60%] flex flex-col gap-4 sm:w-full">
        {faqs.map((faq, index) => (
          <div key={faq.question + index} className="faq-content w-full flex flex-col bg-white text-black rounded-2xl cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => {toggleFaq(index)}}>
            <div className="faq-content_top w-full flex items-stretch">
              <p className="faq-content_question flex-1">{faq.question}</p>
              <div className="faq-content_btn flex-none flex items-center shrink-0">
                {faq.active ?
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                  : 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                  </svg>}
              </div>
            </div>
            <div className={`faq-content_answer w-full ${faq.active ? "flex" : "hidden"}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection;