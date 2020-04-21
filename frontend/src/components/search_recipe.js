import React, { Component} from 'react';

class SearchRecipe extends Component {

  state3 = {
      credentials: {recipename:''}
  }


// ************************************** SEARCH RECIPE ******************************************************************************
  searchrecipe=()=>{
    var url = 'http://127.0.0.1:8000/get/';
    var route = url.concat(this.state3.credentials.recipename);
    fetch(route,{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: JSON.stringify(this.state3.credentials)
    })
    .then(data => data.json())
    .then(
      data => {
        // console.log(data.json());
        console.log(this.state3.credentials.recipename);
      }
    )
    .catch( error => console.error(error))
  }

  searchevent=event=>{
    const cred = this.state3.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  
render() {
    return (
      <div>
        <h1>Search recipe</h1>
        <input type="text" name="recipename" value={this.state3.credentials.recipename} onChange={this.searchevent}/>
        <button onClick={this.searchrecipe}>Search for Recipies</button>
      </div>
    );
  }
}
//******************************************** end ****************************************************************************************************************
export default SearchRecipe;