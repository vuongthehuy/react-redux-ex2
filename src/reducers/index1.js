import ListItem from './item-reducer';
import ActionReduces from './action-reduces'
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    item:ListItem,
    act:ActionReduces
});
export default allReducers;