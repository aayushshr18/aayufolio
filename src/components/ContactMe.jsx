import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import add from "../assets/img/add.png";
import phone from "../assets/img/phone.png";
import name from "../assets/img/name.png";
import email from "../assets/img/email.png";
import TrackVisibility from 'react-on-screen';



export const ContactMe = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="contactme" id="contactme">
    <div className="container">
        <div className="row">
            <div className="col-12">
            <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <div className="contactme-bx wow zoomIn">
                    <h1>Let's Connect</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme contactme-slider">
                        <div className="citem">
                            <img src={name} alt="" />  
                            <h3>Name:</h3>
                            <h3>Aayush Shrivastava</h3>
                        </div>
                        <div className="citem">
                            <img src={phone} alt="" />
                        <h3>Phone:</h3>
                            <h3>+91 7985744915</h3>
                        </div>
                        <div className="citem">
                            <img src={email} alt="" />
                            <h3>Email:</h3>
                            <h3>aayushshr18@gmail.com</h3>
                        </div>
                        <div className="citem">
                            <img src={add}alt="" />
                        <h3>From:</h3>
                            <h3>Jhansi, Uttar Pradesh, India</h3>
                        </div>                                   
                    </Carousel>
                </div>
                </div>}
                </TrackVisibility>
            </div>
        </div>
    </div>
</section>
  )
}
