import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mater1 from "../assets/img/meter1.svg";
import mater2 from "../assets/img/meter2.svg";
import mater3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skills" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Eaque possimus cum impedit error? Repudiandae, tenetur totam dolorum voluptates suscipit ex asperiores ullam mollitia eum iure.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={mater1} alt="I,age" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={mater2} alt="I,age" />
                            <h5>Brand Identity</h5>
                        </div>
                        <div className="item">
                            <img src={mater3} alt="I,age" />
                            <h5>Logo Design</h5>
                        </div>
                        <div className="item">
                            <img src={mater1} alt="I,age" />
                            <h5>Backend Developer</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} alt="I,age" className="background-image-left" />
        </section>

    );
}
export default Skills;