
if(!!window.EventSource){

    var source = new EventSource('http://localhost:8080/');
}
source.onopen=function(event){
    console.log("connection sucess",this.readyState);
};
source.onmessage=function (event){
    console.log(event);
    var content = document.getElementById("content");
    content.innerText=event.data;
};
source.onerror = function (erro){

};

// clearTimeout(time);
