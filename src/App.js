import CheckBox from './components/CheckBox/CheckBox';
import TodoBlock from './components/TodoContainer/TodoContainer';
import bgImage from './images/bg-desktop-dark.jpg';

function App() {
  return (
    <div className="App">
      <img className="bgDarkImg" src={bgImage} alt="building" />
      <div className="main">
        <TodoBlock />
        <CheckBox />
      </div>
    </div>
  );
}

export default App;
