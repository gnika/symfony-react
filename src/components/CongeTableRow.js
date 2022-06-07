import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class CongeTableRow extends Component {
constructor(props) {
super(props)
this.deleteStudent = this.deleteStudent.bind(this)
}
deleteStudent() {
// eslint-disable-next-line no-restricted-globals
if(confirm("are you sure wants to delete?"))
{
    axios
    .delete(
    'https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/conge/' + this.props.obj.id,
    )
    .then((res) => {
    console.log('Employe successfully deleted!')
    })
    .catch((error) => {
    console.log(error)
    })
    }
    //window.location.reload();
    }
    render() {
    return (
    <tr>
    <td>{this.props.obj.id_emp}</td>
    <td>{this.props.obj.duree}</td>
    <td>{this.props.obj.type}</td>
    <td>{this.props.obj.debut}</td>
    <td>{this.props.obj.cause}</td>
    <td>{this.props.obj.etat}</td>
    <td>{this.props.obj.id}</td>
    <td>
    <input type="reset"onClick={this.deleteStudent} className="btn btn-warning" value="Delete" />

    </td>
    </tr>
    )
    }
    }

    export default CongeTableRow;