import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <main background-image={logo} className="main-content">
      <h1 className="main-title">Fun facts about React</h1>
      <ul className='main-facts'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars in Github</li>
        <li>is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
      {/* <img src={logo} alt="logo" /> */}
    </main>
    </div>
  );
}

export default App;
