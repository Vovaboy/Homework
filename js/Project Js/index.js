

    let mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    document.body.appendChild(mainContainer);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
    for (const user of usersArray) {
    let userBox = document.createElement('div');
    userBox.classList.add('userBox');
    let userId = document.createElement('h2');
    userId.innerText = `user id - ${user.id}`;
    let userName = document.createElement('h1');
    userName.innerText = `${user.name}`;
    let linkDetails = document.createElement('a');
    linkDetails.innerText = 'Go to user details...';
    linkDetails.classList.add('link');

    linkDetails.onclick = () => {
    history.pushState(`${user.id}`, 'userId');
    location.href = `user-details.html?Id=${user.id}`;
}

    mainContainer.appendChild(userBox);
    userBox.append(userId, userName, linkDetails)
}
})


