import { useState } from "react";
import "./Navbar-Pc.css";
import "./Navbar-Phone.css";
export default function Navbar() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setDeviceWidth(window.innerWidth);
  });

  function handelNavCick(e) {
    e.target.className = "active";
    let elements = [...e.target.parentNode.parentNode.childNodes];
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].childNodes[0] !== e.target) {
        elements[i].childNodes[0].className = "notActive";
      }
    }
  }
  return (
    <nav className={deviceWidth >= 610 ? "nav-pc" : "nav-phone"}>
      <div className={deviceWidth >= 610 ? "logo-pc" : "logo-phone"}>
        <a href="#home">
          <img draggable="false" src="imgs/logo.png" alt="logo" />
        </a>
      </div>
      <ul className={deviceWidth >= 610 ? "list-pc" : "list-phone"}>
        <li>
          <a onClick={handelNavCick} href="#home">
            home
          </a>
        </li>
        <li>
          <a onClick={handelNavCick} href="#about">
            about
          </a>
        </li>
        <li>
          <a onClick={handelNavCick} href="#skills">
            skills
          </a>
        </li>
        <li>
          <a onClick={handelNavCick} href="#projects">
            projects
          </a>
        </li>
        <li>
          <a onClick={handelNavCick} href="#contact">
            contact me
          </a>
        </li>
      </ul>
      {deviceWidth < 610 && (
        <span
          onClick={(e) =>
            e.target.previousElementSibling.className === "list-phone active"
              ? (e.target.previousElementSibling.className = "list-phone")
              : (e.target.previousElementSibling.className =
                  "list-phone active")
          }
          className="material-symbols-outlined"
          style={{ userSelect: "none", cursor: "pointer" }}
        >
          menu
        </span>
      )}
    </nav>
  );
}
