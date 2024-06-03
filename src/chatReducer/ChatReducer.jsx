export const chatReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [
        ...state,
        {
          id: state.length + 1,
          user: action.payload.user,
          message: action.payload.text,
        },
      ];
    default:
      return state;
  }
};
