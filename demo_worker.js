

function timedCount() {
    
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(y=>y.json())

    .then(y=> {
        postMessage(y.map((p)=> {

                return `<div>${p.title}</div>`
        }).join(" "));
    })

   
    setTimeout("timedCount()", 500);
}

timedCount();