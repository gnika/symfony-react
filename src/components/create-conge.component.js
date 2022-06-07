import React, { Component } from "react";
import axios from 'axios';

class CreateConge extends Component {

    constructor(props) {
        super(props)
        // Setting up functions
        this.onChange=this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // Setting up state
            this.state = {
                'id_emp': '',
                'duree': '',
                'type': '',
                'debut': '',
                'cause': '',
                'etat': 'attente',
                'remarque': ''
        }
    }
    onChange = e => { // arrow function
        this.setState({ [e.target.name]: e.target.value });
        };
    onSubmit(e) {

       let reste = 30
       let duree = this.state.duree
       if( duree < 1 ){
        const rmq= <span className='alert alert-warning'>la durée doit être supérieur ou égale à 1</span>; 
        this.setState({remarque:rmq})
       }
        let type = this.state.type
        if( type != 'repos' && type != 'maladie' && type != 'urgent' && type != 'longue durée'  ){

            const rmq= <span className='alert alert-warning'>type ne peut être égal qu\'à ces valeurs la: repos, maladie, urgent, longtue durée</span>; 
            this.setState({remarque:rmq})
        }

         let cause = this.state.cause

         if( cause == '' && type != 'repos' ){
          const rmq= <span className='alert alert-warning'>Cause ne peut être vide que si le type est "repos"</span>; 
          this.setState({remarque:rmq})
         }

        
        if( cause == 'repos' && duree > reste ){
            const rmq= <span className='alert alert-warning'>Si le type de congé est repos, la durée doit être inférieur à la valeur reste</span>; 
            this.setState({remarque:rmq})
        }
        
    e.preventDefault()

        
        const employeObject = {
            id_emp: this.state.id_emp,
            type: this.state.type,
            duree: this.state.duree,
            debut: this.state.debut,
            cause: this.state.cause,
        };
        
        if (this.state.remarque == ''){
            axios.post('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/conge/', employeObject)
            .then(res => console.log(res.data));
            this.setState({  'nom': '',
            'id_emp': '',
            'duree': '',
            'type': '',
            'debut': '',
            'cause': '',
            'etat': 'attente' })
        }
    }
    render() {
    return (

        <div>
        <div className="container">
            <div className="row">
                <div className="col">
                
                </div>
                <div className="col">
                <form onSubmit={this.onSubmit}>
              
            <label for="exampleFormControlInput1" className="form-label">Id employé</label>
            <input type="text" name="id_emp" value={this.state.id_emp} onChange={this.onChange} className="form-control"  placeholder="id employé" />
            <label for="exampleFormControlInput1" className="form-label">durée</label>
            <input type="text" name="duree" value={this.state.duree} onChange={this.onChange} className="form-control"  placeholder="durée" />
            <label for="exampleFormControlInput1" className="form-label">type</label>
            <input type="text" name="type" value={this.state.type} onChange={this.onChange} className="form-control"  placeholder="type" />
            <label for="exampleFormControlInput1" className="form-label">début</label>
            <input type="text" name="debut" value={this.state.debut} onChange={this.onChange} className="form-control"  placeholder="debut" />
            <label for="exampleFormControlInput1" className="form-label">cause</label>
            <input type="text" name="cause" value={this.state.cause} onChange={this.onChange} className="form-control"  placeholder="cause" />
            <label for="exampleFormControlInput1" className="form-label">etat</label>
            <input type="text" name="etat" value={this.state.etat} onChange={this.onChange} className="form-control"  placeholder="etat" />
            
            <input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
        

              </form>
                </div>
                <div className="col">
                
                </div>
            </div>
            
        </div>
            <br></br><br></br><br></br><div className='text-center'>{this.state.remarque}</div>
        </div>
    )

}
}

export default CreateConge;