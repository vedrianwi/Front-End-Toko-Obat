import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle,Button } from 'reactstrap';
import {connect} from 'react-redux'
import {getProductAsma} from '../actions'
import {Link} from 'react-router-dom'


class Asmapage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
       this.props.getProductAsma()
       console.log(this.props.getProductAsma())
    }

    renderCard = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} style={styles.card} >
                <CardBody>
                    <img width="60%" src={item.image} alt="card images" style={styles.image} />
                    <CardTitle style={{color:'#e85661'}}>{item.nama}</CardTitle>
                    <CardSubtitle style={{ color:'#e85661',fontSize: '30px', marginBottom: '10vh' }}>IDR : {item.harga}</CardSubtitle>
                </CardBody>
                <Link to={`/productdetail?id=${item.id} `}>
                    <Button style={{  backgroundColor: '#e85661', borderColor:'#e85661', width:'10.35vw', marginLeft:'4.5vw', marginBottom:'4vh', borderRadius:'30px' }}>Beli</Button>
                </Link>
            </Card>
            )
        })
    }
    render() {
        
        return (
            <div style={styles.root}>
            <h1 style={styles.title}>ASMA</h1>
            <div style={styles.cardContainer}>
                {this.renderCard()}
            </div>
        </div>
            );
        
    } 
}

const styles = {
    root : {
        height : 'auto',
        width : '100%',
        backgroundColor : '#f2f2f2',
        padding : '2% 7%'
    },
    title : {
        fontSize : 50,
        fontWight : 600,
        margin : '2% 0px',
        color:'#e85661'
    },
    cardContainer : {
        width : '100%',
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : 'flex-start'
    },
    card : {
        flexBasis : '19%',
        minWidth : '300px',
        marginBottom : '1%',
        marginRight : '1%'
    },
    image : {
        marginLeft : 75

    }

}

const mapStateToProps = (state) => {
    return {
        products : state.productReducer.productAsma
    }
}

export default connect(mapStateToProps,{getProductAsma})(Asmapage);