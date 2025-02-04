import React from "react";
import sbiLogo from "../assets/sbi.png";
import upiLogo from "../assets/upi.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentWindow() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};
  return (
    <div className="container">
      <div className="go-back-btn">
        <button
          onClick={() => navigate("/")}
          className="btn btn-outline btn-warning"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>
      <div className="header">
        <div className="profile-icon">
          {formData.recipientInitial.toUpperCase()}
        </div>
        <div className="receiver">To {formData.recipientName}</div>
      </div>
      <div className="amount">₹{formData.amount}</div>
      <button className="pay-again">Pay again</button>
      <div className="status">
        <span className="completed">
          <i
            className="fa-solid fa-circle-check"
            style={{ color: "#2fa74f" }}
          ></i>{" "}
          Completed
        </span>
        <span className="date">{formData.dateTime}</span>
      </div>
      <div className="transaction-box">
        <div className="bank-header">
          <img src={sbiLogo} alt="SBI Logo" />
          <span>
            {formData.bankName ? formData.bankName : "State Bank of India"}
          </span>
        </div>
        <div className="details">
          <p>
            <strong>UPI transaction ID</strong>
            <br />
            {Math.floor(Math.random() * 9e11) + 1e11}
          </p>
          <p>
            <strong>To:</strong> {formData.recipientName}
            <br />
            {formData.upi}
          </p>
          <p>
            <strong>From:</strong> {formData.senderName.toUpperCase()} (
            {formData.bankName})
            <br />
            {formData.senderUpi}
          </p>
          <p>
            <strong>Google transaction ID</strong>
            <br />
            CICAgMisoqGVBg
          </p>
        </div>
      </div>
      <div className="footer">
        <img className="upi-logo" src={upiLogo} alt="UPI Logo" />
        <div className="buttons">
          <button className="issue">Having issues?</button>
          <button className="share">Share</button>
          <button className="split">Split with friends</button>
        </div>
      </div>
    </div>
  );
}
