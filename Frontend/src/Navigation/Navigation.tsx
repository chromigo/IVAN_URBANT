import * as React from 'react';
import {Link} from 'react-router-dom';
import {Fetcher} from '../Core/Fetcher';
import {RouterPaths} from '../Routing/Routing';
import "./Navigation.less";

interface NavigationProps {

}

export class Navigation extends React.Component<NavigationProps> {
  render(): JSX.Element {
    const navigationItem = "navigationItem";

    return (
      <div className="navigation">
        <div className={navigationItem}><Link to={RouterPaths.Cards}>cards</Link></div>
        <div className={navigationItem}><Link to={RouterPaths.Root}>root</Link></div>
        <div className={navigationItem}><Link to={RouterPaths.Rating}>rating</Link></div>

        {/*<div onClick={this.onLogOff}>Log off</div>*/}
      </div>
    );
  }

  private onLogOff = () => Fetcher.post("/Account/LogOff")
}