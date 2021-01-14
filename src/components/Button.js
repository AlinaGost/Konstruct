import React from "react";

function Button(props) {
   return (
      <button className="btn">{props.name}</button>
    )
}

function ButtonCenter(props) {
  return (
    <div className="btn__center">
      <button className="btn">{props.name}</button>
    </div>
    )

}

export {Button, ButtonCenter};

