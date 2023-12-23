import { useEffect, useRef, useState } from "react";
import "./BodyPage-pc.css";
import "./BodyPage-phone.css";
export default function BodyPage() {
  let index = 0;
  let stringIndexFD = 0;
  let stringRemouve = false;
  const job = ["front-end   ", "back-end  ", "full-stack   ", "MERN-Stack   "];
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setDeviceWidth(window.innerWidth);
  });
  const span = useRef(null);
  const [skills, setSkills] = useState([
    {
      name: "test",
      percenteg: 100,
      color: "#000",
      logo: "fa-css3",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      img: "/projectsImgs/img1.jpg",
      titel: "titel of projects",
      usable: true,
      descreption: "thje descriptio",
      link: "#isusable",
    },
  ]);
  const [contactEmailData, setcontactEmailData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  function renderSkills(skill = {}, index) {
    return (
      <div key={index} style={{ "--i-c": skill.color }} className={skill.name}>
        <i
          className={
            skill.isBrand ? "fa-brands " + skill.logo : "fa-solid " + skill.logo
          }
        ></i>
        <span
          className="percent"
          data-content={skill.percenteg + "%"}
          style={{ "--p": skill.percenteg }}
        ></span>
      </div>
    );
  }
  function renderProjects(project = {}, index) {
    return (
      <div className="project" key={index}>
        <div className="project-img">
          <img src={project.img} />
        </div>
        <div className="project-details">
          <h2>{project.titel}</h2>
          <p>{project.descreption}</p>
          {project.usable && <a href={project.link}>use it now</a>}
        </div>
      </div>
    );
  }
  useEffect(() => {
    setInterval(() => {
      if (stringIndexFD <= 0 && !stringRemouve) {
        index++;
        stringIndexFD = 0;
        if (index >= 4) {
          index = 0;
        }
      }
      if (!stringRemouve) {
        stringIndexFD++;
        span.current.innerText = job[index].substring(0, stringIndexFD);
        if (stringIndexFD >= job[index].length) {
          stringRemouve = true;
        }
      } else {
        stringIndexFD--;
        span.current.innerText = job[index].substring(0, stringIndexFD);
        if (stringRemouve && stringIndexFD <= 0) {
          stringRemouve = false;
        }
      }
    }, 180);
  }, []);

  useEffect(() => {
    fetch("data.json").then((res) => {
      res.json().then((res) => {
        setSkills(res.skills);
        setProjects(res.projects);
      });
    });
  }, []);
  console.log(contactEmailData);
  return (
    <div className={deviceWidth <= 610 ? "bodyIsPhone" : "body"}>
      <div
        className={deviceWidth <= 610 ? "section-home-phone" : "section-home"}
      >
        <span id="home"></span>
        <div className="details">
          <div className="name-jobs">
            <h1>
              Hello
              <span className="hand-animation">
                <span>&#128075; </span>{" "}
              </span>
              I'm
              <span className="full-name">
                <span> Badr</span> Jamaaoui
              </span>
            </h1>
            <h2>
              a <span ref={span} className="Jobs"></span>
            </h2>
          </div>
          <div className="about-btn">
            <h3> Go expolre more by hiting</h3>
            <a href="#about" className="a-button">
              About me <i className="fa-regular fa-circle-down"></i>
            </a>
          </div>

          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/badr-jamaaoui-8199ab29b"
              className="a-social-media"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://wa.me/message/6X5ZJRIWJYYPI1"
              className="a-social-media"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/badrjamaaoui/"
              className="a-social-media"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="profile">
          <img src="/cv/imgs/profile.jpg" />
        </div>
      </div>
      <div
        className={deviceWidth <= 610 ? "section-about-phone" : "section-about"}
      >
        <div className="imgs-info">
          <div className="details" id="about">
            <h1 className="section-titel">
              <span>a</span>bout <span>m</span>e
            </h1>
            <p>
              Hello, I'm Badr Jammaoui, a passionate and dedicated full-stack
              web developer hailing from Morocco. At 16 years old, I've immersed
              myself in the dynamic world of web development, specializing in
              the MERN (MongoDB, Express.js, React, Node.js) stack. My journey
              in this field has been driven by a deep curiosity and a commitment
              to creating seamless and innovative digital experiences. I thrive
              on challenges and constantly seek to expand my knowledge to stay
              at the forefront of technology. I'm excited about the limitless
              possibilities within the web development landscape and am always
              eager to contribute my skills to exciting projects.
            </p>
          </div>
          <div className="imgs" id="skills">
            <h1 className="section-titel">
              <span>m</span>y <span>s</span>kills
            </h1>
            {skills.map((skill, index) => {
              return renderSkills(skill, index);
            })}
          </div>
        </div>
      </div>
      <div
        className={
          deviceWidth <= 610 ? "section-projects-phone" : "section-projects"
        }
        id="projects"
      >
        <h1 className="section-titel">
          <span>p</span>rojects
        </h1>
        <div className="container">
          {projects.map((project, index) => {
            return renderProjects(project, index);
          })}
        </div>
      </div>
      <div
        className={
          deviceWidth <= 610 ? "section-contact-phone" : "section-contact"
        }
        id="contact"
      >
        <h1 className="section-titel">
          <span>c</span>ontact <span>m</span>e
        </h1>
        <div className="container">
          <div className="email">
            <img src={require("./media/costumar.jpg")} />
            <div className="form">
              <input
                type="text"
                onChange={(e) =>
                  setcontactEmailData({
                    ...contactEmailData,
                    subject: e.target.value,
                  })
                }
                value={contactEmailData.subject}
                placeholder="subject"
                id="subject"
              />
              <input
                type="text"
                onChange={(e) =>
                  setcontactEmailData({
                    ...contactEmailData,
                    name: e.target.value,
                  })
                }
                value={contactEmailData.name}
                placeholder="name"
                id="clientName"
              />
              <textarea
                type="text"
                onChange={(e) =>
                  setcontactEmailData({
                    ...contactEmailData,
                    message: e.target.value,
                  })
                }
                value={contactEmailData.message}
                placeholder="message"
                id="message"
              />
              <a
                href={`mailto:jamaaoui.business@gmail.com?subject=${encodeURIComponent(
                  contactEmailData.subject
                )}&body=${encodeURIComponent(
                  "the name is:" +
                    contactEmailData.name +
                    "the email is :" +
                    contactEmailData.message
                )}`}
                style={{
                  display:
                    contactEmailData.message.replace(/\s/g, "").length > 0 &&
                    contactEmailData.name.replace(/\s/g, "").length > 0
                      ? "initial"
                      : "none",
                }}
              >
                let's work together
              </a>
            </div>
          </div>
          <div className="social-media-platform-container">
            <h1 className="section-titel">OR</h1>
            <div className="social-media">
              <a
                href="https://wa.me/message/6X5ZJRIWJYYPI1"
                style={{ "--b-c": "#25D366" }}
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/badrjamaaoui/"
                style={{ "--b-c": "#E1306C" }}
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/badr-jamaaoui-8199ab29b"
                style={{ "--b-c": "#0a66c2" }}
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
