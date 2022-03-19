
    // На странице user-details.html:
    // 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
    // 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
    // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
    // которая имеет детальную информацию про текущий пост.

    let userContainer = document.createElement('div');
    userContainer.classList.add('usersContainer');

    let idNumber = location.search.split('=')[1];

    fetch(`https://jsonplaceholder.typicode.com/users/${idNumber}`)
    .then(response => response.json())
    .then(user => {
    let title = document.createElement('h1');
    title.innerText = `${user.name} (${user.username})`;
    let userInfoBox = document.createElement('div');
    userInfoBox.classList.add('userInfoBox');
    let userContacts = document.createElement('div');
    let email = document.createElement('h2');
    email.innerText = `email: ${user.email}`;
    let address = document.createElement('h2');
    address.innerText = `Address: ${user.address.city}, ${user.address.street}, ${user.address.suite},
            zipcode: ${user.address.zipcode}. Geo: lat ${user.address.geo.lat}, lng ${user.address.geo.lng}`;
    let phone = document.createElement('h2');
    phone.innerText = `Phone number: ${user.phone}`;
    let website = document.createElement('h2');
    website.innerText = `Website: ${user.website}`;

    let companyInfoBox = document.createElement('div');
    companyInfoBox.classList.add('companyInfoBox');
    let companyName = document.createElement('h2');
    companyName.innerText = `Company: ${user.company.name}`;
    let companyCatchPhrase = document.createElement('h3');
    companyCatchPhrase.innerText = `Company catch phrase: ${user.company.catchPhrase}`;
    let companyBs = document.createElement('h3');
    companyBs.innerText = `Company Bs: ${user.company.bs}`;

    let btnPosts = document.createElement('button');
    btnPosts.innerText = 'post of current user';
    btnPosts.classList.add('btnPosts');

    btnPosts.onclick = () => {
    btnPosts.disabled = true;
    let postsBox = document.createElement('div');
    postsBox.classList.add('postsBox');
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(postsArray => {
    for (const post of postsArray) {
    let postCard = document.createElement('div');
    postCard.classList.add('postCard');
    let postTitle = document.createElement('h2');
    postTitle.innerText = `${post.title}`;
    let btnPostDetails = document.createElement('button');
    btnPostDetails.classList.add('btnPostDetails');
    btnPostDetails.innerText = 'Show details';

    btnPostDetails.onclick = () => {
    history.pushState(`${post.id}`, `postId`);
    location.href = `post-details.html?PostId=${post.id}`
}

    postsBox.appendChild(postCard);
    postCard.append(postTitle, btnPostDetails)
}
})

    userContainer.append(postsBox)
}

    let btnBack = document.createElement('button');
    btnBack.classList.add('btnBack');
    btnBack.innerText = 'Back to users';

    btnBack.onclick = () => {
    history.back()
}

    userContainer.append(title, userInfoBox, btnPosts, btnBack);
    userInfoBox.append(userContacts, companyInfoBox);
    userContacts.append(email, address, phone, website);
    companyInfoBox.append(companyName, companyCatchPhrase, companyBs)
})

    document.body.appendChild(userContainer);

