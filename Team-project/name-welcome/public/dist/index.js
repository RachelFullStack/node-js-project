var renderuser = document.querySelector(".renderuser");
function hendelget() {
    try {
        fetch("/api/user-get")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            try {
                if (!data)
                    throw new Error("no data");
                console.log(data);
                henelrender(data.users);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function henelrender(users) {
    try {
        if (!users)
            throw new Error("no data");
        var renderHtml = users.map(function (user) {
            return "<div>\n              <img src=\"" + user.src + "\" alt=\"" + user.name + "\">\n              <p contenteditable oninput=\"hendelUpdate(event,'" + user._id + "')\">" + user.name + "</p>\n              <button onclick=\"hendelDeleteUser('" + user._id + "')\">Delete<button>\n            </div>";
        }).join(" ");
        renderuser.innerHTML = renderHtml;
    }
    catch (error) {
        console.log(error);
    }
}
function hendelAddUser(evt) {
    evt.preventDefault();
    try {
        var name = evt.target.elements.name.value;
        var src = evt.target.elements.src.value;
        if (!name)
            throw new Error("no name");
        if (!src)
            throw new Error("no src");
        console.log(name);
        console.log(src);
        var newuser = { name: name, src: src };
        fetch("/api/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json"
            },
            body: JSON.stringify(newuser)
        });
    }
    catch (error) {
        console.log(error);
    }
}
function hendelUpdate(event, uid) {
    try {
        console.log(uid);
        console.log(event.target.textContent);
        var name = event.target.textContent;
        fetch("/api/update-user", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, uid: uid })
        });
    }
    catch (error) {
        console.log(error);
    }
}
function hendelDeleteUser(uid) {
    try {
        console.log("uidaaa", uid);
        fetch("/api/Delete-user", {
            method: "Delete",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            henelrender(users);
        });
    }
    catch (error) {
        console.log(error);
    }
}
