import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ecommerce Wbsite"
              description="I develope a ecommerce website by using react and springboot."
              ghLink="https://github.com/Amolnaikwade/ExcelrEcommerceApp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hospital Management"
              description="I amke Hospital management website by using React and springboot."
              ghLink="https://github.com/Ankita15-droid/OnlineHospitalManagementSystemFrontEnd/tree/main/src"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Coffee Junkie Wbsite"
              description="I make Coffee Junkie website Usinf html, css, js, React"
              ghLink="https://github.com/Amolnaikwade/coffee-junkie"
                           
            />
          </Col>

         

          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
