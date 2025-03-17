import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li data-number="01.">
              <a href="#skills">About</a>
            </li>
          )}
          {viewExperience && (
            <li data-number="02.">
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewOpenSource && (
            <li data-number="03.">
              <a href="#opensource">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li data-number="04.">
              <a href="#achievements">Contact</a>
            </li>
          )}
          {viewBlog && (
            <li data-number="05.">
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li data-number="06.">
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li data-number="07.">
              <a href="#resume">Resume</a>
            </li>
          )}
          <li data-number="08.">
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;