import {OBTENER_RESTAURANTES} from '../../types';
import {OBTENER_UN_RESTAURANTE} from '../../types';
import {RESTAURANTE_ACTUAL} from '../../types';

export default (state,action) =>{
    switch(action.type){
        
        case OBTENER_RESTAURANTES:
            console.log(action.payload)
            return{
                ...state,
                restaurantes: action.payload
            }
            case OBTENER_UN_RESTAURANTE:
            console.log(action.payload)
            return{
                ...state,
                restaurantes: action.payload
            }
            case RESTAURANTE_ACTUAL:
                return{
                    ...state,
                    restaurante:  action.payload 
                }
        default:
            return state;
    }
}