import { Link } from "react-router-dom";
import "./PrivacyData.css"
function PrivacyData() {
  return (
    <div>
      <div className="privacy-body">
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-4">
        <div className="card rounded-5 privacy-card w-75">
          <div className="card-body px-5 py-4">
            <h2 className="privacy-title text-center mb-3">🔒 Privacy Policy</h2>
            <hr className="text-light" />

            <ul className="privacy-list">
              <li>
                <strong>Personal Information:</strong> We collect personal details (like name, email, and contact) only to facilitate bookings and improve user experience.
              </li>
              <li>
                <strong>Usage Data:</strong> We gather app usage analytics to enhance performance and fix issues.
              </li>
              <li>
                <strong>Data Security:</strong> We use standard encryption and secure servers to protect your data.
              </li>
              <li>
                <strong>Third-Party Access:</strong> We do not sell or share your personal data with third parties without consent, except when required by law.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to personalize your experience and analyze site traffic.
              </li>
              <li>
                <strong>Policy Updates:</strong> We may revise this privacy policy, and changes will be posted on this page.
              </li>
            </ul>

            <div className="text-center mt-4">
              <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="privacy-footer text-center py-3 mt-4">
          <p className="text-light">
            &copy; {new Date().getFullYear()} Ticketly — Your privacy matters.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PrivacyData
