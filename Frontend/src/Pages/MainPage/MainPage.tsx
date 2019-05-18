import * as React from "react";
import {App, IContext} from '../../App/App';
import {IChar} from '../../models/models';

interface MainPageProps {

}

export class MainPage extends React.Component<MainPageProps> {
  render(): JSX.Element {
    return (
      <App.Consumer>
        {(context: IContext) => {
          return (
            <div>
              {this.renderCharInfo(context.char)}
            </div>
          )
        }}
      </App.Consumer>
    );
  }

  private renderCharInfo(char: IChar): JSX.Element {
    const {name, level, lootboxes, exp, coins, avatar} = char;

    return (
      <div>
        <div>Имя: {name}</div>
        <div>Уровень: {level}</div>
      </div>
    )
  }
}