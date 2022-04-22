import './App.css';
import { useState } from 'react';
import ItemData from './data/ItemData';
import { Header } from './components/Header';
import { ItemList } from './components/ItemList';
import { ItemStats } from './components/ItemStats';

function App() {
  const [myItems, setMyItems] = useState(ItemData);

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setMyItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className='App'>
      <Header text='Blog App'>Website Header</Header>
      <div className='container'>
        <ItemStats items={myItems} />
        <ItemList items={myItems} handleDelete={deleteItem} />
      </div>
    </div>
  );
}

export default App;
