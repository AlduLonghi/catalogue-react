import Header from '../containers/Header';
import ArtworksContainer from '../containers/ArtworksContainer';

const Home = () => (
  <>
    <Header />
    <main className="container-fluid d-flex justify-content-center">
      <ArtworksContainer />
    </main>
  </>
);

export default Home;
