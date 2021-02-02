import { Route, Switch } from 'react-router-dom';
import ArtworksContainer from '../containers/ArtworksContainer';
import ArtworkDetails from '../containers/ArtworkDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ArtworksContainer} />
    <Route exact path="/details/:id" component={ArtworkDetails} />
  </Switch>
);

export default Routes;
