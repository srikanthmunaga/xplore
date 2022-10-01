import React from "react";
import Add from "../Images/add.jpg";
import Food from "../Images/food.jpg";

function Home() {
  return (
    <div>
      <div class="container">
        <div class="row bg-primary m-2 p-4">
          <div class="col">
            <p>colm</p>
          </div>
        </div>
        <div class="row m-2">
          <div class="col-9 bg-success">
            <h1>Details</h1>
          </div>
          <div class="col-3 p-2 ">
            <div class="col ">
              <img src={Add} class="img-thumbnail " alt="img1" />
            </div>
            <div class="col">
              <img src={Food} class="img-thumbnail" alt="img1" />
            </div>
          </div>
        </div>
        <div class="row bg-dark text-light m-2 p-4">last row</div>
      </div>
    </div>
  );
}

export default Home;
