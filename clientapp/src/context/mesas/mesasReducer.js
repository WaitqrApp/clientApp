import {MESAS_RESTAURANTE} from '../../types'
import {AGREGAR_MESA} from '../../types'
import {VALIDAR_MESA} from '../../types'
import {ELIMINAR_MESA} from '../../types'
import {ESTADO_MESA} from '../../types'
import {MESA_ACTUAL} from '../../types'
import {ACTUALIZAR_MESA} from '../../types'
import {LIMPIAR_MESA} from '../../types'


export default (state, action) => {
    switch(action.type){
        case MESAS_RESTAURANTE:
            return{
                ...state,
                mesasrestaurante:action.payload
            }
        
        case MESA_ACTUAL:
        return{
            ...state,
            mesa: state.mesasrestaurante.filter(mesa => mesa._id === action.payload)
        }
        case LIMPIAR_MESA:
            return{
                ...state,
                mesaseleccionada:null

            }
        
            

        default: 
        return state;
    }
}