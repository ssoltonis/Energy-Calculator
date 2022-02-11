import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Kinetic Energy Calculator</h1>
        <p>You can calculate a kinetic energy of the object or view a history of your calculations:</p>
        <ul>
          <li>
            <Link tag={Link} className="text-dark" to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link tag={Link} className="text-dark" to="/history">History</Link>
          </li>
        </ul>
      </div>
    );
  }
}
