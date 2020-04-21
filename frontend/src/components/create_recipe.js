import React, { Component} from 'react';

class CreateRecipe extends Component {

  state2 = {
      credentials: {name:'',time:'',directions:'',ingredients:'',description:''}
  }

// *********************************** CREATE RECIPE START ************************************
  createrecipe = () =>{
    fetch('http://127.0.0.1:8000/index/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${this.props.token}`
        },
        body: JSON.stringify(this.state2.credentials)
      })
      .then( data => data.json())
      .then(
        data => {
          console.log(data.json());
        }
      )
      .catch( error => console.error(error))
  }

  recipeinput = event => {
    const cred = this.state2.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <div>
        <h1>Create recipe</h1>
        <label>
          Name:
          <input type="text" name="name"
           value={this.state2.credentials.name}
           onChange={this.recipeinput}/>
        </label>
        <br/><br/>
        <label>
          Time:<input type="text" name="time"
           value={this.state2.credentials.time}
           onChange={this.recipeinput} />
        </label>
        <br/><br />
        <label>
          Direc:  <input type="text" name="directions"
           value={this.state2.credentials.directions}
           onChange={this.recipeinput}/>
        </label>
        <br/><br />
        <label>
          Ingre:  <input type="text" name="ingredients"
           value={this.state2.credentials.ingredients}
           onChange={this.recipeinput} />
        </label>
        <br/><br />
        <label>
          Descr:
          <input type="text" name="description"
           value={this.state2.credentials.description}
           onChange={this.recipeinput}/>
        </label>
        <br/>
        <button onClick={this.createrecipe}>Create Recipies</button><br/>
      </div>
    );
  }
}
//******************************************** end ****************************************************************************************************************
export default CreateRecipe;