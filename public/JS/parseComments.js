document.getElementById('getComments').addEventListener('click', fetchUsers);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let response = '';
            let count = 9;
            let id_start =  getRandomInt(250)
            for (let i = 0; i < count; i++) {


                response += `<div class="block1">
                                    
                                        <ul>
                                            <p> <b>Name</b>: ${data[id_start].name}</p>
                                            <p> <b>Email</b>: ${data[id_start].email} </p>
                                            <p> <b>Comment</b>: ${data[id_start].body} </p>
                                        </ul>
                                    </div>`;
                id_start++;
            }

            document.getElementById("usersList").innerHTML = response;
        });
}