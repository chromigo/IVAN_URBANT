import * as React from "react";
import "./Modal.less";

interface ModalProps {
  onClose: () => void;
}

export class Modal extends React.Component<ModalProps> {
  render(): JSX.Element {
    return (
      <div className="modal">
        <div className="modalClose" onClick={() => this.props.onClose()}/>
        <div className="modalContent">{this.props.children}</div>
        <div className="modalBack"/>
      </div>
    );
  }
}