export interface TinderState {
    dogTinderArray: TinderDog[];
    randomDogArray: RandomDog[];
    loader: boolean;
  }
  
  export interface TinderDog {
    photoLink: string;
    LikedorDisLiked:boolean;
  }
  export interface RandomDog {
    message: string;
    status:string;
  }
  
  export enum GetListRandomDogActionTypes {
    GET_RANDOM_DOG_INIT = 'GET_RANDOM_DOG_INIT',
    GET_RANDOM_DOG = 'GET_RANDOM_DOG',
  }
  export enum AddInfoActionTypes {
    ADD_INFO = 'ADD_INFO',
  }
  