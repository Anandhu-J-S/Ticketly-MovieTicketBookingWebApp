import "../TermsOfConditions/TermsOfConditions.css";
import { Link } from "react-router-dom";

function TermsOfConditions() {
    return (
        <div className="terms-body">
            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-4">
                <div className="card rounded-5 terms-card w-75">
                    <div className="card-body px-5 py-4">
                        <h2 className="terms-title text-center mb-3">📜 Terms & Conditions</h2>
                        <hr className="text-light" />

                        <ul className="terms-list">
                            <li>
                                <strong>Account Responsibility:</strong> Users are responsible for maintaining the confidentiality of their account information.
                            </li>
                            <li>
                                <strong>Booking Policy:</strong> All bookings are subject to availability. Ticketly reserves the right to cancel or modify bookings.
                            </li>
                            <li>
                                <strong>Refunds:</strong> Once confirmed, bookings are non-refundable unless the event is canceled by the provider.
                            </li>
                            <li>
                                <strong>Conduct:</strong> Users must not misuse the platform for fraudulent or malicious purposes.
                            </li>
                            <li>
                                <strong>Copyright:</strong> All content, media, and branding on Ticketly are owned by Ticketly and protected by copyright laws.
                            </li>
                            <li>
                                <strong>Modifications:</strong> Ticketly may update these terms at any time. Continued use constitutes agreement to the revised terms.
                            </li>
                        </ul>

                        <div className="text-center mt-4">
                            <Link to="/">
                                <button className="btn btn-primary">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfConditions;
