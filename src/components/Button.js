import React from "react";

function Button(props) {
   return (
      <button className="btn">{{}.name}</button>
    )
}

function BtnCenter(props) {
  return (
    <button className="btn btn--center">{{}.name}</button>
  )
}

export {Button, BtnCenter};

