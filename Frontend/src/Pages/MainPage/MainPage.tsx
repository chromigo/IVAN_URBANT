import * as React from "react";
import {IContext} from '../../App/App';
import {CharAvatar} from '../../CharAvatar/CharAvatar';
import "./MainPage.less";

interface MainPageProps extends IContext {
}

export class MainPage extends React.Component<MainPageProps> {
  render(): JSX.Element {
    const {name, level, lootboxes, experience, coins, avatar} = this.props.char;

    return (
      <div>
        <h1>{name}</h1>
        <div className="level">{level}</div>
        <div>Монет: {coins}</div>
        <div>Exp: {experience}</div>
        <div><CharAvatar type={avatar} staticPic/></div>
      </div>
    )
  }
}