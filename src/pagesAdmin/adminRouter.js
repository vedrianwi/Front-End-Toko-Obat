import React from 'react';
import { Route }from 'react-router-dom'


import AdminLoginpage from './adminLogin'
import Penggunapage from './pengguna'
import Pesananpage from './pesanan'
import Transaksipage from './transaksi'
import Stockpage from './stock'
import NavbarAdmincomponent from '../components/navbarAdmin'
import Footercomponent from '../components/footer'
import {connect} from 'react-redux'

class Adminrouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>{
                this.props.role=='admin'&&
                <NavbarAdmincomponent></NavbarAdmincomponent>
                }
                <Route path={this.props.match.path + '/login'} component = {AdminLoginpage} exact/>
                <Route path={this.props.match.path + '/pengguna'} component = {Penggunapage} />
                <Route path={this.props.match.path + '/pesanan'} component = {Pesananpage} />
                <Route path={this.props.match.path + '/transaksi'} component = {Transaksipage} />
                <Route path={this.props.match.path + '/stock'} component = {Stockpage} />
                <Footercomponent></Footercomponent>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        role : state.userReducer.role
    }
}

export default connect(mapStateToProps) (Adminrouter);