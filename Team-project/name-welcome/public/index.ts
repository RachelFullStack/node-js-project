interface User {
  name: string;
  src: string;
  _id: string;
}
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

    renderuser.innerHTML = renderHtml;
  } catch (error) {
    console.log(error);
  }
}

function hendelAddUser(evt) {
  evt.preventDefault();
  try {
    let name = evt.target.elements.name.value;
    let src = evt.target.elements.src.value;
    if (!name) throw new Error("no name");
    if (!src) throw new Error("no src");
    console.log(name);
    console.log(src);
    const newuser = { name: name, src: src };
    fetch("/api/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
  } catch (error) {
    console.log(error);
  }
}

function hendelUpdate(event, uid) {
  try {
    console.log(uid);
    console.log(event.target.textContent);
    const name = event.target.textContent;
    fetch("/api/update-user", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, uid: uid }),
    });
  } catch (error) {
    console.log(error);
  }
}

function hendelDeleteUser(uid: string) {
  try {
    console.log("uidaaa", uid);
    fetch("/api/Delete-user", {
      method: "Delete",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    })
      .then((res) => res.json())
      .then(({ users }) => {
        henelrender(users);
      });
  } catch (error) {
    console.log(error);
  }
}
