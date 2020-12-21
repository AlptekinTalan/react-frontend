import React, { Component } from 'react';
import CarService from '../services/CarService';

class ListCarComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: []
        }

        this.addCar = this.addCar.bind(this);
		this.editCar = this.editCar.bind(this);
	}

    editCar(id){
        this.props.history.push(`/add-car/${id}`);
    }

    componentDidMount(){
        CarService.getCars().then((res) => {
            
            this.setState({cars: res.data});
        
        });
    }

    addCar(){
        this.props.history.push('/add-car/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Car List</h2>

                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCar}> Add Car</button>
                 </div>
                 <br></br>

                <div className = "row">
                    <table className ="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Car Id</th>
                                <th>Car Name</th>
                                <th>Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.cars.map(
                                car =>
                                <tr key={car.id}>
                                    <td>{car.id}</td>            
                                    <td>{car.name}</td>            
									<td>
                                        <button onClick={ () => this.editCar(car.id)} className="btn btn-info">Update </button>
                                     </td>
                                </tr>
                            )
                        }

                    </tbody>

                    </table>

                   
                
                </div>

            </div>
        );
    }
}

export default ListCarComponents;