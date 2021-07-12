import {MENUS_RESTAURANTE} from '../../types'
import {MENU_ACTUAL} from '../../types'


export default (state, action) => {
    switch(action.type){
        case MENUS_RESTAURANTE:
            return{
                ...state,
                menusrestaurante:action.payload
            }
        case MENU_ACTUAL:
        return{
            ...state,
            menu: state.menusrestaurante.filter(menu => menu._id === action.payload)
        }
      
        
            

        default: 
        return state;
    }
}