import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import beers from './data/data';
import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';
import FullInfoCard from './components/FullInfoCard/FullInfoCard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [abvSearch, setAbvSearch] = useState(false);
  const [phSearch, setPhSearch] = useState(false);
  const [classicSearch, setClassicSearch] = useState(false);
  // const [beerArr, setBeerArr] = useState([]);
  // const [beerRange, setBeerRange] = useState(50);
  //toggling the search box using state
  const toggleSearch = () => {
    console.log(showSearch);
    setShowSearch(!showSearch);
  };

  // useEffect(() => {
  //   fetch('https://api.punkapi.com/v2/')
  //     .then((response) => response.json())
  //     .then((beerObjects) => {
  //       console.log(beerObjects.results);
  //       setBeerArr(beerObjects.results);
  //     });
  // }, []);

  const filteredBeer = beers.filter((beer) => {
    if (abvSearch) {
      return beer.name.toLowerCase().includes(searchTerm) + beer.abv >= 6;
    } else if (phSearch) {
      return beer.name.toLowerCase().includes(searchTerm) + beer.ph < 4;
    } else if (classicSearch) {
      return (
        beer.name.toLowerCase().includes(searchTerm) + beer.first_brewed <= 2010
      );
    } else {
      return beer.name.toLowerCase().includes(searchTerm);
    }
  });

  const searchTermHandler = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchTerm(text);
  };
  const handleAbvSearch = (e) => {
    const checked = e.target.checked;
    setAbvSearch(checked);
  };
  const handlePhSearch = (e) => {
    const checked = e.target.checked;
    setPhSearch(checked);
  };
  const handleClassicSearch = (e) => {
    const checked = e.target.checked;
    setClassicSearch(checked);
  };
  return (
    <Router>
      <div className=' App'>
        <NavBar
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          searchTermHandler={searchTermHandler}
          searchTerm={searchTerm}
          abvSearch={abvSearch}
          phSearch={phSearch}
          classicSearch={classicSearch}
          handleAbvSearch={handleAbvSearch}
          handleClassicSearch={handleClassicSearch}
          handlePhSearch={handlePhSearch}
        />
        <Routes>
          <Route
            path='/'
            element={<Main filteredBeer={filteredBeer} />}
          ></Route>
          <Route
            path='/beer/:id'
            element={
              <FullInfoCard
                filteredBeer={filteredBeer}
                key={'beer' + filteredBeer.id}
                id={filteredBeer.id}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
