// Signup/register
function register(eve) {
    eve.preventDefault();
    try {
        var userName = eve.target.elements.userName.value;
        var userPassword = eve.target.elements.userPassword.value;
        if (!userName || !userPassword) {
            alert("UserName or Password is missing");
        }
        var addUser = { userName: userName, userPassword: userPassword };
        fetch("/fitnessApi/users/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.ok) {
                window.location.href = "./login/login.html";
            }
            else {
                alert(data.error);
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// Login
function login(eve) {
    eve.preventDefault();
    try {
        var userName = eve.target.elements.userName.value;
        var userPassword = eve.target.elements.userPassword.value;
        if (!userName || !userPassword)
            throw new Error("userName or password is missing");
        var addUser = { userName: userName, userPassword: userPassword };
        fetch("/fitnessApi/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.ok) {
                localStorage.setItem("userName", data.userName);
                console.log(data);
                window.location.href = "/home/home.html?userName=" + data.userName + "&role=" + data.role;
            }
            else {
                alert("User name or password is incorrect");
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// ------------------------------------------------------------------------------------
// Signup
// function Register(eve: any) {
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
// // // -------------------------------------------------------------------------//
// // Login
// function Login(eve: any) {
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
