import configEntries from '../DataTypes/ConfigEntries';
import { fileConfigEntry } from '../DataTypes/ConfigEntries';
import { action } from '../Actions/index'
import { ADD_CONFIG_ENTRY } from '../DataTypes/Constants/Actions';

export const initialState: fileConfigEntry[] = configEntries;

export function rootReducer(state: fileConfigEntry[] = initialState, passedAction: action) {
    if (passedAction.type === ADD_CONFIG_ENTRY) {
        // state[0].configs.push(action.payload as configEntry);
        // const config = state[0].configs;
        return null;
    };

    return state;
}
