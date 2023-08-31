var i=0;

function timedCount() {
   
    fetch("https://jsonplaceholder.typicode.com/photos").then(y=>y.json())
    .then(y=> {
        postMessage(y);
    })
    setTimeout("timedCount()", 500);
}

timedCount();