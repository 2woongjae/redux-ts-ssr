import {ADD_AGE} from '../action';

export function ageApp(state: { age: number; } = {age: 35}, action: { type: string; }): { age: number; } {
  if (action.type === ADD_AGE) {
    return {age: state.age + 1};
  }
  return state;
}