const _name = document.getElementById("nameId");
const _age = document.getElementById("ageId");
const _params = new URLSearchParams(window.location.search);

setTimeout(() => {
    location.href = "../"
}, 5000);

/**/
const foundName = _params.get('name');
const foundAge = _params.get('age');
_name.textContent = foundName ? foundName : 'Unknown.'; 
_age.textContent = foundAge ? foundAge : 'Unknown.'; 