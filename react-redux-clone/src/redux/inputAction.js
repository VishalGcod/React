export const ADD_INPUT = "ADD_INPUT";
export const ARRAY_DATA = "ARRAY_DATA";
export const EDIT_ARRAY = "EDIT_ARRAY";
export const UPDATE_DATA = "UPDATE_DATA";

export const FETCH_USER_REQUEST='FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE='FETCH_USER_FAILURE'

// export const addInput = (inputdata) => {
//   return {
//     type: ADD_INPUT,
//     payload: inputdata,
//   };
// };

export const addToArr = (arrobj) => {
  return {
    type: ARRAY_DATA,
    payload: arrobj,
  };
};
export const editToArr = (editarrobj) => {
  return {
    type: EDIT_ARRAY,
    payload: editarrobj,
  };
};

export const updateData = (updatearrobj) => {
  return {
    type: UPDATE_DATA,
    payload: updatearrobj,
  };
};

export const fetchRequest=()=>{
  return{
    type:FETCH_USER_REQUEST,
  }
}
export const fetchSuccess=(user)=>{
  return{
    type:FETCH_USER_SUCCESS,
    payload:user
  }
}
export const fetchFailure=(error)=>{
  return{
    type:FETCH_USER_FAILURE,
    payload:error
  }
}

export const fetchUsers=()=>{
  return(dispatch)=>{
    dispatch(fetchRequest)
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      const users=res.data
      dispatch(fetchSuccess(users))
    }).catch(error=>{
      const errMessage=error.message
      dispatch(fetchFailure(errMessage))
    })
  }
}