import Firebase from '../../FireBaseConfig.js';
const userRef = Firebase.ref('/Users');

export function createUser(user) {
  return dispatch => userRef.push(user);
}
export function getUsers() {
    return dispatch => {
    userRef.on('value', snapshot => {
      dispatch({
        type: "GET_USERS",
        users: snapshot.val()
      });
    });
  }
}
