import React, { Component} from 'react';

class LoadRecipe extends Component {

  state = {
    recipe: []
  }

// *****************************************LOAD RECIPE START ********************************************************************************
loadRecipe = () => {
    fetch('http://127.0.0.1:8000/index/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.props.token}`    //can allow any user by commenting it and changing the permission at django viewset to allow any
      },
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.setState({recipe: data})
      }
    )
    .catch( error => console.error(error))
  }
// ***************************************** END-3 ******************************************************************************



render() {
    return (
      <div>
        <h1>Load recipe</h1>
        { this.state.recipe.map( recipe => {
          return <h3 key={recipe.id}>{recipe.name}>{recipe.ingredients}</h3>
        })}
        <button onClick={this.loadRecipe}>Load Recipies</button>
      </div>
    );
  }
}
//******************************************** end ****************************************************************************************************************
export default LoadRecipe;