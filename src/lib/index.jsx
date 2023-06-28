import React from "react";

const modalStyles = {
  modalContainer: {
    position: "fixed",
    height: "100vh",
    width: "100%",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  modal: {
    backgroundColor: "white",
    width: "300px",
    height: "40px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    borderRadius: "5px",
  },
  close: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    width: "30px",
    height: "30px",
    backgroundColor: "rgb(123, 150, 121)",
    color: "white",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

const ModalConfirm = ({ text, closeFct }) => {
  return (
    <div style={modalStyles.modalContainer}>
      <div style={modalStyles.modal}>
        <p>{text}</p>
        <p onClick={closeFct} style={modalStyles.close}>
          X
        </p>
      </div>
    </div>
  );
};

export default ModalConfirm;
