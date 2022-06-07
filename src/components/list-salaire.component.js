import React, { Component } from "react";
import SalaireTableRow from './SalaireTableRow';
import axios from 'axios';
class SalaireList extends Component {
constructor(props) {
    super(props)
    this.state={
        employes : []
    }
}

componentDidMount() {
    axios.get('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/salaire')
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
return <SalaireTableRow obj={res} key={i} />;
});
}
render() {
return (<div className="table-wrapper">
<table className="table striped bordered hover">
<thead>
<tr>
<th>id_emp</th>
<th>taxes</th>
<th>brut</th>
<th>net</th>
<th>avance</th>
<th>mois</th>
</tr>
</thead>
<tbody>
{this.DataTable()}
</tbody>
</table>
</div>);
}
}

export default SalaireList