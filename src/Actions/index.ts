import { ADD_CONFIG_ENTRY } from '../DataTypes/Constants/Actions';
export type action = {
    type: string;
    payload: object;
}

export function addConfigEntry(payload: object): action {
    return {
        type: ADD_CONFIG_ENTRY,
        payload: payload
    }
}
