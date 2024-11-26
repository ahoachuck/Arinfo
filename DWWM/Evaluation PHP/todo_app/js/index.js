const todoDeleteList = document.getElementsByName("todoDelete");
const todoMarkList = document.getElementsByName("todoMark");

function request(endpoint, id) {
    //const xhttp = new XMLHttpRequest();
    //xhttp.open("POST", endpoint);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhttp.onload = function () {
    //    document.location.href = document.location.href + " ";
    //}
    //xhttp.send(`id=${id}`);
}

todoDeleteList.forEach((elem) => {
    elem.onclick = () => {
        request('./api/delete.php', elem.dataset.todo);
    };
});

todoMarkList.forEach((elem) => {
    elem.onclick = () => {
        request('./api/mark.php', elem.dataset.todo);
    };
});