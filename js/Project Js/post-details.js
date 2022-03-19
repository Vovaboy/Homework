
    let mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    let postId = location.search.split('=')[1];

    let postInfoBox = document.createElement('div');
    postInfoBox.classList.add('postInfoBox');

    let commentsContainer = document.createElement('div');
    commentsContainer.classList.add('commentsContainer');

    document.body.appendChild(mainContainer);
    mainContainer.append(postInfoBox, commentsContainer);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
    let idLine = document.createElement('h4');
    idLine.innerText = `User ID - ${post.userId}, Post ID - ${post.id}`;
    let postTitle = document.createElement('h1');
    postTitle.innerText = `${post.title}`;
    let postBody = document.createElement('h3');
    postBody.innerText = `${post.body}`;
    let btnBack = document.createElement('button');
    btnBack.classList.add('btnBack');
    btnBack.innerText = 'Back to posts';

    btnBack.onclick = () => {
    history.back()
}

    postInfoBox.append(idLine, postTitle, postBody, btnBack)
})

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(commentsArray => {
    console.log(commentsArray);
    for (const comment of commentsArray) {
    let commentsBox = document.createElement('div');
    commentsBox.classList.add('commentsBox');
    let commentName = document.createElement('h2');
    commentName.innerText = `${comment.name}`;
    let commentEmail = document.createElement('h3');
    commentEmail.innerText = `(${comment.email})`;
    let commentBody = document.createElement('p');
    commentBody.innerText = `${comment.body}`;

    commentsContainer.appendChild(commentsBox);
    commentsBox.append(commentName, commentEmail, commentBody)
}
})

