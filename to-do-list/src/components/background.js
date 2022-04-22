var selectEl = document.getElementsByName(backgroundImage);
var html = document.querySelector('body');
html.style.backgroundRepeat = "no-repeat";
html.style.backgroundSize= "cover";
select.addEventListener('Change', background);
selectEl.onclick = function () {
    if(choice == 'floral'){
        html.style.backgroundImage = "url('background images/floral.jpg')";
    }
    else if(choice =="autum"){
        html.style.backgroundImage = "url('background images/autum.jpg')";
    }
    else if(choice =="nature"){
        html.style.backgroundImage = "url('images/nature.jpg')";
    }
    else if(choice =="san diego"){
        html.style.backgroundImage = "url('images/san diego.jpg')";
    }
    else if(choice =="sunset in the city"){
        html.style.backgroundImage = "url('images/sunset in the city.jpg')";
    }
    else if(choice =="wall with light"){
    html.style.backgroundImage = "url('images/wall with light.jpg')";
}
}