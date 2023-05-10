import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ succes: true, message: 'Email Added successfully' });
    setTimeout(() => {
      setStatus({});
    }, 8000);
  }


  return (
    <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
              <Row>
                <Col lg={12} md={6} xl={5}>
                  <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                </Col>
                <Col md={6} xl={7}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-bx">
                      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                      <button type="submit">Submit</button>
                    </div>
                    {status.message &&
                      <Col>
                        <h6 style={{ display: "block", marginTop: "10px" }}>{status.message}</h6>
                      </Col>}
                  </form>
                </Col>
              </Row>
            </div>
    </Col>
  )
}