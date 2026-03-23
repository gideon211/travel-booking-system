import React from "react";

/**
 * Reusable Modal Component
 * @param {boolean} isOpen - controls visibility
 * @param {function} onClose - close modal
 * @param {ReactNode} children - modal content
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    margin: "100px auto",
    width: "400px",
  },
  closeBtn: {
    float: "right",
  },
};

export default Modal;