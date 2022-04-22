import './App.scss';
import beers from './data/data';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';

const App = () => {
  const fliteredBeerAcidic = beers.filter((beer) => beer.ph);
  const filteredBeerHighABV = beers.filter((beer) => beer.abv);
  const filteredBeerClassic = beers.filter((beer) => {
    return beer.first_brewed < 2010;
  });
  return (
    <div className=' App'>
      <NavBar />
      <header className='site-header'>
        <h1 className='site-header__text'>Beer Wonderland</h1>
      </header>
      <Main />
    </div>
  );
};

export default App;
