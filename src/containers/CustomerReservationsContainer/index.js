import React, {Component} from 'react';
import CustomerReservationsComponent from '../../components/CustomerReservationsComponent';

export default class ReservationsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <CustomerReservationsComponent route={this.props.location.pathname} history={this.props.history} />
            </div>
        );
    }

}