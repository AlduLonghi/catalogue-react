import Header from '../containers/Header';
import ArtworksContainer from '../containers/ArtworksContainer';

const Home = () => (
  <>
    <Header />
    <main className="d-flex justify-content-center main-padding">
      <ArtworksContainer />
    </main>
  </>
);

export default Home;
