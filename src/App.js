import './App.css';
import axios from 'axios';

async function getData() {
  const request = await axios.get('https://openaccess-api.clevelandart.org/api/artworks?limit=5', {})
    .then(res => res.data);
  return request.data;
}

function App() {
  console.log(getData());
  return (
    <div className="App">
      hhhh
    </div>
  );
}

export default App;
