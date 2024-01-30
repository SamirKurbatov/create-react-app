import './App.css';

import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <OtherComponent />
      <PetInfo animalName="cat" animalAge="14" hasPet={false} />
    </div>
  );
}

export default App;
