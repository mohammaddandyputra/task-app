import React from "react";

function HelloWorld(){
  return <div style={{backgroundColor: 'blue'}}>Hello world</div>
}

function Button(){
  return <button onClick={() => alert('Selamat Datang')}>Coba klik saya</button>
}

function App(){
  return <div>
    <HelloWorld/>
    <Button/>
    
  </div>
}

export default App;
