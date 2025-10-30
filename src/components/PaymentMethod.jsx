import React, { useState } from "react";
import Summary from "./Summary";

const PaymentMethod = () => {
  const [method, setMethod] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSelect = (event) => {
    setMethod(event.target.value);
  };

  const handleContinue = () => {
    if (method) {
      setShowSummary(true);
    } else {
      alert("⚠️ Please select a payment method!");
    }
  };

  if (showSummary) {
    return <Summary method={method} />;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Money Animation"
          width="70"
          height="70"
          style={styles.gif}
        />
        Select Your Payment Method
      </h1>

      <div style={styles.option}>
        <input
          type="radio"
          name="payment"
          value="Cash on Delivery"
          onChange={handleSelect}
        />
        <label>💰 Cash on Delivery</label>
      </div>

      <div style={styles.option}>
        <input
          type="radio"
          name="payment"
          value="UPI"
          onChange={handleSelect}
        />
        <label>🪙 UPI</label>
      </div>

      <div style={styles.option}>
        <input
          type="radio"
          name="payment"
          value="Debit/Credit Card"
          onChange={handleSelect}
        />
        <label>💳 Debit / Credit Card</label>
      </div>

      <button style={styles.button} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

const styles = {
  container: {
    background: "#fff066", // 🌟 Yellow background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
    fontSize: "28px",
    color: "#333",
    animation: "pulse 1.5s infinite",
  },
  gif: {
    borderRadius: "50%",
  },
  option: {
    margin: "10px 0",
    fontSize: "18px",
  },
  button: {
    marginTop: "25px",
    padding: "12px 28px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(37, 99, 235, 0.3)",
    transition: "all 0.3s ease",
  },
};

// ✨ Add glowing hover + pulsing title animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes pulse {
  0% { transform: scale(1); color: #333; }
  50% { transform: scale(1.05); color: #000; }
  100% { transform: scale(1); color: #333; }
}

button:hover {
  background-color: #1d4ed8 !important;
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.6);
  transform: scale(1.05);
}
`;
document.head.appendChild(styleSheet);

export default PaymentMethod;
