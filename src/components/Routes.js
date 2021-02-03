import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import ArtworkDetails from '../containers/ArtworkDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:id" component={ArtworkDetails} />
  </Switch>
);

export default Routes;
