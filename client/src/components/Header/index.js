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
      <div className="background-image" />
      <div className="overlay" />
      <div className="heading-content">
        <h1 className="text-center">
          <strong>Google Books Search</strong>
        </h1>
        <h2 className="text-center">{props.pageTag}</h2>
      </div>
    </Jumbotron>
  );
}

export default Header;
