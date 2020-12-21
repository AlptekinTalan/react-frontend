import React, { Component } from 'react';
import CarService from '../services/CarService';

class CreateCarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {	   
            id: this.props.match.params.id,
            name: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateCar = this.saveOrUpdateCar.bind(this);
    }	 

    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{

            CarService.getCarById(this.state.id).then( (res) =>{
                let car = res.data;
                this.setState({name: car.name
                });
            });
        }        
    }

    saveOrUpdateCar = (e) => {
        e.preventDefault();
        let car = {name: this.state.name};
        console.log('car => ' + JSON.stringify(car));

        // step 5
        if(this.state.id === '_add'){
            CarService.createCar(car).then(res =>{
                this.props.history.push('/cars');
            });
        }else{
            car = {id:this.state.id,name: this.state.name}
            CarService.updateCar(car,this.state.car).then( res => {
                this.props.history.push('/cars');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    cancel(){
        this.props.history.push('/cars');
    }

	 getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Car</h3>
        }else{
            return <h3 className="text-center">Update Car</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">

								{
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Car Name: </label>
                                            <input placeholder="Car Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCar}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default CreateCarComponent;