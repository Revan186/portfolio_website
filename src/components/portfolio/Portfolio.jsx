import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Microservices with NestJs,RabbitMQ and Docker",
    img: "/micro.png",
    desc1: `- a complete microservices app with billing, orders and authentication`,
    link: "https://github.com/Revan186/nest-microservices/tree/main",
   // warning:'For now, only Google Meet is implemented'
  },
  {
    id: 2,
    title: "Calendaire",
    img: "/ss1.png",
    desc1: `- Schedule a Zoom, Google Meet or Microsoft Teams meeting with no pain 
    `,
    desc2: '- Track and Alter your meetings on the meetings page',
    desc3: '- Set days and dates where you are available in Availability',
    link: "https://calendaire-psi.vercel.app",
    warning:'For now, only Google Meet is implemented'
  },
  {
    id: 3,
    title: "CaseCobra",
    img: "/ss2.png",
    desc1: "- Create a Custom Iphone case made just for you",
    desc2: "- Pick a desired material, color, model and above all else, your own picture, displayed EXACTLY the way you want it to be",
    desc3: "- Have your memory always with you",
    link: "https://case-cobra-official.vercel.app"
  },
  {
    id: 4,
    title: "Interactive 3D Island",
    img: "/ss3.png",
    desc1: "- A fully interactive 3D Island with custom made bird, plane, fox and Island models",
    link:"https://github.com/Revan186/Island2"
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
            <p>{item.desc3}</p>
            <a href={item.link} target="blank">See Demo</a>
            <a>{item.warning}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
