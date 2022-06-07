import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class SalaireTableRow extends Component {
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
    'https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/salaire/' + this.props.obj.id,
    )
    .then((res) => {
    console.log('Employe successfully deleted!')
    })
    .catch((error) => {
    console.log(error)
    })
    //window.location.reload();
    }
}

   // 
    render() {
    return (
    <tr>
    <td>{this.props.obj.id_emp}</td>
    <td>{this.props.obj.taxes}</td>
    <td>{this.props.obj.brut}</td>
    <td>{this.props.obj.net}</td>
    <td>{this.props.obj.avance}</td>
    <td>{this.props.obj.mois}</td>
    <td>{this.props.obj.id}</td>
    <td>
    <input type="reset"onClick={this.deleteStudent} className="btn btn-warning" value="Delete" />

    </td>
    </tr>
    )
    }
    }

    export default SalaireTableRow;