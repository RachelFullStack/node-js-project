var renderUser = document.querySelector("#render-user");
function handelGet() {
    try {
        fetch("/api/user-get")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            try {
                if (!data)
                    throw new Error("no data");
                console.log(data);
                handelRender(data.users);
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
function handelRender(users) {
    try {
        if (!users)
            throw new Error("no data");
        var renderHtml = users
            .map(function (user) {
            return "<div>\n              <img src=\"" + user.src + "\" alt=\"" + user.name + "\">\n              <p contentEditable oninput=\"handelUpdate(event,'" + user._id + "')\">" + user.name + "</p>\n              <button onclick=\"handelDeleteUser('" + user._id + "')\">Delete<button>\n            </div>";
        })
            .join(" ");
        // console.log(13719283)
        renderUser.innerHTML = renderHtml;
    }
    catch (error) {
        console.log(error);
    }
}
