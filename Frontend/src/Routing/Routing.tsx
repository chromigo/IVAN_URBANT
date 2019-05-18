import * as React from "react";
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {App, hashHistory, IContext} from '../App/App';
import {IChar} from '../models/models';
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
  static goTo = (path: RouterPaths) => hashHistory.push(path);

  render(): JSX.Element {
    return (
      <HashRouter>
        <App.Consumer>
          {(context: IContext) => (
            <>
              <Navigation/>
              <Switch>
                <Route
                  exact
                  path={RouterPaths.Root}
                  render={() => this.renderMain(context)}
                />
                <Route
                  path={RouterPaths.Cards}
                  render={() => <div>second page</div>}
                />
              </Switch>
            </>
          )}
        </App.Consumer>
      </HashRouter>
    );
  }

  private renderMain = (context: IContext) => this.props.showCreator
    ? <CreatorPage getCharInfo={context.getCharInfo}/>
    : <MainPage char={context.char}/>;
}