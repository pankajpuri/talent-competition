import React, { Component } from "react";
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import CreateJobCard from '../ManageJob/CreateJobCard.jsx';
export class EditJob extends Component {
    constructor(props) {
        super(props)

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                JobTitle: "",
                JobDescription: "",
                JobSummary: ""
            }

        this.state = {
            showEditSection: false,
            newContact: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    openEdit() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newContact: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
        })
    }

    saveContact() {
        console.log(this.props.componentId)
        console.log(this.state.newContact)
        const data = Object.assign({}, this.state.newContact)
        this.props.controlFunc(this.props.componentId, data)
        this.closeEdit()
    }

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="Title"
                    name="JobTitle"
                    value={this.state.newContact.JObTitle}
                    controlFunc={this.handleChange}
                    maxLength={80}
                />
                <ChildSingleInput
                    inputType="text"
                    label="JobDescription"
                    name="JobDescription"
                    value={this.state.newContact.JobDescription}
                    controlFunc={this.handleChange}
                    maxLength={80}
                />
                <ChildSingleInput
                    inputType="text"
                    label="Summary"
                    name="JobSummary"
                    value={this.state.newContact.email}
                    controlFunc={this.handleChange}
                    maxLength={80}
                />

                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }

    renderDisplay() {

        let JobTitle = this.props.details ? `${this.props.details.JobTitle}` : ""
        let JobDescription = this.props.details ? `${this.props.details.JobDescription}` : ""
        let JobSummary = this.props.details ? this.props.details.JobSummary : ""

        return (
            <div className="ui raised segment ">
                <p>{JobTitle}</p>
                <a className="ui black right ribbon label "><i className="m-2 user icon" />0</a>

                <div className="ui cards">

                    <div className="content">
                        <div className=" ui grid">
                            <div className="row">
                                <div className="ui sixteen wide column">
                                    <p>{JobDescription}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="ui sixteen wide column">
                                    <p>{JobSummary}</p>
                                </div>
                            </div>
                            <div className="row" />
                            <div className="row" />
                            <div className="row" />
                            <div className="row" />
                            <div className="row">
                                <div className="ui three wide column">
                                    <div className="ui left floated tiny buttons">
                                        <button className="ui column red button ">Expired</button>
                                    </div>
                                </div>

                                <div className="ui thirteen wide column">
                                    <div className="ui tiny right floated buttons">
                                        <button className="ui blue basic button "><i className="red ban icon" />close</button>
                                        <button className="ui blue basic button "><i className="edit icon" />Edit</button>
                                        <button className="ui blue basic button "><i className="copy icon" />copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

