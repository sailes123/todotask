import Activities from './Activities';
import './App.css';
import Assignment from './Assignment';
import Field from './Field';
import Header from './Header';
import './Field.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Assignment/>
      <Activities/>
    </div>
  );
}

export default App;
