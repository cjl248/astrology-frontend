const loginReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        id: action.user.id,
        name: action.user.name
      };
    case "LOGOUT":
      return {
        id: null,
        name: ""
      };
    default:
      return state;
  }
};

export default loginReducer;
