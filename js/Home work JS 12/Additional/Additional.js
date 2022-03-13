// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//

let container = document.createElement('div');

container.classList.add('container');

document.body.appendChild(container);

fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())

    .then(users => {

        for (let user of users) {

            let userBlock = document.createElement('div');

            container.appendChild(userBlock);

            let userInfo = document.createElement('div');

            userBlock.appendChild(userInfo);

            userInfo.classList.add('user');


            let userName = document.createElement('h1');

            userInfo.appendChild(userName);

            userName.innerText = user.name + ' ' + user.username;


            let email = document.createElement('h2');

            userInfo.appendChild(email);

            email.innerText = 'Email: ';

            let emailSpan = document.createElement('span');

            email.appendChild(emailSpan);

            emailSpan.innerText = user.email;


            let phone = document.createElement('h2');

            userInfo.appendChild(phone);

            phone.innerText = 'Phone: ';

            let phoneSpan = document.createElement('span');

            phone.appendChild(phoneSpan);

            phoneSpan.innerText = user.phone;


            let address = document.createElement('h2');

            userInfo.appendChild(address);

            address.innerText = 'Address: ';

            let addressSpan = document.createElement('span');

            address.appendChild(addressSpan);

            addressSpan.innerText = user.address.city + ', ' + user.address.street + ', ' + user.address.suite;


            let website = document.createElement('h2');

            userInfo.appendChild(website);

            website.innerText = 'Website: ';

            let websiteSpan = document.createElement('span');

            websiteSpan.innerText = user.website;

            website.appendChild(websiteSpan);


            let userButtonBlock = document.createElement('div');

            userButtonBlock.classList.add('button-block');

            userInfo.appendChild(userButtonBlock);

            let userButton = document.createElement('button');

            userButtonBlock.appendChild(userButton);

            userButton.innerText = 'Posts';

            userButton.onclick = () => {

                userButton.hidden = true;

                let postsBlock = document.createElement('div');

                userBlock.appendChild(postsBlock);

                postsBlock.classList.add('posts');


                let h3 = document.createElement('h3');

                h3.innerText = 'Posts';

                postsBlock.appendChild(h3);


                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)

                    .then(response => response.json())

                    .then(posts => {

                        for (let post of posts) {

                            let postBlock = document.createElement('div');

                            postsBlock.appendChild(postBlock);


                            let postInfo = document.createElement('div');

                            postBlock.appendChild(postInfo);

                            postInfo.classList.add('post');


                            let postTitle = document.createElement('h2');

                            postTitle.innerText = post.title;

                            postInfo.appendChild(postTitle);


                            let postBody = document.createElement('p');

                            postBody.innerText = post.body;

                            postInfo.appendChild(postBody);


                            let postButtonBlock = document.createElement('div');

                            postButtonBlock.classList.add('button-block');

                            postInfo.appendChild(postButtonBlock);

                            let postButton = document.createElement('button');

                            postButtonBlock.appendChild(postButton);
                            postButton.innerText = 'Comments';


                            postButton.onclick = () => {

                                postButton.hidden = true;

                                let commentsBlock = document.createElement('div');

                                postBlock.appendChild(commentsBlock);

                                commentsBlock.classList.add('comments');


                                let h3 = document.createElement('h3');

                                h3.innerText = 'Comments';

                                commentsBlock.appendChild(h3);


                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)

                                    .then(response => response.json())

                                    .then(comments => {

                                        for (let comment of comments) {

                                            let commentBlock = document.createElement('div');

                                            commentsBlock.appendChild(commentBlock);


                                            let commentInfo = document.createElement('div');

                                            commentBlock.appendChild(commentInfo);

                                            commentInfo.classList.add('comment');


                                            let commentName = document.createElement('h2');

                                            commentName.innerText = 'Name: ';

                                            commentInfo.appendChild(commentName);

                                            let commentNameSpan = document.createElement('span');

                                            commentName.appendChild(commentNameSpan);

                                            commentNameSpan.innerText = comment.name;


                                            let commentEmail = document.createElement('h2');

                                            commentEmail.innerText = 'Email: ';

                                            commentInfo.appendChild(commentEmail);

                                            let commentEmailSpan = document.createElement('span');

                                            commentEmail.appendChild(commentEmailSpan);

                                            commentEmailSpan.innerText = comment.email;


                                            let commentBody = document.createElement('p');

                                            commentInfo.appendChild(commentBody);

                                            commentBody.innerText = comment.body;


                                        }

                                    })

                            }

                        }

                    })

            }
        }
    })