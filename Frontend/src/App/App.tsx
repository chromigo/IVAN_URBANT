import * as React from "react";

interface AppState {}

export class App extends React.Component<{}, AppState> {
  constructor(props: any, state: any) {
    super(props, state);
    this.state = {};
  }

  render(): JSX.Element {
    return (
      <div>Hello!</div>
    );
  }
}