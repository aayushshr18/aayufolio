import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setTimeout(() => {
      setStatus({ succes: true, message: 'Message sent successfully' });
      setButtonText("Send");
    }, 2000);
    setTimeout(() => {
      setStatus({});
    }, 6000);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>

            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>

            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="First Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Last Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email Address" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Phone No." />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="Message" ></textarea>
                    {
                      status.message &&
                      <Col>
                        <h6 style={{ display: "block" }} className={status.success === false ? "danger" : "success"}>{status.message}</h6>
                      </Col>
                    }
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}