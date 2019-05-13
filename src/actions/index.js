export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_TEN ='INCREMENT_BY_TEN'

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  return{
    type:INCREMENT
  }
};

export const decrement = () => {
  // Fill in this function
   return{
     type: DECREMENT
   }
};

export const incrementByTen = () => {
  // Fill in this function
   return{
     type: INCREMENT_BY_TEN
   }
};