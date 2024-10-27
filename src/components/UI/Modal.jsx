import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = '' }) => {
  const modal = useRef();

  useEffect(() => {
    if(open){
      modal.current.showModal();
    }
    else{
      modal.current.close();
    }
  }, [open]);


  return createPortal(
    <dialog ref={modal} className={`modal ${className}`}>
      {children}
    </dialog>
    , document.getElementById("modal"));
};

export default Modal;