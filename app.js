document.addEventListener("DOMContentLoaded", function() {
    let user_input=document.querySelector("input");
    let form = document.querySelector("form");
    let result= document.querySelector("#result");

    form.addEventListener("click", function(event){

        event.preventDefault();
        let input = user_input.value.trim();
        
        let url = `/superheroes.php?name=${input}`
        fetch(url)
        .then(res => {if (res.ok){return res.text()}
        else{return Promise.reject('Error occurred')}})
        .then(data =>{
            result.innerHTML = data
        }).catch(error => {
                console.log('Error fetching data:', error);
            });
    });

});




