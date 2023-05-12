import Productor from "./component/Productor";
import data from './productList.json';
import './App.css';

// App  컨포넌트
function App(){
  return(
    <div id="wrap">
      <div className='btn'>
        <button type='button'>아이디순</button>
        <button type='button'>가격순</button>
      </div>
      <Productor item={data}/>
    </div>
  )
}

export default App;
