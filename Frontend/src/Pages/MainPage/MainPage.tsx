import * as React from "react";
import {IContext} from '../../App/App';
import {CharAvatar} from '../../CharAvatar/CharAvatar';

interface MainPageProps extends IContext {
}

export class MainPage extends React.Component<MainPageProps> {
  render(): JSX.Element {
    const {name, level, lootboxes, experience, coins, avatar} = this.props.char;

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