import { combineReducers } from 'redux';
import auth from './auth/reducer';
import programmer from './programmer/reducer';
import dogTinder from "./animalTinder/reducer"
import { ProgrammerState } from './programmer/types';
import { AuthState } from './auth/types';
import {TinderState} from './animalTinder/types'
export interface AppState {
  auth: AuthState;
  programmer: ProgrammerState;
  dogTinder: TinderState;
}
const rootReducer = combineReducers<AppState>({
  auth,
  programmer,
  dogTinder,
});
export default rootReducer;
