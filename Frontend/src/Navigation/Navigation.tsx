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
        <div className={navigationItem}>
          <div className="disabled">
            <Link to={RouterPaths.Cards}>Карточки</Link>
          </div>
        </div>
        <div className={navigationItem}><Link to={RouterPaths.Root}>Персонаж</Link></div>
        <div className={navigationItem}>
          <div className="disabled">
            <Link to={RouterPaths.Rating}>Рейтинг</Link>
          </div>
        </div>

        {/*<div onClick={this.onLogOff}>Log off</div>*/}
      </div>
    );
  }

  private onLogOff = () => Fetcher.post("/Account/LogOff")
}