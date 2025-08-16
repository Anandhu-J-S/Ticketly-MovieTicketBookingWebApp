import "./FQ.css";
import { Link } from "react-router-dom";

function FQ() {
  return (
    <div className="faq-body">
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-4">
        <div className="card rounded-5 faq-card w-75">
          <div className="card-body px-5 py-4">
            <h2 className="faq-title text-center mb-4">❓ Frequently Asked Questions</h2>
            <hr className="text-light" />

            <div className="faq-item">
              <h5 className="faq-question">🎟️ How do I book a movie ticket?</h5>
              <p className="faq-answer">Simply log in, choose your movie and timing, then follow the on-screen steps to confirm your booking.</p>
            </div>

            <div className="faq-item">
              <h5 className="faq-question">💳 What payment methods are accepted?</h5>
              <p className="faq-answer">We accept all major credit/debit cards, UPI, and digital wallets like Google Pay and PayPal.</p>
            </div>

            <div className="faq-item">
              <h5 className="faq-question">📧 Can I cancel or modify my booking?</h5>
              <p className="faq-answer">Yes, you can cancel or reschedule your booking from your dashboard up to 1 hour before showtime.</p>
            </div>

            <div className="faq-item">
              <h5 className="faq-question">👤 I forgot my password, what do I do?</h5>
              <p className="faq-answer">Click "Forgot Password" on the login page. You’ll receive an email with reset instructions.</p>
            </div>

            <div className="faq-item">
              <h5 className="faq-question">📱 Is there a mobile app for Ticketly?</h5>
              <p className="faq-answer">Yes! Our mobile app is available for both Android and iOS — just search “Ticketly” on your app store.</p>
            </div>

            <div className="text-center mt-4">
              <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="faq-footer text-center py-3 mt-4">
          <p className="text-light">&copy; {new Date().getFullYear()} Ticketly — We're here to help!</p>
        </div>
      </div>
    </div>
  );
}

export default FQ;
