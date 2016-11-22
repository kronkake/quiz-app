export default function userReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_USER':
        return [...state, Object.assign({}, action.user)];
      break;
    case 'GET_USERS':
        state = action.users;
        return state;
      break;
    default:
      return state;
  }
}
