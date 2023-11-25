import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const {action, payload} = actions;
    switch (action) {
        case SomeActions.SAVE_DATOS:
            state.datos = [...state.datos, payload]
            return state;
        case SomeActions.GET_DATOS:
            state.datos = payload
            return state;
    
        default:
            break;
    }
}