import * as React from "react";
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {Navigation} from '../Navigation/Navigation';
import {CreatorPage} from '../Pages/CreatorPage/CreatorPage';
import {MainPage} from '../Pages/MainPage/MainPage';

export enum RouterPaths {
  Root = "/",
  Cards = "/second",
  Rating = "/rating"
}

interface RoutingProps {
  showCreator?: boolean;
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
            render={this.renderMain}
          />
          <Route
            path={RouterPaths.Cards}
            render={() => <div>second page</div>}
          />
        </Switch>
      </HashRouter>
    );
  }

  private renderMain = () => this.props.showCreator ? <CreatorPage/> : <MainPage/>;
}