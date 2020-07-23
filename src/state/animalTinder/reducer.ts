import {TinderState,
      GetListRandomDogActionTypes,
      AddInfoActionTypes
    } from "./types"

const defaultState : TinderState = {
    dogTinderArray :[],
    randomDogArray:[],
    loader:false
} 
export default function dogTinder(state= defaultState,action:any ){
    switch(action.type){
        case GetListRandomDogActionTypes.GET_RANDOM_DOG_INIT:
            return{
                ...state,
                loader:action.payload.loader,
            };

        case GetListRandomDogActionTypes.GET_RANDOM_DOG:
            return{
                ...state,
                loader: action.payload.loader,
                randomDogArray:action.payload.randomDogArray
            }
        case AddInfoActionTypes.ADD_INFO:
        return{
            ...state,
            dogTinderArray:[
                ...state.dogTinderArray,
                action.payload.dogTinderArray
            ],
            
        }
        default:
            return{
                ...state,

            }
    }
}