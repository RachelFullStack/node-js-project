let renderUser = document.querySelector("#render-user") as HTMLDivElement;
function handelGet() {
  try {
    fetch("/api/user-get")
      .then((res) => res.json())
      .then((data) => {
        try {
          if (!data) throw new Error("no data");
          console.log(data);
          handelRender(data.users);
        } catch (error) {
          console.log(error);
        }
      });
  } catch (error) {
    console.log(error);
  }
}

interface User {
  name: string;
  src: string;
  _id: string;
}

function handelRender(users: Array<User>) {
  try {
    if (!users) throw new Error("no data");
    let renderHtml = users
      .map((user) => {
        return `<div>
              <img src="${user.src}" alt="${user.name}">
              <p contentEditable oninput="handelUpdate(event,'${user._id}')">${user.name}</p>
              <button onclick="handelDeleteUser('${user._id}')">Delete<button>
            </div>`;
      })
      .join(" ");

    // console.log(13719283)
    renderUser.innerHTML = renderHtml;
  } catch (error) {
    console.log(error);
  }
}
