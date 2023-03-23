import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "ًWeb Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Graphic Design",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Motion Graphic",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Info Grahic",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "UI/UX Designer",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have more projects with defirent Agency and companies and goverment projects and in defrent country
               like ( Sudan, South Sudan, Uganda, Kenya, Egypt, UAE, China)
                </p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                      <p>We are there to advice you and to show you the best way to improve your Buinesse come and descuss with us we are sure you willbe happy with us.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> we are there to interduce our selfes about printing services and how to make the best adverticing and we can supply for you calander and nootebook, t-shirt and other services</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="pro"></img>
    </section>
  )
}
