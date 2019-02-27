import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state={
    dogs: [],
    username: '',
    password: ''
  }

  getApi = () => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      console.log(response)
      this.setState({
        dogs: response.data.message
      })
    })
  }

componentDidMount(){
  this.getApi();
  this.getCarouselImages();
}

getCarouselImages = () => {
  axios.get('https://dog.ceo/api/breeds/image/random/5')
  .then(response => {
    console.log(response.data.message);
    this.setState({
      carouselImages: response.data.message
    })
  })
}

// searchDog = (dog) => {
//   let doggo = dog.toLowerCase();
//   this.setState({dogs: response.data.message.filter(d => d.breed === doggo).length > 0 
//   ? response.data.message.filter(d => d.breed === doggo) : Data
//   });
// }

  render() {
    return (

      <form>
        <div className="form-group">
          <label>Username</label>
          <input value={this.state.username} onChange={this.onUsernameChange} type="text" className="form-control" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input value={this.state.password} onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      // <div className="container text-center">
      //   <div id="main-header" className="text-left">
      //     <h1>Doggos and Puppers</h1>
      //   </div>
      //   <div id="space" className="back" >
      //     <img src={this.state.dogs} alt="dog" />
      //   </div>
      //   <div className="back">
      //     <button
      //       className="btn btn-primary"
      //       type="button"
      //       onClick={() => this.getApi()}
      //       >Another one</button>
      //   </div>
      //   <div >
      //     <form>
      //       <div className="form-group">
      //         <input
      //           type="text"
      //           className="form-control form-control-*"
      //           placeholder="Search"
      //         />
      //         <button
      //           className="btn btn-primary"
      //           type="button"
      //           onClick={() => this.searchDog()}
      //         >Enter</button>
      //       </div>
      //     </form>
      //   </div>
      // </div>
    );
  }
}

export default App;
