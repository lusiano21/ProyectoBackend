(function (){
    fetch('/api/sessions/me')
    .then(res => res.json())
    .then(data => console.log(data))
})();