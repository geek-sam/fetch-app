const getUser = async (userId) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      // console.log(data)
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export { getUser, getUsers };
