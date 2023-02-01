//1
function findUserByUsername(arr, str) {
  return arr.find((obj) => {
    return obj.username === str;
  });
}

//2
function removeUser(arr, str) {
  let removeUser = arr.findIndex((obj) => {
    return obj.username === str;
  });
  return arr.splice(removeUser, 1)[0];
}
