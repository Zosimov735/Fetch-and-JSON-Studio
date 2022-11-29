// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response){
        response.json().then(function(json){
            const astronaut = json;
            console.log(astronaut)
            astronaut.sort((a,b)=> (a.hoursInSpace < b.hoursInSpace ? 1 : -1))
            function activeCheck(active){
                if (active){
                return `<span id="active" style="color: green">${astronaut[i].active}</span>`
            }    
            else{
                return `${astronaut[i].active}`
            }
        }
            
            const list = document.getElementById("container")
            for (var i = 0; i<astronaut.length; i++){
                list.innerHTML += `<div class="astronaut">
                <div class="bio">
                <h3>${astronaut[i].firstName} ${astronaut[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${astronaut[i].hoursInSpace}</li>
                <li>${activeCheck(astronaut[i].active)}</li>
                <li>Skills: ${astronaut[i].skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${astronaut[i].picture}">
                </div>`  
                activeCheck(i)  
            }
            list.innerHTML += `<div><h1>Astronaut Count: ${astronaut.length}</h1></div>`
            
            
            
        })
    })
    
})