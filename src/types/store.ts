import { Dato } from "./datos";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  datos: Dato[];
};

export enum SomeActions {
  "SAVE_DATOS" = "SAVE_DATOS",
  "GET_DATOS" = "GET_DATOS"
}

export interface SaveDatosAction {
  action: SomeActions.SAVE_DATOS;
  payload: Dato;
}
export interface GetDatosAction {
  action: SomeActions.GET_DATOS;
  payload: Dato[];
}

export type Actions = SaveDatosAction | GetDatosAction;
