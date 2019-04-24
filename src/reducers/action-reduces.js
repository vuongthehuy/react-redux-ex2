import {Item} from '../actions/typeaction';
export default (state={},action)=>{
    switch (action.type){
        case Item:
            return action.playload;
        default:
            return {};

    }
    return {};
}