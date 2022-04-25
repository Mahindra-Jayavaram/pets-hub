// import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/home';
import { Create } from './Components/listing_create';
import { Details } from './Components/listing_details';
import { Navbar } from './Components/navbar';

function App() {
//   const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing/:id' element={<Details/>} />
        <Route path='/listing/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
