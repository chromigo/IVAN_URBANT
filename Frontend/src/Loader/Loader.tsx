import * as React from "react";
import "./Loader.less";

interface LoaderProps {

}

export class Loader extends React.Component<LoaderProps> {
  render(): JSX.Element {
    return (
      <div className="loader">
        <div className="dots">
          <div className="dot dot1"/>
          <div className="dot dot2"/>
          <div className="dot dot3"/>
        </div>
        <div className="loaderPic"/>
      </div>
    );
  }
}