import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header(props) {
  return (
    <Jumbotron className="mt-4">
      <h1 className="text-center">
        <strong>Google Books Search</strong>
      </h1>
      <h2 className="text-center">{props.pageTag}</h2>
    </Jumbotron>
  );
}

export default Header;
