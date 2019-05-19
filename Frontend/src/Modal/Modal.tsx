import * as React from "react";
import * as classnames from "classnames";
import "./Modal.less";

interface ModalProps {
  onClose: () => void;
  solid?: boolean
}

export class Modal extends React.Component<ModalProps> {
  render(): JSX.Element {
    const className = classnames("modal", this.props.solid && "solid");

    return (
      <div className={className}>
        <div className="modalClose" onClick={() => this.props.onClose()}/>
        <div className="modalContent">{this.props.children}</div>
        <div className="modalBack"/>
      </div>
    );
  }
}