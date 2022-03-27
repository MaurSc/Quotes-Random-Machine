import {Colors} from '../../models/Colors';

export const COLORGLOBAL : any = {
    
    color: Colors[Math.floor(Math.random() * Object.keys(Colors).length / 2)],
    changeColor : function() {
        return this.color = Colors[Math.floor(Math.random() * Object.keys(Colors).length / 2)]
    }
}