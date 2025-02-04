import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import transition from "../assets/transition.webm";

export default function PaymentTransition() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment", { state: formData });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="transition-container">
      <video className="trans-video" autoPlay muted>
        <source src={transition} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
