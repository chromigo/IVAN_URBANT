import * as React from "react";
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {Navigation} from '../Navigation/Navigation';

export enum RouterPaths {
  Root = "/",
  Second = "/second"
}

interface RoutingProps {

}

export class Routing extends React.Component<RoutingProps> {
  render(): JSX.Element {
    return (
      <HashRouter>
        <Navigation/>
        <Switch>
          <Route
            exact
            path={RouterPaths.Root}
            render={() => <div>first page</div>}
          />
          <Route
            path={RouterPaths.Second}
            render={() => <div>second page</div>}
          />
        </Switch>
      </HashRouter>
    );
  }
}