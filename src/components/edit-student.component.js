import React, { Component } from "react";
import axios from 'axios';

class EditStudent extends Component {

    constructor(props) {
        super(props)
        // Setting up functions
        this.onChange=this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // Setting up state
            this.state = {
                'nom': '',
                'prenom': '',
                'email': '',
                'mdp': '',
                'tel': '',
                'grade': '',
                'salaire': '',
                'specialite': '',
                'id': ''
        }
    }

    componentDidMount() {
        axios.get('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/Employee/' + this.props.match.params.id)
        .then(res => {
        this.setState({
            'nom': res.data.nom,
                'prenom': res.data.prenom,
                'email': res.data.email,
                'mdp': res.data.mdp,
                'tel': res.data.tel,
                'grade': res.data.grade,
                'salaire': res.data.salaire,
                'specialite': res.data.specialite,
                'id': res.data.id
        });
        })
        .catch((error) => {
        console.log(error);
        })
        }

    onChange = e => { // arrow function
        this.setState({ [e.target.name]: e.target.value });
        };
    onSubmit(e) {
    e.preventDefault()
    const employeObject = {
        nom: this.state.nom,
        prenom: this.state.prenom,
        email: this.state.email,
        mdp: this.state.mdp,
        tel: this.state.tel,
        grade: this.state.grade,
        salaire: this.state.salaire,
        specialite: this.state.specialite,
        id: this.state.id,
    };
    console.log(employeObject);
    axios.put('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/Employee/', employeObject)
    .then(res => console.log(res.data));
    this.setState({  'nom': '',
    'prenom': '',
    'email': '',
    'mdp': '',
    'tel': '',
    'grade': '',
    'salaire': '',
    'specialite': '',
    'id': '' })
    }
    render() {
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                
                </div>
                <div className="col">
                <form onSubmit={this.onSubmit}>
              
            <label className="form-label">Nom</label>
            <input type="text" name="nom" value={this.state.nom} onChange={this.onChange} className="form-control"  placeholder="Votre nom ici" />
            <label className="form-label">Prenom</label>
            <input type="text" name="prenom" value={this.state.prenom} onChange={this.onChange} className="form-control"  placeholder="Votre prénom ici" />
            <label className="form-label">Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.onChange} className="form-control"  placeholder="Votre email ici" />
            <label className="form-label">Mdp</label>
            <input type="text" name="mdp" value={this.state.mdp} onChange={this.onChange} className="form-control"  placeholder="Votre mot de passe ici" />
            <label className="form-label">Tel</label>
            <input type="text" name="tel" value={this.state.tel} onChange={this.onChange} className="form-control"  placeholder="Votre téléphone ici" />
            <label className="form-label">Grade</label>
            <input type="text" name="grade" value={this.state.grade} onChange={this.onChange} className="form-control"  placeholder="Votre grade ici" />
            <label className="form-label">Salaire</label>
            <input type="text" name="salaire" value={this.state.salaire} onChange={this.onChange} className="form-control"  placeholder="Votre salaire ici" />
            <label className="form-label">Specialiste</label>
            <input type="text" name="specialite" value={this.state.specialite} onChange={this.onChange} className="form-control"  placeholder="Votre spécialité ici" />
            <label className="form-label">Id</label>
            <input type="text" name="id" value={this.state.id} onChange={this.onChange} className="form-control"  placeholder="Votre id ici" />
            <input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
        

              </form>
                </div>
                <div className="col">
                
                </div>
            </div>
        </div>
    )

}
}

export default EditStudent;