import React from 'react';

function Logo() {
 return (
   <div className="logoText"> Konstru  <div className="logoTriangle" /> &nbsp; t</div>
 )
}

function LogoSmall() {
  return (
    <div className="logoText logoText__small"> Konstru  <div className="logoTriangle logoTriangle__small" /> &nbsp; t</div>
  )
}

function LogoFooter() {
  return (
    <div className="logoText logoText__footer"> Konstru  <div className="logoTriangle logoTriangle__footer" /> &nbsp; t</div>
  )
}

export {Logo, LogoSmall, LogoFooter};
