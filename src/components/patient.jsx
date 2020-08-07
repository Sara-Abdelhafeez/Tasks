import React, { Component } from "react";

class Patient extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td contenteditable="true">{this.props.id}</td>
        <td contenteditable="true">{this.props.name}</td>
        <td contenteditable="true">{this.props.gender}</td>
        <td contenteditable="true">{this.props.age}</td>
        <td>
          <span className="table-remove">
            <button
              onClick={() => this.props.onDelete(this.props.id)}
              type="button"
              className="btn btn-danger btn-rounded btn-sm my-0"
            >
              Remove
            </button>
          </span>
        </td>
      </tr>
    );
  }
}

export default Patient;

/* removePatient(index) {
    console.log(this.state.patient);
    //this.state.patient.splice(index, 1);
  }*/
