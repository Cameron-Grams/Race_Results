




// route needs to go to /api/race with the year as a parameter in order to return the Runners array... 


function startSearch(){
    console.log( "starting search..." );
    //  need to configure the GET request... 
}














//  =============== variables and helper functions
function readyState(){
    var searchButton = document.getElementById( 'startSearch' );
    searchButton.onclick = startSearch;
}


window.onload = readyState();