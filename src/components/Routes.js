import { Route, Switch } from 'react-router-dom';
import ArtworksContainer from '../containers/ArtworksContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ArtworksContainer} />
    <Route exact path="/details/:city" component={Details} />
  </Switch>
);

export default Routes;
