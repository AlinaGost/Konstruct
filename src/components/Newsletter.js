import React from 'react';
import {Button} from "./Button";
import Input from "./Input";

function NewsLetter() {
  return(
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__title">Newsletter Signup</div>
          <div className="newsletter__input">
            <Input/>
            <Button name="SignUp"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
