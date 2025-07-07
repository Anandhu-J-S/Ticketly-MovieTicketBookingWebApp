import "./AboutUS.css";
import { Link } from "react-router-dom";



function AboutUS() {


  return (
    <div className="about-us-body">
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="card rounded-5 about-us-card w-75">
          <div className="card-body px-5 py-4">
            <div className="text-center mb-4">
              {/* <img src={logo} alt="Ticketly Logo" className="about-us-logo" /> */}
              <h1 className="about-us-title">About Ticketly 🎬</h1>
              <p className="about-us-subtitle">Your Gateway to the Silver Screen</p>
              <hr className="text-light" />
            </div>

            <p className="about-us-text">
              At <strong>Ticketly</strong>, we believe that every great movie deserves a full house. Whether you're
              chasing the latest blockbuster, a timeless classic, or an indie gem — we're here to make sure you never
              miss a seat.
            </p>

            <p className="about-us-text">
              With a user-friendly interface, secure bookings, and seamless access to showtimes across your favorite
              theaters, Ticketly transforms the way you experience cinema.
            </p>

            <div className="mt-4 text-center">
              <p className="about-us-highlight">🎟️ Join millions of moviegoers already booking with ease.</p>
              <Link to="/">
                <button className="btn btn-primary mt-3">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUS;
