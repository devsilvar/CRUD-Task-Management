import React, { useState, useEffect } from "react";

const Modals = ({ modalContent }) => {
  const [modalState, setmodalState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setmodalState(false);
      console.log("Hello");
      console.log(modalState);
    }, 3000);
  });

  // setTimeout(() => {
  //   setmodalState(false);
  // }, 2000);

  return (
    <>
      <div className={modalState ? "d-block z-index" : "d-none"}>
        <div className="card shadow position-absolute bg-light d-flex justify-content-center p-2 w-50">
          <p className="text-end">X</p>
          {modalContent}
        </div>
      </div>
    </>
  );
};

export default Modals;
