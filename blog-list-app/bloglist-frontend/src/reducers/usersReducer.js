import blogService from "../services/blogs";



const usersReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_LOGIN_USER":
      console.log("ccccccc")
      //return state.concat(action.data);
      return action.data;
   default:
      return state;
  }
};

//const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const  setLoginUser = (data) => {
    return {
      type: "SET_LOGIN_USER",
      data: data,
    };
  };

export const  handleBlogdetailsView = (id) => {
  return {
    type: "GET_DETAILS", //CLOSE_DETAILS
    data: { id },
  };
};

export const  handleBlogdetailsClose = () => {
  console.log("ondetailclose")
  return {
    type: "CLOSE_DETAILS",
    data: null,
  };
};



export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await blogService.createNew(content);
    dispatch({
      type: "NEW_NOTE",
      data: newNote,
    });
  };
};

export default usersReducer ;
