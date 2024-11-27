import { useRef } from "react";


function App() {
  const ref = useRef(0);
  function handleClick() {
    ref.current?.select();
    // alert('You clicked ' + ref.current + ' times!');
  }
  return (
        <>
        <input type="text" 
        ref={ref}
        />
      <button
        onClick={handleClick}
      >Click Me</button>
      </>
  );
}

export default App;
