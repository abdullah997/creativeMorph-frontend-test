// TODO: refactor getTradingAccount function.

import { Programmer } from './types';
import { element } from 'prop-types';
import programmer from './reducer';
export const programmers: Programmer[] = [
  {
    name: 'programmer 1',
    language: 'typescript',
    level: 2,
  },
  {
    name: 'programmer 2',
    language: 'typescript',
    level: 7,
  },
  {
    name: 'programmer 3',
    language: 'typescript',
    level: 4,
  },
  {
    name: 'programmer 4',
    language: 'typescript',
    level: 10,
  },
  {
    name: 'programmer 5',
    language: 'typescript',
    level: 9,
  },
];

export const getProgrammersList = () => {
  return programmers;
};

export const filterProgrammerArray = (name: string) => {
  // remove the refference which is pointing to same array inthe memory
  const filteredProgrammerArray = programmers.map(
    (element: Programmer) => {if(element.name === name){
      element = {...element, name: name}
      return element
    }},
  ).filter(element=>!!element);
  console.log(filterProgrammerArray)
  return filteredProgrammerArray;
};

export const changeLevelOfProgrammer = (payload: any) => {
  const { name, value } = payload;
  const targetObject = programmers.filter(element => element.name === name)[0] || {};
  const constructedObject = {
    name: targetObject.name,
    level: value,
    language: targetObject.language,
  };
  return constructedObject;
};
