import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import prjImg1  from "../assets/img/prjImg2.png"
import prjImg2  from "../assets/img/prjImg2.png"
import prjImg3  from "../assets/img/prjImg3.png"



export const Projects = () => {
    const projects = [
        {
            title: "Billing System",
            description: "A billing system for a company",
            link:"https://github.com/shreyas1817/Billing-System",
            imgUrl: prjImg1,
        },
        {
            title: "Connect",
            description: "ChatApp",
            link:"https://github.com/shreyas1817/Connect-Chat-App",
            imgUrl: prjImg2,
        },
        {
            title: "Memory Game",
            description: "Simple memory game",
            link:"#",
            imgUrl: prjImg3,
        }
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <div className="projects-box">
                        <h2>Projects</h2>
                        <p>Here are some of my projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <ProjectCard key={0} {...projects[0]} />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <ProjectCard key={1} {...projects[1]} />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <ProjectCard key={2} {...projects[2]} />
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}