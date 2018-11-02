import React from 'react';
import { connect } from 'react-redux';

import { ping } from '../actions';

const App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

export default connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(App);
