import React, { useContext } from "react";
import "./SmallProjects.scss"; // Create a new SCSS file
import { smallProjects } from "../../portfolio"; // Use the correct variable name
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function SmallProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!smallProjects.display) { // Use the correct variable name here
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="small-projects">
        <div>
          <h1 className="skills-heading">{smallProjects.title}</h1> {/* Corrected */}
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {smallProjects.subtitle} {/* Corrected */}
          </p>

          <div className="projects-container">
            {smallProjects.projects.map((project, i) => { // Corrected
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark
                                  ? "dark-mode project-tag"
                                  : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
