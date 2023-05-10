import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/img/project1.png";
import p2 from "../assets/img/project2.png";
import p3 from "../assets/img/project3.png";
import p4 from "../assets/img/project4.png";
import p5 from "../assets/img/project5.png";
import p6 from "../assets/img/project6.png";
import i1 from "../assets/img/intern1.png";
import i2 from "../assets/img/intern2.png";
import i3 from "../assets/img/intern3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const interns=[
    {
      title: "Teaching Assistant",
      description: "Coding Ninjas",
      imgUrl: i1,
    },
    {
      title: "Business Development Intern",
      description: "TuteDude",
      imgUrl: i2,
    },
    {
      title: "Coordinator",
      description: "Training And Placement Cell",
      imgUrl: i3,
    },
  ]
  const projects = [
    {
      title: "AayuGram",
      description: "Social Media App",
      imgUrl: p3,
    },
    {
      title: "AayuGram",
      description: "Social Media App",
      imgUrl: p2,
    },
    {
      title: "AayuGram",
      description: "Social Media App",
      imgUrl: p1,
    },
    {
      title: "AayuChat",
      description: "Private Chat App",
      imgUrl: p5,
    },
    {
      title: "AayuChat",
      description: "Private Chat App",
      imgUrl: p4,
    },
    {
      title: "Static Pages",
      description: "Made Using HTML,CSS & JS",
      imgUrl: p6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects & Expo</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Expo's</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          interns.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}