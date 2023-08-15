function handleRegistration(eve) {
    try {
        eve.preventDefault();
        var userName = eve.target.elements.userName.value;
        var userPassword = eve.target.elements.userPassword.value;
        if (!userName || !userPassword)
            throw new Error("userName or password is missing");
        // if (!userPassword) throw new Error("password is missing");
        var addUser = { userName: userName, userPassword: userPassword };
        fetch("/api/users/register-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data:", data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// ------------------------------
function handleUserLogin(eve) {
    try {
        eve.preventDefault();
        var userName = eve.target.elements.userName.value;
        var userPassword = eve.target.elements.userPassword.value;
        if (!userName || !userPassword)
            throw new Error("userName or password is missing");
        // if (!userPassword) throw new Error("password is missing");
        var addUser = { userName: userName, userPassword: userPassword };
        fetch("/api/users/login-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data:", data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// ------------------------------
function handleShowUser(eve) {
    try {
        var response = yield fetch("/api/users/get-database-user");
        var data = yield response.json();
        console.log("data", data);
        //     const { userDB } = data;
        //     const userHTML = document.querySelector("#userName") as HTMLDivElement;
        //     if (!userDB) throw new Error("didnt find user in DB");
        //     if (!userHTML) throw new Error("No user element on DOM");
        //     userHTML.innerHTML = userDB.name;
        //     // userHTML.innerText = userDB.name;
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }
    }
    //     const { userDB } = data;
    //     const userHTML = document.querySelector("#userName") as HTMLDivElement;
    //     if (!userDB) throw new Error("didnt find user in DB");
    //     if (!userHTML) throw new Error("No user element on DOM");
    //     userHTML.innerHTML = userDB.name;
    //     // userHTML.innerText = userDB.name;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    finally {
    }
    //     const { userDB } = data;
    //     const userHTML = document.querySelector("#userName") as HTMLDivElement;
    //     if (!userDB) throw new Error("didnt find user in DB");
    //     if (!userHTML) throw new Error("No user element on DOM");
    //     userHTML.innerHTML = userDB.name;
    //     // userHTML.innerText = userDB.name;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
}
//     const { userDB } = data;
//     const userHTML = document.querySelector("#userName") as HTMLDivElement;
//     if (!userDB) throw new Error("didnt find user in DB");
//     if (!userHTML) throw new Error("No user element on DOM");
//     userHTML.innerHTML = userDB.name;
//     // userHTML.innerText = userDB.name;
//   } catch (error) {
//     console.error(error);
//   }
// }
