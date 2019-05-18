import * as React from 'react';
import {Link} from 'react-router-dom';
import {RouterPaths} from '../Routing/Routing';

interface NavigationProps {

}

export class Navigation extends React.Component<NavigationProps> {
  render(): JSX.Element {
    return (
      <div>
        <div>navi:</div>
        <div>
          <Link to={RouterPaths.Root}>root</Link>
        </div>
        <div>
          <Link to={RouterPaths.Second}>second page</Link>
        </div>
        <hr/>
      </div>
    );
  }
}