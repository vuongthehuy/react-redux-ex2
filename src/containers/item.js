import React, { Component } from 'react';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SelectItem} from '../actions/action';
class ItemList extends  Component {
    createItem(){
        let listItem=this.props.item.map((eachItem, index)=>{
            return(
                <div key={index} onClick={()=>{
                    this.props.SelectItem(eachItem)
                }}>
                    Name: {eachItem.name}
                </div>

            ) ;
        });
        return listItem
    }

    render(){

        return (
            <div>
                {this.createItem()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        item:state.item

    };
}
function mapspatchToProp(dispatch) {
    return bindActionCreators({SelectItem:SelectItem}, dispatch);
}
let ItemContainer=connect(mapStateToProps, mapspatchToProp)(ItemList);
export  default ItemContainer;