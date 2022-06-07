import React, { Component } from "react";
import CongeTableRow from './CongeTableRow';
import axios from 'axios';
class CongeList extends Component {
constructor(props) {
    super(props)
    this.state={
        employes : []
    }
}

componentDidMount() {
    axios.get('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/conge')
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
return <CongeTableRow obj={res} key={i} />;
});
}
render() {
return (<div className="table-wrapper">
<table className="table striped bordered hover">
<thead>
<tr>
<th>id_emp</th>
<th>durée</th>
<th>type</th>
<th>debut</th>
<th>cause</th>
<th>etat</th>
<th>id</th>
</tr>
</thead>
<tbody>
{this.DataTable()}
</tbody>
</table>
</div>);
}
}

export default CongeList