import './App.css';
import Mess from'./Message/Message.js';

function App() {
 const message = "qwertyuiop"
  return (
    <div className="App">
      <h1> Hello world</h1>
      <Mess mess = {message} />

    </div>
  );
}

export default App;
