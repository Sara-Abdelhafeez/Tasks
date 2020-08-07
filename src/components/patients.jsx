import React, { Component } from "react";
import Patient from "./patient";
import NewPatient from "./newPatient";

class Patients extends Component {
  constructor() {
    super();
    this.state = {
      id: 5,
      patient: [
        { id: 1, name: "Amera", gender: "Female", age: 10 },
        { id: 2, name: "Amera", gender: "Female", age: 20 },
        { id: 3, name: "Amera", gender: "Female", age: 30 },
        { id: 4, name: "Amera", gender: "Female", age: 40 },
      ],
      name: "",
      gender: "",
      age: 0,
    };
    this.handleId = this.handleId.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleAge = this.handleAge.bind(this);
  }

  /*constructor(props) {
    super(props);
    this.state = {
      id: 5,
    };
  }*/
  handleId(event) {
    this.setState({ id: event.target.value });
  }
  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleGender(event) {
    this.setState({ gender: event.target.value });
  }
  handleAge(event) {
    this.setState({ age: event.target.value });
  }

  //handleChangeId = (e) => this.setState({ id: e.target.value });

  handleDelete = (patientId) => {
    const patient = this.state.patient.filter((p) => p.id !== patientId);
    this.setState({ patient });
  };

  render() {
    return (
      <div>
        <div className="card">
          <h3 className="card-header text-center font-weight-bold text-uppercase py-3">
            Patients List
          </h3>
          <div className="card-body text-center">
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <a href="#!" className="text-success">
                  <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                </a>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Patient Name</th>
                    <th className="text-center">Gender</th>
                    <th className="text-center">Age</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.patient.map((patient) => (
                    <Patient
                      key={patient.id}
                      id={patient.id}
                      name={patient.name}
                      gender={patient.gender}
                      age={patient.age}
                      onDelete={this.handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <NewPatient
          key={this.state.id}
          newPatient={this.state}
          addId={this.handleId}
          addName={this.handleName}
          addGender={this.handleGender}
          addAge={this.handleAge}
        />
        <button className="btn btn-success m-2 btn-md">Submit</button>
        <button
          onClick={this.addPatient}
          className="btn btn-primary m-2 btn-md"
        >
          Add Patient
        </button>
      </div>
    );
  }
  addPatient = () => {
    this.setState({
      patient: this.state.patient.concat({
        id: this.state.id,
        name: this.state.name,
        gender: this.state.gender,
        age: this.state.age,
      }),
    });
  };
}

export default Patients;
