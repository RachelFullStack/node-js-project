function handleRegistration(eve: any) {
  try {
    eve.preventDefault();
    const userName = eve.target.elements.userName.value;
    const userPassword = eve.target.elements.userPassword.value;
    if (!userName || !userPassword)
      throw new Error("userName or password is missing");
    // if (!userPassword) throw new Error("password is missing");
    const addUser: any = { userName, userPassword };

    fetch("/api/users/register-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
// ------------------------------
function handleUserLogin(eve: any) {
  try {
    eve.preventDefault();
    const userName = eve.target.elements.userName.value;
    const userPassword = eve.target.elements.userPassword.value;
    if (!userName || !userPassword)
      throw new Error("userName or password is missing");
    // if (!userPassword) throw new Error("password is missing");
    const addUser: any = { userName, userPassword };

    fetch("/api/users/login-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
// ------------------------------
async function handleShowDatabaseUser(eve: any) {
  try {
    const response = await fetch("/api/users/get-database-user");
    const data = await response.json();
    console.log("data", data);
    const { userFromCookies } = data;
    const userHtml = document.querySelector("#userName") as HTMLDivElement;

    if (!userFromCookies)
      throw new Error("problem with Showing Database User function");
    if (!userHtml) throw new Error("No user element on DOM");
    userHtml.innerHTML = userFromCookies.name;
  } catch (error) {
    console.error(error);
  }
}
