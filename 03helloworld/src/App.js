import { useState } from "react";
import "./assets/style.css";
import NewButton from './NewButton';
//import MyButton  from './MyButton';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  const products = [
    { id: 1, title: 'Cabbage', isFruit: false },
    { id: 2, title: 'Garlic', isFruit: false },
    { id: 3, title: 'Apple', isFruit: true },
    { id: 4, title: 'Pineapple', isFruit: true },
    { id: 5, title: 'KiWi', isFruit: true }
  ];

  let listItems = products.map(product =>
    <li key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >{product.title}</li>
  );

  return (
    <div className="App">
      {listItems}
      {/* <MyButton/> */}
      <NewButton count={count} onClick={handleClick}/>
      <NewButton count={count} onClick={handleClick}/>
    </div>
  );
}

export default App;
