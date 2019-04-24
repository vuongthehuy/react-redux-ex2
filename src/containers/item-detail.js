import React, {Component} from 'react';
import {connect} from 'react-redux';
class ItemDetail extends Component {

    render(){
        return(
            <div><p>
                <h1>{this.props.act.price}</h1></p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        act: state.act
    };
}
let Item_Detail =connect(mapStateToProps)(ItemDetail);
export default Item_Detail;