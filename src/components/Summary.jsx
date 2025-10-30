import React from "react";

const Summary = ({ method }) => {
  return (
    <div style={styles.container}>
      <h2>🧾 Payment Summary</h2>
      <p>Thank you for choosing your payment method!</p>
      <h3>Selected Payment Method:</h3>
      <p style={styles.method}>{method}</p>
      <button style={styles.button} onClick={() => window.location.reload()}>
        Change Method
      </button>
    </div>
  );
};

const styles = {
  container: {
    background: "#e0f2fe",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  method: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#16a34a",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Summary;
