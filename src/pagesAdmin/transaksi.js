import React from 'react';
import { Table } from 'reactstrap'
import { connect } from 'react-redux'

import { getHistoryRacik } from '../actions'

class Transaksipage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getHistoryRacik()
    }

    renderHeadKimia = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>
                        <h4>Order Number</h4>
                    </th>
                    <th>
                        <h4>Pembelian</h4>
                        <h6>Obat Racik</h6>
                    </th>
                    <th>
                        <h4>Quantity</h4>
                    </th>
                    <th>
                        <h4>Total</h4>
                    </th>
                    <th>
                        <h4>Status</h4>
                    </th>
                </tr>
            </thead>
        )
    }

    renderBodyKimia = () => {
        return this.props.data.map((item, index) => {
            return (
                <tbody>
                    <tr>
                        <th scope="row" key={item.id}>{item.id}</th>
                        <td>{item.order_number}</td>
                        <td>{item.nama_kimia}</td>
                        <td>{item.qty}</td>
                        <td>{item.total}</td>
                        <td>{item.status_order}</td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        console.log(this.props.data)
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '39vw', color: '#e85661', marginBottom: '5vh' }}>Riwayat Transaksi</h1>
                <Table style={{ color: '#e85661', width: '90vw', marginLeft: '5vw' }}>
                    {this.renderHeadKimia()}
                    {this.renderBodyKimia()}
                </Table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.adminReducer.historyRacik
    }
}

export default connect(mapStateToProps, { getHistoryRacik })(Transaksipage);