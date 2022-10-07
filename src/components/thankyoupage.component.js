import React, { Component } from "react";
import { Link } from "react-router-dom";
import thankyouimg from "../resources/back7edit.jpg";

class thankyoupage extends Component {
  render() {
    return (
      <div>
        <center>
          {/* <h2> You will get the affirmation message by SMS and Email Soon.</h2> */}
          <h2 style={{margin:20}}>Thankyou! Payment is done</h2>
          <Link
            to="/"
            style={{
              color: "white",
              padding: 30,
              margin:30,
              paddingRight: 30,
              fontSize: 40
            }}
          >
            {" "}
            Go to Home{" "}
          </Link>
          
        </center>
      </div>
    );
  }
}

export default thankyoupage;