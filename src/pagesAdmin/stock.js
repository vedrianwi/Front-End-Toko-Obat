import React from 'react';
import { connect } from 'react-redux'
import { Table, Button, Input } from 'reactstrap'

import { getUpdateStock, addStock } from '../actions'

class Stockpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null
        }
    }


    componentDidMount() {
        this.props.getUpdateStock()
    }




    handleAdd = (id) => {
        this.setState({ selectedId: id })
        console.log(this.state.selectedId)
    }

    handleCancel = (id) => {
        this.setState({ selectedId: null })
    }

    renderTableHead = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>Jenis Kimia</th>
                    <th>Nama Kimia</th>
                    <th>Stock</th>
                    <>Action</>
                </tr>
            </thead>

        )
    }

    handleOk = async (id) => {
        const body = {
            stock: this.botol.value,
            id: id
        }
        console.log(body)
        await this.props.addStock(body)
        await this.props.getUpdateStock()
        await this.setState({ selectedId: null })
    }

    renderTableBody = () => {
        return this.props.stock.map((item, index) => {
            if (item.id === this.state.selectedId) {
                return (
                    <tbody>
                        <tr>
                            <th scope="row">{item.id}</th>
                            <th>{item.jenis_kimia}</th>
                            <td>{item.nama_kimia}</td>
                            <td><Input type="text" name="botol" innerRef={(botol) => this.botol = botol} /></td>
                            <td>{item.sisa_stock}</td>
                            <td><Button onClick={() => this.handleOk(item.id)}>Ok</Button>
                                <Button onClick={() => this.handleCancel(item.id)}>Cancel</Button></td>
                        </tr>
                    </tbody>

                )
            } else {
                return (
                    <tbody>
                        <tr>
                            <th scope="row">{item.id}</th>
                            <th>{item.jenis_kimia}</th>
                            <td>{item.nama_kimia}</td>
                            <td>{item.stock} Botol {item.sisa_stock} ML</td>
                            <td><Button onClick={() => this.handleAdd(item.id)}>Tambah</Button></td>

                        </tr>
                    </tbody>
                )
            }
        })
    }

    render() {
        return (
            <div>
                <Table dark>
                    {this.renderTableHead()}
                    {this.renderTableBody()}
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stock: state.adminReducer.stock
    }
}

export default connect(mapStateToProps, { getUpdateStock, addStock })(Stockpage);