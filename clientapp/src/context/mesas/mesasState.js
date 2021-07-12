import React, {useReducer} from 'react';
import MesaContext from './mesasContext';
import MesaReducer from './mesasReducer';
import {MESAS_RESTAURANTE} from '../../types'
import {MESA_ACTUAL} from '../../types'
import {LIMPIAR_MESA} from '../../types'
import clienteAxios from '../../config/axios'

const MesaState = props =>{
    
    const initialState ={
        mesasrestaurante: [],
        errormesa: false,
        mesaseleccionada:null,
        mesa:null

    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(MesaReducer, initialState);

    //crear las funciones


    //obtener las mesas de un restaurante

    const obtenerMesas = async restaurante =>{
        try {
            const resultado = await clienteAxios.get('/api/mesas',{params:{restaurante}});
            console.log(resultado)
            dispatch({
                type: MESAS_RESTAURANTE,
                payload: resultado.data.mesas
            })
        } catch (error) {
            console.log(error)
        }
    }

    

    //Extrae una tarea para edicion
    const guardarMesaActual = mesaId =>{
        dispatch({
            type:MESA_ACTUAL,
            payload: mesaId
        })
         
    }

    
    //Elimina la mesaseleccionada

    const limpiarMesa = () =>{
        dispatch({
            type: LIMPIAR_MESA
        })
    }

    return (
        <MesaContext.Provider
            value ={{
               // mesas: state.mesas,
                mesasrestaurante: state.mesasrestaurante,
                errormesa: state.errormesa,
                mesaseleccionada: state.mesaseleccionada,
                mesa: state.mesa,
                obtenerMesas,
                guardarMesaActual,
                limpiarMesa
            }}
        >
            {props.children}
        </MesaContext.Provider>
    )
}

export default MesaState; 