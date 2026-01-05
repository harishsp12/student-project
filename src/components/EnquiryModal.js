import React, { useEffect, useState } from "react";
import "../styles/EnquiryModal.css";

const EnquiryModal = () => {
  const [show, setShow] = useState(false);

  // 🔥 Page load aagum bodhu auto open
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Enquiry Form</h2>
          <button className="close-btn" onClick={() => setShow(false)}>
            ✕
          </button>
        </div>

        <form className="modal-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Mobile Number" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Enquire For" rows="4"></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
