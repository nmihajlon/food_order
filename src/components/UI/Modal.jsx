import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import UserProgressContext from "../../store/UserProgressContext";

const Modal = ({ children, open, onClose, className = '' }) => {
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
    <dialog ref={modal} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>
    , document.getElementById("modal"));
};

export default Modal;
