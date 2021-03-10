import usersService from "../services/users";



const allUsersReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      console.log("ccccccc")
     
      return action.data;

      case "DELETE_USER":
      console.log("ccccccc")
     return action.data;

     case  "NEW_USER" :
      console.log("ccccccc")
     return  state.concat(action.data);

    
    default:
      return state;
  }
};






export const getAllUsers = (content) => {
  return async (dispatch) => {
    //const newNote = await blogService.createNew(content);
    const users = await usersService.getAll();
    dispatch({
      type: "GET_ALL_USER",
      data: users,
    });
  };
};

export const createUser = (content) => {
  
  return async (dispatch) => {
    const newUser = await usersService.create(content);
    dispatch({
      type: "NEW_USER",
      data: newUser,
    });

    
  };
};





export const removeUserHandler = (id) => {
  return async (dispatch) => {
    const users = await usersService.getAll();
    const userObject = users.find((user) => user.id === id);
    const confirmResult = window.confirm(
      `Do you really want to delete blog with title ${userObject.username} from database/server`
    );
    if (!confirmResult) {
      return 
    }
    usersService.deletePerson(id).then( (returnedNote)=>{ 
    const newUsers= users.filter((user)=>user.id!==id)
      dispatch({
        type: "DELETE_USER",
        data: newUsers,
      });
     
    }

    ).catch(error=>console.log("blognot deleted"))

    
    
  
  
}
}

export default allUsersReducer ;
