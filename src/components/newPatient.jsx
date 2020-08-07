import React, { Component } from "react";
import Patients from "./patients";

class NewPatient extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.newPatient.id,
      name: this.props.newPatient.name,
      gender: this.props.newPatient.gender,
      age: this.props.newPatient.age,
    };
  }

  handleDelete = (patientId) => {
    const patient = this.state.patient.filter((p) => p.id !== patientId);
    this.setState({ patient });
  };

  render() {
    return (
      <div class="row pt-2">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="card-title text-center font-weight-bold text-uppercase">
                Add New Patient
              </div>
            </div>
            <div class="card-body text-center">
              <div class="form-group form-inline">
                <label class="col-md-6 col-form-label">ID</label>
                <div class="col-md-6 p-0">
                  <input
                    onChange={this.props.addId}
                    type="text"
                    class="form-control input-full"
                    placeholder="Enter ID"
                  />
                </div>
              </div>
              <div class="form-group form-inline">
                <label class="col-md-6 col-form-label">Full Name</label>
                <div class="col-md-6 p-0">
                  <input
                    onChange={this.props.addName}
                    type="text"
                    class="form-control input-full"
                    placeholder="Enter Full Name"
                  />
                </div>
              </div>

              <div class="form-group form-inline">
                <label class="col-md-6 col-form-label">Gender</label>
                <div class="col-md-6 p-0">
                  <input
                    onChange={this.props.addGender}
                    type="text"
                    class="form-control input-full"
                    placeholder="Enter Gender"
                  />
                </div>
              </div>

              <div class="form-group form-inline">
                <label class="col-md-6 col-form-label">Age</label>
                <div class="col-md-6 p-0">
                  <input
                    onChange={this.props.addAge}
                    type="text"
                    class="form-control input-full"
                    placeholder="Enter Age"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPatient;
