import {createHashHistory} from 'history';
import * as React from "react";
import {Routing} from '../Routing/Routing';

export const hashHistory = createHashHistory();

export interface IContext {
  some?: number;
}

interface AppState extends IContext {
}

export class App extends React.Component<{}, AppState> {
  private static Context: React.Context<IContext>;
  private static Provider: React.Provider<IContext>;
  private static Consumer: React.Consumer<IContext>;

  constructor(props: any, state: any) {
    super(props, state);
    this.state = {};
    this.buildContext();
  }

  render(): JSX.Element {
    return (
      <App.Provider value={{...this.state}}>
        <Routing/>
      </App.Provider>
    );
  }

  private buildContext(defaultData: IContext = {}) {
    App.Context = React.createContext(defaultData);
    App.Provider = App.Context.Provider;
    App.Consumer = App.Context.Consumer;
  };
}