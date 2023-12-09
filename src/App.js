import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <>
<Nav/>

<Banner fetchurl={requests.fetchNetflixOriginals}/>

<Row isposter={true} title="Trending Movie" fetchUrl={requests.fetchTrending}/>

<Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>

<Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>

<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </>
  );
}

export default App;
