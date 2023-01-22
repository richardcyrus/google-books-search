import React from 'react';

/**
 * Render's the page header Jumbotron.
 *
 * Takes a `pageTag` prop to change the tag line in the jumbotron.
 *
 * @param {*} props
 */
function Header(props) {
  return (
    <div className="jumbotron mt-4">
      <div className="background-image" />
      <div className="overlay" />
      <div className="heading-content">
        <h1 className="text-center">
          <strong>Google Books Search</strong>
        </h1>
        <h2 className="text-center">{props.pageTag}</h2>
      </div>
    </div>
  );
}

export default Header;
