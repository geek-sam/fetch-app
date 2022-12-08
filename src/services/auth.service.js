const signUp = async (email, password) => {
  // console.log(userData.email)
  try {
    let item = { email, password };
    let res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    console.log("res", res);
    localStorage.setItem("user-info", JSON.stringify(res));
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

const signIn = async (email, password) => {
  try {
    let item = { email, password };
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    console.log("res", res);
    localStorage.setItem("user-info", JSON.stringify(res));
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { signIn, signUp };
