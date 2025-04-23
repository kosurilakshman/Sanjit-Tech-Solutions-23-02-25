
import React from "react";
import home from "../../assets/home.webp";
import about from "../../assets/About.webp";
import ourstory from "../../assets/ourstory.webp";
import "../Aboutus/AboutUsPage.css";
import { motion } from "framer-motion";

// Simple fade-up animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const content = [
  {
    title: "Mobile App Development",
    subText:
      "We build high-performance mobile apps for Android, iOS, and cross-platform, ensuring scalability, security, and seamless user experience.",
  },
  {
    title: "Website Development",
    subText:
      "We create fast, responsive, and SEO-optimized websites, from corporate sites to e-commerce platforms, enhancing your online presence.",
  },
  {
    title: "AI Solutions",
    subText:
      "We integrate AI for automation, predictive analytics, and personalized experiences, optimizing business operations and decision-making.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="aboutus-Herosection">
      {/* Hero Section */}
      <img className="aboutus-Hero" src={home} alt="Home" loading="lazy" />
      <div className="aboutus">
        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="heading_para"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          We create digital solutions that drive success and growth.
        </motion.p>
      </div>

      {/* About Section */}
      <div className="aboutus-content">
        <motion.div
          className="aboutus-content-matter"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>About Sanjit Tech</h1>
          <p>
      At Sanjit Tech Solutions, we believe in transforming your digital journey with clarity and confidence. we aim to be a complete change for businesses seeking online growth and security. We provide visibility, transparency, and ease of use in all our solutions, We make sure your data is fair and easy to understand.
          </p>
        </motion.div>

        <motion.div
          className="aboutus-content-img"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={about} alt="About Us" loading="lazy" />
        </motion.div>
      </div>

      {/* Mission, Vision, Goals */}
      <div className="aboutus-mission">
          <motion.h1
          className="mission_vision_goals"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Mission, Vision and Goals
        </motion.h1>
        <div className="aboutus-boxes">
          {["Mission", "Vision", "Goals"].map((title, idx) => (
            <motion.div
              className="aboutus-box"
              key={idx}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2>{title}</h2>
              <p>
                {title === "Mission"
                  ? "Empowering businesses with innovative technology solutions."
                  : title === "Vision"
                  ? "To be the leading provider of digital transformation services."
                  : "Innovate, collaborate, and grow businesses worldwide."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Stories */}
      <motion.h1
        className="aboutus-story-1"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Latest Stories
      </motion.h1>
      <div className="aboutus-Stories">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="aboutus-box1"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              January 2025 -{" "}
              {index === 0 ? "App" : index === 1 ? "Web" : "AI"} Development
            </p>
            <h3>{item.title}</h3>
            <p>{item.subText}</p>
          </motion.div>
        ))}
      </div>

      {/* Teamwork Section */}
      <motion.h1
        className="aboutus-story"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Team Work
      </motion.h1>
      <div className="aboutus-ourstory">
        <motion.div
          className="aboutus-ourstory-img"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={ourstory} alt="Our Story" loading="preload" />
        </motion.div>
        <motion.div
          className="aboutus-ourstory-content"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
          Our smart team of web developers, app developers, software developers, AI specialists,Digital marketing experts, and security experts work together to build strong, safe digital tools for your business. We share ideas and help each other do our best. We listen to you and work closely to make your ideas real. We always aim for top quality so your business can grow. Let's team up!
 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;