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
        var renderHtml = users
            .map(function (user) {
            return "<div>\n              <img src=\"" + user.src + "\" alt=\"" + user.name + "\">\n              <p contenteditable oninput=\"hendelUpdate(event,'" + user._id + "')\">" + user.name + "</p>\n              <button onclick=\"hendelDeleteUser('" + user._id + "')\">Delete<button>\n            </div>";
        })
            .join(" ");
        // console.log(13719283)
        renderuser.innerHTML = renderHtml;
    }
    catch (error) {
        console.log(error);
    }
}
