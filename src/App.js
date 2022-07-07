import Activities from './Activities';
import './App.css';
import Assignment from './Assignment';
import Field from './Field';
import Header from './Header';
import './Field.css';
import Performance from './Performance';

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Assignment/>
      <Activities/>
      <Performance/>
    </div>
  );
}

export default App;
