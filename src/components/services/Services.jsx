import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Value</motion.b> I can Provide
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For You</motion.b> and Your Bussiness
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Server-side 
          </h2>
          <p>
            My strongest side is everything related to backend engineering. I work with node Js and Golang, prefer Nest and Express. I know SQL incredibly well and use both relational and no-SQL databases really well.
          </p>

          <p>I am excellent at designing a system which is secure, fast, failure-proof and will scale without database exploding and can solve errors efficiently.</p>
          <a href="#Contact">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Client</h2>
          <p>
            I have excellent both fundamental understanding and ability to use React, NextJs and RN with Expo, know state managers like Redux and Zustand.

          </p>

          <p>Have made some really beautiful websites, know web design at decent level. That being sad, i enjoy developing more than using Figma. </p>

          <p>I also know Three Js quite well</p>
          <a href="#Contact">Go</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DevOps and DevSecOps</h2>
          <p>
            I have massive experience at making websites more secure, writing CI/CD Pipelines, I know technologies like Docker, Jenkins,Git, Nagios and Kubernetes really well.
          </p>

          <p>
            I am very confident with cloud, in particular with Digital Ocean. Know services like AWS and Azure well too.
          </p>
          <a href="#Contact">Go</a>
          
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ai Automation and Testing</h2>
          <p>
            I am very good with ai integrations into projects. In particular i have made automation bots (for e-commerce and hotels) with tools like Puppeteer
          </p>

          <p>
            I am capable when it comes to testing with PlayWrite, Jest and other tools.
          </p>
          <a href="#Contact">Go</a>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
