import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Render's the page header Jumbotron.
 *
 * Takes a `pageTag` prop to change the tag line in the jumbotron.
 *
 * @param {*} props
 */
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
