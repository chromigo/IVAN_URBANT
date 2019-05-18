import * as React from 'react';
import {Link} from 'react-router-dom';
import {Fetcher} from '../Core/Fetcher';
import {RouterPaths} from '../Routing/Routing';

interface NavigationProps {

}

export class Navigation extends React.Component<NavigationProps> {
  render(): JSX.Element {
    return (
      <div>
        <div>navi:</div>
        <div>
          <Link to={RouterPaths.Cards}>cards</Link>
          &nbsp;|&nbsp;
          <Link to={RouterPaths.Root}>root</Link>
          &nbsp;|&nbsp;
          <Link to={RouterPaths.Rating}>rating</Link>
        </div>
        <div onClick={this.onLogOff}>Log off</div>
        <hr/>
      </div>
    );
  }

  private onLogOff = () => Fetcher.post("/Account/LogOff")
}