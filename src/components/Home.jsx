import React from "react";
import fire from "../config";
import { Button } from "reactstrap";

class Home extends React.Component {
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h1>Welcome to Home Page</h1>
        <h3>Successfully Loggedin</h3>
        {/* <button onClick={this.logout}>Logout</button> */}
        <Button color="primary" className="btn-lg" onClick={this.logout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default Home;
