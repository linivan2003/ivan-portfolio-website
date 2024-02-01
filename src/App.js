import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ivan's Portfolio Website</h1>
        <div>
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I am passionate about web development and enjoy working with technologies like React.
            This website showcases some of my projects and skills. Feel free to explore and learn more about what I do.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
