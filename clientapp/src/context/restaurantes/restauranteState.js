import React, {useReducer} from 'react';

import restauranteContext from './restauranteContext';
import restauranteReducer from './restauranteReducer';
import {FORMULARIO_RESTAURANTE} from '../../types';
import {OBTENER_UN_RESTAURANTE} from '../../types';
import {OBTENER_RESTAURANTES} from '../../types';
import {AGREGAR_RESTAURANTE} from '../../types';
import {VALIDAR_FORMULARIO} from '../../types';
import {RESTAURANTE_ACTUAL} from '../../types';
import {ELIMINAR_RESTAURANTE} from '../../types';
import {RESTAURANTE_ERROR} from '../../types';



import clienteAxios from '../../config/axios';






const RestauranteState = props => {
    const initialState = {
        formulario : false,
        restaurantes:[],
        errorformulario: false,
        restaurante: null,
        mensaje: null  
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(restauranteReducer, initialState)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_RESTAURANTE
        })
    }

    //obtener los restaurantes
    const obtenerRestaurantes = async () =>{
        try {
            const resultado = await clienteAxios.get('/api/restaurantes');

            dispatch({
                type: OBTENER_RESTAURANTES,
                payload: resultado.data.restaurantes
            })
        } catch (error) {
            //console.log(error)
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: RESTAURANTE_ERROR,
                payload: alerta
            })
        }
    }

    const obtenerUnRestaurante = async restaurante =>{
        try {
            const resultado = await clienteAxios.get('/api/restaurantes/restaurante',{params:{restaurante}});
            console.log(resultado)
            dispatch({
                type: OBTENER_UN_RESTAURANTE,
                payload: resultado.data.restaurantes
            })
        } catch (error) {
            console.log(error)
        }
    }


    //valida el formlario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el restaurante que el usuario dio click 
    const guardarRestauranteActual = restauranteId =>{
        dispatch({
            type: RESTAURANTE_ACTUAL,
            payload: restauranteId
        })
    }
  
    

    return(
        <restauranteContext.Provider
            value={{
                formulario: state.formulario,
                restaurantes: state.restaurantes,
                errorformulario:state.errorformulario,
                restaurante: state.restaurante,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerRestaurantes,
                obtenerUnRestaurante,
                mostrarError,
                guardarRestauranteActual,
            }}
        >
            {props.children}
        </restauranteContext.Provider>  
    )
}

export default RestauranteState;