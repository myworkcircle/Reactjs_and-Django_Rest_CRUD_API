import React, { Component} from 'react';

class Update extends Component {

  state3 = {
      credentials: {recipename:''}
  }


// ***************************************************************************************************
  searchrecipe=()=>{
    var url = 'http://127.0.0.1:8000/get/';
    var route = url.concat(this.state3.credentials.recipename);
    fetch(route,{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state3.credentials)
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
// *****************************************************************************************************


// ***************************************************************************************************
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
// **************************************************************************************************

  render() {
    return (
      <div>
        <h1>Update Recipe</h1>
        <button onClick={this.createrecipe}>Create Recipies</button><br/>
        <label>
        <input type="text" name="recipename" value={this.state3.credentials.recipename} onChange={this.searchevent}/>
        <button onClick={this.searchrecipe}>Search for Recipies</button>
        </label>
      </div>
    );
  }
}

export default Update;