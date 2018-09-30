import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              scr="https://image.flaticon.com/icons/svg/219/219984.svg"
              alt="avatar"
              className="avater-img"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
