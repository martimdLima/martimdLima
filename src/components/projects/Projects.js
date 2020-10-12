import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        return (
          <li key="projects.name">
            <blockquote>
               <p>{projects.name} - {projects.date}</p>
              {/* <p>{projects.date}</p> */}
              <p className="desc">{projects.description}</p>
            <cite>{projects.technologies}</cite>
            </blockquote>
            <br/>
          </li>
        );
      });
    }

    return (
      <section id="projects">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{projects}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
