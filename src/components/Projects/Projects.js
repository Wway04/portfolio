import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import fulfillment from "../../Assets/Projects/fulfillment.png";

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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="STREAMING PLATFORM"
                            description="Full-stack web app supporting real-time messaging and notifications."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={fulfillment}
                            isBlog={false}
                            title="FULFILLMENT SYSTEM "
                            description="A web application for managing orders, product inventory, and fulfillment workflows, integrated with real-time dashboards."
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
