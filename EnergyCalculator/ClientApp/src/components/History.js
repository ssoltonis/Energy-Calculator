import React, { Component } from 'react';
import Moment from 'moment';

export class History extends Component {
  static displayName = History.name;

  constructor(props) {
    super(props);
    this.state = { items: [], loading: true };
  }

  componentDidMount() {
    this.populateHistoryData();
  }

  static renderHistoryTable(calculationItems) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Mass</th>
            <th>Velocity</th>
            <th>Kinetic Energy</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {calculationItems.map(item =>
            <tr key={item.createdDate}>
              <td>{Moment(item.createdDate).format('yyyy-MM-DD hh:mm:ss')}</td>
              <td>{item.mass} kg</td>
              <td>{item.velocity} m/s</td>
              <td>{this.displayEnergy(item.kineticEnergy)}</td>
              <td>{item.comment}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  static displayEnergy(kineticEnergy) {
    if (kineticEnergy > 999999999999) {
      return Math.floor(kineticEnergy / 1000000000000) + ' TJ'
    }
    
    if (kineticEnergy > 999999999) {
      return Math.floor(kineticEnergy / 1000000000) + ' GJ'
    }

    if (kineticEnergy > 999999) {
      return Math.floor(kineticEnergy / 1000000) + ' MJ'
    }
    
    if (kineticEnergy > 999) {
      return Math.floor(kineticEnergy / 1000) + ' kJ'
    }
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : History.renderHistoryTable(this.state.items);

    return (
      <div>
        <h1 id="tabelLabel">Calculations history</h1>
        {contents}
      </div>
    );
  }

  async populateHistoryData() {
    const response = await fetch('Calculations');
    const data = await response.json();
    this.setState({ items: data, loading: false });
  }
}
