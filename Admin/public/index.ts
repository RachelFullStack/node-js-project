let renderuser = document.querySelector(".renderuser") as HTMLDivElement;
function hendelget() {
  try {
    fetch("/api/user-get")
      .then((res) => res.json())
      .then((data) => {
        try {
          if (!data) throw new Error("no data");
          console.log(data);
          henelrender(data.users);
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

function henelrender(users: Array<User>) {
  try {
    if (!users) throw new Error("no data");
    let renderHtml = users
      .map((user) => {
        return `<div>
              <img src="${user.src}" alt="${user.name}">
              <p contenteditable oninput="hendelUpdate(event,'${user._id}')">${user.name}</p>
              <button onclick="hendelDeleteUser('${user._id}')">Delete<button>
            </div>`;
      })
      .join(" ");

    // console.log(13719283)
    renderuser.innerHTML = renderHtml;
  } catch (error) {
    console.log(error);
  }
}
