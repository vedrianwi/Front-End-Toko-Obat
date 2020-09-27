import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'reactstrap';
import {connect} from 'react-redux'

import { getCart } from '../actions'


class Receiptpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getCart()
    }

    render() {
        setTimeout(() => this.setState({ready:true}), 1500)
        if (this.state.ready) {
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '47vw', color:'#e85661' }}>RESI</h1>
                <div>
                    <Link to='/riwayattransaksi'>
                        <Button style={{ width: '30vw', borderColor:'#e85661',marginLeft: '35vw', marginTop: '20vh', backgroundColor: '#e85661' }}>Selesai</Button>
                    </Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{marginLeft:'32vw', marginTop:'20vh', marginBottom:'40vh'}}>
            <Spinner type="grow" color="primary"style={{width:'10vh', height:'5vw'}} />
            <Spinner type="grow" color="secondary" style={{width:'10vh', height:'5vw'}} />
            <Spinner type="grow" color="success"style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="danger" style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="warning" style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="info" style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="dark" style={{width:'10vh', height:'5vw'}}/>
            </div>
        )
    
    }
}

}


const mapStateToProps = (state) => {
    return {
        payment_id : state.paymentReducer.payment_id,
        order_number : state.orderReducer.order_number
    }
}

export default connect(mapStateToProps, {getCart})(Receiptpage);