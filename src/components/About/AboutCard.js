import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi everyone! I’m{" "}
                        <span className="purple">Le Mai Quoc Khanh</span> from{" "}
                        <span className="purple">
                            Ho Chi Minh City, Vietnam
                        </span>
                        .
                        <br />
                        I’m currently studyng as a{" "}
                        <span className="purple">
                            Information Systems
                        </span> at{" "}
                        <span className="purple">
                            University of Information Technology
                        </span>
                        <br />
                        Outside of coding, I love engaging in activities that
                        keep me creative and inspired:
                    </p>

                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games 🎮
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Watching Movies 🎥
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Traveling and Exploring New Places
                            🌍
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Gymming 💪
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">
                        Le Mai Quoc Khanh
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
