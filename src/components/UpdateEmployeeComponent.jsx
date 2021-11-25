import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId});
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then((res) => {
            this.props.history.push('/employees');
        });
    }
    
    changeFirstNameHandler = (e) => {
        this.setState({firstName: e.target.value});
    }

    changeLastNameHandler = (e) => {
        this.setState({lastName: e.target.value});
    }

    changeEmailHandler = (e) => {
        this.setState({emailId: e.target.value});
    }

    cancel() {
        this.props.history.push('/employees');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1 className="text-center">Add Employee</h1>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input 
                                            placeholder="First Name" 
                                            name="firstName" 
                                            className="form-control" 
                                            value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler}
                                        />
                                        <label>Last Name: </label>
                                        <input 
                                            placeholder="Last Name" 
                                            name="lastName" 
                                            className="form-control" 
                                            value={this.state.lastName}
                                            onChange={this.changeLastNameHandler}
                                        />
                                        <label>Email Id: </label>
                                        <input 
                                            placeholder="Email Address" 
                                            name="emailId" 
                                            className="form-control" 
                                            value={this.state.emailId}
                                            onChange={this.changeEmailHandler}
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancle</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;