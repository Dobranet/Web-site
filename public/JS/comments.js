let comments = [];
if (localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'))
}
showComments();

document.getElementById('comment-add').addEventListener('click', function(event){
    let commentName = document.getElementById('comment-name');


    let comment = {
        Text : commentName.value,
    }
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    showComments();
})

function showComments (){
    let commentField = document.getElementById('comments');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="block1">${item.Text}</p>`;
    });
    commentField.innerHTML = out;
}