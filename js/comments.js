function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComments(data))
}
loadComments();
function displayComments(comments) {
    // console.log(comments)
    const commentContainer = document.getElementById('comment-container');
    for (const comment of comments) {
        // console.log(comment)
        const div = document.createElement('div');
        div.classList.add('comment-box');
        div.innerHTML = `
        <div onclick=loadDetail('${comment.id}')>
             <h3> Email id: ${comment.email}</h3>
             <p> comment: ${comment.body}
        </div>`;
        commentContainer.appendChild(div);
    }
}
//load comment detail
loadDetail = commentId => {
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data))
}
//show comment detail
const showDetail = comment => {
    const showDetailBox = document.getElementById('show-detail');
    showDetailBox.innerHTML = `
    <h1>${comment.name}</h1>
    `;
}



