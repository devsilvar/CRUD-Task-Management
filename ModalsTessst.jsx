import React, { useEffect } from "react";
import { Modal } from "bootstrap";
const Modals = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    
    }, 3000);
  }, [closeModal]);

  return (
    <div className="bg-warning text-white p-5 position-absolute">
      <new Modal />
      <h2>{modalContent}</h2>
    </div>
  );
};

export default Modals;
