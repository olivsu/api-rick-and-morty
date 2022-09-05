fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(function(json){
            let container = document.querySelector('.container');
            json.results.map(function(results){
                container.innerHTML+=`
                <div class='card'> <img src=`+ results.image + `> 
                <strong> ` + results.name + `</strong><br>
                <span> ` + results.species + ` - ` + results.gender + `</span><br>
                <i> ` + results.status + `</i><br>
                </div>
                `;
            })
        })