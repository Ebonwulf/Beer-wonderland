import './App.scss';
import beers from './data/data';
import NavBar from './components/NavBar/NavBar';
import SearchBox from './components/SearchBox/SearchBox';
const App = () => {
  return (
    <div className='app'>
      {/* <NavBar /> */}
      <header>
        <h1 className='site-heading'>Beer Wonderland</h1>
      </header>
    </div>
  );
};

export default App;
