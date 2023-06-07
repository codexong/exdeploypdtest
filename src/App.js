import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ItemPage from './Pages/ItemPage';

function App() {

  // const [category, setCategory] = useState('food')
  // const onSelect = useCallback(category => setCategory(category), [])

    // <div>
    //   <Categories category={category} onSelect={onSelect}/>
    //   <ItemList category={category}/>
    // </div>

  return (
      <Routes>
        <Route path='/' element={<ItemPage/>}></Route>
        <Route path='/:category' element={<ItemPage/>}></Route>
      </Routes>
    
  );
}

export default App;
