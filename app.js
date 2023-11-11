let allButtons = document.getElementsByTagName("button");
let searchButton = "search";

for (let b = 0; b < allButtons.length; b++) {
    if (allButtons[b].classList.contains(searchButton)) {
        let target = allButtons[b];

        target.addEventListener("click", function(){
            let url = "http://localhost/info2180-lab4/superheroes.php";

            fetch(url)
                .then(function (response){
                    if (!response.ok){
                        throw new Error("Response was not ok");
                    }
                    return response.text();
                })
                .then(function (data){
                    alert(data);
                })
                .catch (function (error){
                    console.error("Fetch error", error);
                })
         })
    }    
}


