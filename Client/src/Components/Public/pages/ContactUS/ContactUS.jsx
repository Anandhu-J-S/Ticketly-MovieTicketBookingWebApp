 import "./ContactUS.css";
import { Link } from "react-router-dom";



function ContactUS() {
  return (
    <div className="contact-us-body">
      <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
        <div className="card rounded-5 contact-us-card w-50">
          <div className="card-body text-center">

            <p className="contact-us-title">🎫 Need Assistance?</p>
            <hr className="text-light" />
            <p className="contact-us-description">
              We’re here to help you with bookings, cancellations, or anything else you need. Our support team is just a message away!
            </p>

            <div className="contact-us-info mt-4">
              <p><strong>Email:</strong> support@ticketly.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Live Chat:</strong> 9AM – 10PM IST</p>
            </div>

            <div className="mt-4">
              <Link to="/">
                <button className="btn btn-danger">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUS;
