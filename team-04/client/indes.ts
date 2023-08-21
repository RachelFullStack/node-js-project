// // Signup
// function register(eve: any) {
//   eve.preventDefault();
//   try {
//     const userName = eve.target.elements.userName.value;
//     const userPassword = eve.target.elements.userPassword.value;
//     if (!userName || !userPassword)
//       throw new Error("userName or password is missing");
//     const addUser: any = { userName, userPassword };

//     fetch("/api/users/register-user", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(addUser),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("data:", data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
// // -------------------------------------------------------------------------//

// // Login
// function login(eve: any) {
//   eve.preventDefault();
//   try {
//     const userName = eve.target.elements.userName.value;
//     const userPassword = eve.target.elements.userPassword.value;
//     if (!userName || !userPassword)
//       throw new Error("userName or password is missing");
//     const addUser: any = { userName, userPassword };

//     fetch("/api/users/login-user", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(addUser),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("data:", data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
// // -------------------------------------------------------------------------//

// async function handleShowUser(eve: any) {
//   try {
//     const response = await fetch("/api/users/get-user");
//     const data = await response.json();
//     console.log("data", data);
//     const { databaseUser } = data;
//     const userHtml = document.querySelector("#userName") as HTMLDivElement;

//     if (!databaseUser)
//       throw new Error("problem with Showing Database User function");
//     if (!userHtml) throw new Error("No user element on DOM");
//     userHtml.innerHTML = databaseUser.userName;
//   } catch (error) {
//     console.log(error);
//   }
// }

// ----------------------------------------------------------------------

// Signup/register
function register(eve: any) {
  eve.preventDefault();
  try {
    const userName = eve.target.elements.userName.value;
    const userPassword = eve.target.elements.userPassword.value;
    if (!userName || !userPassword) {
      alert("UserName or Password is missing");
    }
    const addUser: any = { userName, userPassword };

    fetch(`/fitnessApi/users/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          window.location.href = "./login/login.html";
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

// Login
function login(eve: any) {
  eve.preventDefault();
  try {
    const userName = eve.target.elements.userName.value;
    const userPassword = eve.target.elements.userPassword.value;
    if (!userName || !userPassword)
      throw new Error("userName or password is missing");
    const addUser: any = { userName, userPassword };

    fetch(`/fitnessApi/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          localStorage.setItem("userName", data.userName);
          console.log(data);

          window.location.href = `/home/home.html?userName=${data.userName}&role=${data.role}`;
        } else {
          alert("User name or password is incorrect");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
