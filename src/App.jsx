import './App.scss';
import beers from './data/data';
import NavBar from './components/NavBar/NavBar';
import SearchBox from './components/SearchBox/SearchBox';
const App = () => {
  return (
    <div className=' App'>
      <NavBar />
      <header className='site-header'>
        <h1 className='site-header__text'>Beer Wonderland</h1>
      </header>
    </div>
  );
};

export default App;
