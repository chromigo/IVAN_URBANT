import * as React from "react";
import "./Layout.less";

export class Layout extends React.Component {
  render(): JSX.Element {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    );
  }
}