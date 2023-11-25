import { Dato } from "../types/datos";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveDatos = async (datos: Dato): Promise<Actions> => {
    await firebase.saveDatosInLS(datos);
    return {
        action: SomeActions.SAVE_DATOS,
        payload: datos
    }
}

export const getDatos = async (): Promise<Actions> => {
    const dato = await firebase.getDatosInLS();
    return {
        action: SomeActions.GET_DATOS,
        payload: dato
    }
}