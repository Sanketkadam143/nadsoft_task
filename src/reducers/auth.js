import { ALLPOST, DELETE, EDIT} from "../constants/actionTypes";


const authReducer = (
  state = { authData: [], user: false, members: [], editmember: [] },
  action
) => {
  switch (action.type) {
    case ALLPOST:
      return { ...state, members: action.payload };
    case DELETE:
      return {
        ...state,
        members: state.members.filter((member) => {
          return member?._id !== action.id;
        }),
      };

    case EDIT:
      return { ...state, editmember: action.payload };
    default:
      return state;
  }
};

export default authReducer;
