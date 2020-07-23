import {
    GetListRandomDogActionTypes,
    AddInfoActionTypes,
    RandomDog,
    TinderDog
  } from "./types"
  import { Dispatch } from 'redux';
  import axios from 'axios';
const GetRandomDog =()=>{
    return(dispatch:Dispatch)=>{
        const payload = {
            loader: true,
          };
        dispatch(requestInit(payload));
        const url:string = 'https://dog.ceo/api/breeds/image/random'
        axios.get(url)
          .then(response => {
              const randomDogArray: RandomDog[] = [response.data];
              const payload= {
                loader:false,
                randomDogArray
            };
            dispatch(requestSuccess(payload))
          })
          function requestInit(payload: any) {
            return { type: GetListRandomDogActionTypes.GET_RANDOM_DOG_INIT, payload };
          }
            function requestSuccess(payload: any) {
                return { type: GetListRandomDogActionTypes.GET_RANDOM_DOG, payload };
              }
        }
}

const AddInfo = (photoLink: string, LikedorDisLiked: boolean)=>{
    return(dispatch:Dispatch)=>{

    const dogTinderArray: TinderDog = {photoLink,
        LikedorDisLiked
    } 
    const payload ={
        dogTinderArray
    }
    dispatch(requestSuccess(payload))
    GetRandomDog();
    function requestSuccess(payload: any) {
        return { type: AddInfoActionTypes.ADD_INFO, payload };
      }
      
    }
}
export default {GetRandomDog, AddInfo};