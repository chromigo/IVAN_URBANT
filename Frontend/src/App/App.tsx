import {createHashHistory} from 'history';
import * as React from "react";
import {CardStatus, CardType, ICard, IChar} from '../models/models';
import {Routing} from '../Routing/Routing';

const card1: ICard = {
  title: "Some card",
  coins: 3,
  experience: 22,
  id: "123",
  status: CardStatus.InProgress,
  type: CardType.Task,
  description: "some card description"
}

const card2: ICard = {
  title: "Some other card",
  coins: 32,
  experience: 223,
  id: "123",
  status: CardStatus.InProgress,
  type: CardType.Task,
  description: "alfj lamk f;ldmkafmdamfkl dmsklfm dsfklsdm fklsdm fklmdsmf dksfkdmsf klksdf"
}

const testChar: IChar = {
  name: "Мой супер чар",
  avatar: 1,
  coins: 3,
  experience: 5,
  level: 20,
  lootboxes: [
    card1, card2
  ]
}

export const hashHistory = createHashHistory();

export interface IContext {
  char?: IChar;
  getCharInfo?: () => void;
}

interface AppState extends IContext {
  loading?: boolean;
}

export class App extends React.Component<{}, AppState> {
  public static Consumer: React.Consumer<IContext>;
  private static Context: React.Context<IContext>;
  private static Provider: React.Provider<IContext>;

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
      <App.Provider value={this.bindContext()}>
        {this.state.loading ? <div>loading...</div> : <Routing showCreator={!!(!this.state.char)}/>}
      </App.Provider>
    );
  }

  private buildContext(defaultData: IContext = {}) {
    App.Context = React.createContext(defaultData);
    App.Provider = App.Context.Provider;
    App.Consumer = App.Context.Consumer;
  };

  private bindContext(): IContext {
    return {
      ...this.state,
      getCharInfo: this.getCharInfo
    }
  }

  private getCharInfo = async () => {
    /*const char = await CharApi.getInfo();
    this.setState({char, loading: false});*/

    this.setState({char: testChar, loading: false});
  }
}