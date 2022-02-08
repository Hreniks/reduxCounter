import './App.css';
import {createStore} from 'redux';

function App() {

  const rootReducer = (state = 0,action) => {
    switch (action.type) {
      case 'INCREMENT': return state + 1;
        break;
    case 'DECREMENT': return state - 1;
      default:
        return state;
        break;
    }
  }

  const store = createStore(rootReducer);
  console.log(store.getState());

  // const store = createStore();
  // console.log(store);
  return (
    <div className="App">
      Counter: 0
      <div className='buttonz'>
      <button>-</button>
      <button>+</button>
      </div>
     
    </div>
  );
}

export default App;
