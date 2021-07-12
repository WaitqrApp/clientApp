import React, {useReducer} from 'react';
import MenuContext from './menusContext';
import MenuReducer from './menusReducer';
import {MENUS_RESTAURANTE} from '../../types'
import {MENU_ACTUAL} from '../../types'
import {LIMPIAR_MENU} from '../../types'
import clienteAxios from '../../config/axios'

const MenuState = props =>{
    
    const initialState ={
        menusrestaurante: [],
        errormenu: false,
        menuseleccionado:null,
        menu:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(MenuReducer, initialState);

    //crear las funciones


    //obtener las menus de un restaurante

    const obtenerMenus = async restaurante =>{
        try {
            const resultado = await clienteAxios.get('/api/menus',{params:{restaurante}});
            console.log(resultado)
            dispatch({
                type: MENUS_RESTAURANTE,
                payload: resultado.data.menus
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Extrae una tarea para edicion
    const guardarMenuActual = menuId =>{
        dispatch({
            type:MENU_ACTUAL,
            payload: menuId
        })
         
    }

    
    //Elimina la menuseleccionado

    const limpiarMenu = () =>{
        dispatch({
            type: LIMPIAR_MENU
        })
    }

    return (
        <MenuContext.Provider
            value ={{
               // menus: state.menus,
                menusrestaurante: state.menusrestaurante,
                errormenu: state.errormenu,
                menuseleccionado: state.menuseleccionado,
                menu: state.menu,
                obtenerMenus,
                guardarMenuActual,
                limpiarMenu
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuState; 