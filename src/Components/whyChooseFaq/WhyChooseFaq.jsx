import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../whyChooseFaq/whyChooseFaq.css"; // Import CSS file
import { motion } from "framer-motion";

const faqs = [
  {
    question:
      "Why pick Sanjit Tech Solutions for app, website, or software development?",
    answer:
      "We create smart, easy-to-use, and custom digital solutions that help businesses grow and stay ahead. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
  {
    question: "How do you build a custom app or website?",
    answer:
      "Plan, Build, Test, Launch, and Support – We handle everything from start to success!. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
  {
    question: "Can you work with both small and big businesses?",
    answer:
      "Yes! We build solutions for startups, small businesses, and large companies. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words." ,
  },
  {
    question: "How do your solutions help businesses grow?",
    answer:
      "We use the latest technology, improve user experience, and add SEO & digital marketing to bring more customers to you. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Of course! We provide updates, fixes, and ongoing help to keep your app or website running smoothly. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
];

export default function WhyChooseFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="whychoose-faq-container">
      <div className="whychoosefaq_container">
        <h4 className="whychoosefaq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
      </div>
      {faqs.map((faq, index) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.2, // Staggered delay for rain effect
          }}
          key={index}
          className="whychoose-faq-box"
        >
          <button
            className="whychoose-faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? (
              <FiX className="whychoose-faq-icon" />
            ) : (
              <FiPlus className="whychoose-faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="whychoose-faq-answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
