import React, { Component } from "react";
import axios from 'axios';

class CreateSalaire extends Component {

    constructor(props) {
        super(props)
        // Setting up functions
        this.onChange=this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // Setting up state
            this.state = {
                'id_emp': '',
                'brut': '',
                'taxes': '',
                'net': '',
                'avance': '',
                'mois': '',
                'id' : ''
        }
    }
    onChange = e => { // arrow function
        this.setState({ [e.target.name]: e.target.value });
        };
    onSubmit(e) {

        let net = this.state.net
        let brut = this.state.brut
        let tenNet = 10*net / 100
        
        
        if( brut-tenNet < net )
            alert('Salaire Brut doit être supérieur à salaire net d\'au moins 10%');

        let tax = this.state.taxes
        let twentyBrut = 20*brut / 100
        
        if( twentyBrut+ brut < tax )
            alert('Taxe ne doit pas être supérieur à 20% du brut');

        let avance = this.state.avance
        let thirtyfive = 35*brut / 100

        
        if( avance - thirtyfive < brut )
            alert('Avance doit être supérieur à 35% de brut');

        
    e.preventDefault()

    
    const salaireObject = {
        id_emp: this.state.id_emp,
        taxes: this.state.taxes,
        brut: this.state.brut,
        net: this.state.net,
        avance: this.state.avance,
        mois: this.state.mois,
        id: this.state.id,
    };
    console.log(salaireObject);
    axios.post('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/salaire/', salaireObject)
    .then(res => console.log(res.data));
    this.setState({  'nom': '',
    'id_emp': '',
    'taxes': '',
    'net': '',
    'brut': '',
    'avance': '',
    'mois': '',
    'id': ''
 })
    }
    render() {
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                
                </div>
                <div className="col">
                <form onSubmit={this.onSubmit}>
              
            <label for="exampleFormControlInput1" className="form-label">Id employé</label>
            <input type="text" name="id_emp" value={this.state.id_emp} onChange={this.onChange} className="form-control"  placeholder="id employé" />
            <label for="exampleFormControlInput1" className="form-label">salaire brut</label>
            <input type="text" name="brut" value={this.state.brut} onChange={this.onChange} className="form-control"  placeholder="salaire brut" />
            <label for="exampleFormControlInput1" className="form-label">salaire net</label>
            <input type="text" name="net" value={this.state.net} onChange={this.onChange} className="form-control"  placeholder="salaire net" />
            <label for="exampleFormControlInput1" className="form-label">taxes</label>
            <input type="text" name="taxes" value={this.state.taxes} onChange={this.onChange} className="form-control"  placeholder="taxes" />
            <label for="exampleFormControlInput1" className="form-label">avance</label>
            <input type="text" name="avance" value={this.state.avance} onChange={this.onChange} className="form-control"  placeholder="avance" />
            <label for="exampleFormControlInput1" className="form-label">mois</label>
            <input type="text" name="mois" value={this.state.mois} onChange={this.onChange} className="form-control"  placeholder="mois" />
            <label for="exampleFormControlInput1" className="form-label">ID</label>
            <input type="text" name="id" value={this.state.id} onChange={this.onChange} className="form-control"  placeholder="id" />
            
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

export default CreateSalaire;