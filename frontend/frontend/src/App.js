import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import CreateRecipe from './components/create_recipe';
import SearchRecipe from './components/search_recipe';
import LoadRecipe from './components/load_recipe';
import Update from './components/update';


function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/><br/>
      <CreateRecipe token={token}/>
      <SearchRecipe token={token}/>
      <LoadRecipe token={token}/>
      <Update token={token}/>
    </div>
  );
}
export default App;