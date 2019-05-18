import {createHashHistory} from 'history';
import * as React from "react";
import {CharApi} from '../api/CharApi';
import {IChar} from '../models/models';
import {Routing} from '../Routing/Routing';

const testChar: IChar = {
  name: "Мой супер чар",
  avatar: 1,
  coins: 3,
  exp: 5,
  level: 20,
  lootboxes: []
}

export const hashHistory = createHashHistory();

export interface IContext {
  char?: IChar;
}

interface AppState extends IContext {
  loading?: boolean;
}

export class App extends React.Component<{}, AppState> {
  private static Context: React.Context<IContext>;
  private static Provider: React.Provider<IContext>;
  public static Consumer: React.Consumer<IContext>;

  constructor(props: any, state: any) {
    super(props, state);
    this.state = {loading: true};
    this.buildContext();
  }

  componentDidMount(): void {
    this.getCharInfo();
  }

  render(): JSX.Element {
    return (
      <App.Provider value={{...this.state}}>
        {this.state.loading ? <div>loading...</div> : <Routing showCreator={!!(!this.state.char)}/>}
      </App.Provider>
    );
  }

  private buildContext(defaultData: IContext = {}) {
    App.Context = React.createContext(defaultData);
    App.Provider = App.Context.Provider;
    App.Consumer = App.Context.Consumer;
  };

  private async getCharInfo(){
    //const char = await CharApi.getInfo();
    //this.setState({char});

    setTimeout(() => {
      this.setState({char: /*testChar*/null, loading: false});
    }, 10)
  }
}