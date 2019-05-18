import * as React from "react";
import {App, IContext} from '../../App/App';
import {CharAvatar} from '../../CharAvatar/CharAvatar';
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
    const {name, level, lootboxes, experience, coins, avatar} = char;

    return (
      <div>
        <div>{name}</div>
        <div><CharAvatar type={avatar} staticPic/></div>
        <div>Уровень: {level}</div>
        <div>Exp: {experience}</div>
        <div>Монет: {coins}</div>
      </div>
    )
  }
}