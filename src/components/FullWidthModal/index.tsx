import React from "react";
import ReactDom from "react-dom";
import "./style.scss";

interface Props {
  visible: boolean;
  onCancel: Function;
  closeOnBack?: boolean;
}
export const FullWidthModal = ({ visible, onCancel, closeOnBack }: Props) => {
  if (visible) {
    return ReactDom.createPortal(
      <div className="full-width-modal">
        <div className="container">
          <p onClick={() => onCancel()}>back</p>
          <h2>Hi modal</h2>
        </div>
      </div>,
      document.body
    );
  }
  return null;
};
