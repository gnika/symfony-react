import React, { Component } from "react";
import StudentTableRow from './StudentTableRow';
import axios from 'axios';
class StudentList extends Component {
constructor(props) {
    super(props)
    this.state={
        employes : []
    }
}

componentDidMount() {
    axios.get('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/Employee')
    .then(res => {
    this.setState({
        employes: res.data
    });
    })
    .catch((error) => {
    console.log(error);
    })
    }


DataTable() {
return this.state.employes.map((res, i) => {
return <StudentTableRow obj={res} key={i} />;
});
}
render() {
return (<div className="table-wrapper">
<table className="table striped bordered hover">
<thead>
<tr>
<th>Nom</th>
<th>Prenom</th>
<th>Email</th>
<th>Mot de passe</th>
<th>Tel</th>
<th>Grade</th>
<th>Salaire</th>
<th>Spécialiste</th>
<th>Id</th>
</tr>
</thead>
<tbody>
{this.DataTable()}
</tbody>
</table>
</div>);
}
}

export default StudentList