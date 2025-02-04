import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    recipientName: "",
    amount: "",
    recipientInitial: "",
    dateTime: "",
    upi: "",
    senderName: "",
    bankName: "",
    senderUpi: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment_transition", { state: formData });
  };

  return (
    <div className="main">
      <h2 className="head">Add Details</h2>
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="rec-name">Enter Recipient Name:</label>
        <input
          id="rec-name"
          name="recipientName"
          type="text"
          placeholder="Enter name"
          value={formData.recipientName}
          onChange={handleChange}
          className="input input-bordered input-secondary w-full max-w-xs detailInput"
        />

        <label htmlFor="amt">Enter Amount:</label>
        <input
          id="amt"
          name="amount"
          type="text"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="input input-bordered input-secondary w-full max-w-xs detailInput"
        />

        <label htmlFor="rec-initial">Enter Recipient Initial:</label>
        <input
          id="rec-initial"
          name="recipientInitial"
          type="text"
          placeholder="Enter initial"
          value={formData.recipientInitial}
          onChange={handleChange}
          className="input input-bordered input-secondary w-full max-w-xs detailInput"
        />

        <label htmlFor="rec-date-time">Enter Date and Time:</label>
        <input
          id="rec-date-time"
          name="dateTime"
          type="text"
          placeholder="Eg: 2 Feb 2025, 8:55 pm"
          value={formData.dateTime}
          onChange={handleChange}
          className="input input-bordered input-secondary w-full max-w-xs detailInput"
        />

        <label htmlFor="rec-upi">Enter Recipient UPI:</label>
        <input
          id="rec-upi"
          name="upi"
          type="text"
          placeholder="xxx@xxx"
          value={formData.upi}
          onChange={handleChange}
          className="input input-bordered input-secondary w-full max-w-xs detailInput"
        />

        <label htmlFor="sender-name">Enter Your Name:</label>
        <input
          id="sender-name"
          name="senderName"
          type="text"
          placeholder="Enter your name"
          value={formData.senderName}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs detailInput"
        />

        <label htmlFor="sender-upi">Enter Your UPI:</label>
        <input
          id="sender-upi"
          name="senderUpi"
          type="text"
          placeholder="Enter your upi"
          value={formData.senderUpi}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs detailInput"
        />

        <label htmlFor="sender-bank">Enter Bank Name:</label>
        <input
          id="sender-bank"
          name="bankName"
          type="text"
          placeholder="Eg: STATE BANK OF INDIA"
          value={formData.bankName}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs detailInput"
        />

        <button type="submit" className="btn btn-outline btn-secondary">
          Make Payment
        </button>
      </form>
    </div>
  );
}
