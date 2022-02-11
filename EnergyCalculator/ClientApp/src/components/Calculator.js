import React, { Component } from 'react';
import {calculateKineticEnergy, getComment} from '../helpers/calculator'
import { toast } from 'react-toastify'; 
import '../custom.css'

export class Calculator extends Component {
  static displayName = Calculator.name;
  
  constructor(props) {
    super(props);
    this.state = { 
      mass: 0,
      velocity: 0,
      kineticEnergy: 0,
      comment: '',
      danger: false
    };
  }

  render() {
    return (
      <div>
        <h1>Kinetic Energy Calculator</h1>

        <p>Kinetic Energy is the energy an object has owing to its motion.</p>

        <form className="form-horizontal" onSubmit={evt => this.onSubmit(evt)}>
          <div className="row">
            <div className="col-2">
              <label aria-live="polite">Mass: </label>
            </div>
            <div className="col-4">
              <input type="number" name="mass" value={this.state.mass} onChange={evt => this.handleChange(evt)}/> kg
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <label aria-live="polite">Velocity: </label>
            </div>
            <div className="col-4">
              <input type="number" name="velocity" value={this.state.velocity} onChange={evt => this.handleChange(evt)}/> m/s
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <label aria-live="polite">Kinetic energy: </label>
            </div>
            <div className="col-4">
              <strong>{this.state.kineticEnergy}</strong> J
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <label aria-live="polite">Comment: </label>
            </div>
            <div className={this.state.danger ? "col-4 comment-message-danger" : "col-4 comment-message"}>
              <strong>{this.state.comment}</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button type="submit" className="btn btn-primary">Calculate</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    var mass = this.state.mass;
    var velocity = this.state.velocity;
    
    var calculatedEnergy = calculateKineticEnergy(mass, velocity);
    this.setState({
      ...this.state,
      kineticEnergy: calculatedEnergy,
      comment: getComment(calculatedEnergy),
      danger: calculatedEnergy > 1000000
      }, () => {
      this.saveCalculationResults()
    });
  }

  async saveCalculationResults() {
    console.log(this.state.energy);
    let calculationItem = {
      Mass: this.state.mass,
      Velocity: this.state.velocity,
      KineticEnergy: this.state.kineticEnergy,
      Comment: this.state.comment
    };

    await fetch('Calculations/Save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(calculationItem),
    })
    .then((response) => toast.success('Your calculation was saved.'))
    .catch(error => toast.error('Error:', error));
  }

}
