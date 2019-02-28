import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faListAlt,
  faDownload,
  faBookDead
} from '@fortawesome/free-solid-svg-icons';
import AppRouter from './routers/AppRouter';

library.add(faReact, faBook, faListAlt, faDownload, faBookDead);

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
