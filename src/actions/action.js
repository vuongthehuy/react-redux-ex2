import {Item} from './typeaction';
export const SelectItem=(name)=> {
    console.log(`your click : ${name.name}`);
    return {
        type:Item,
        playload: name
    };
};
