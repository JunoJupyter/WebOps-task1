let elem1 = document.querySelector('#btn1');
elem1.addEventListener('click',function(e){
    console.log("Button 1 clicked");
    document.querySelector('.heading').innerHTML = "<span>You've clicked button-1<span>";
});

let elem2 = document.querySelector('#btn2');
elem2.addEventListener('click',function(e){
    console.log("Button 2 clicked");
    document.querySelector('.heading').innerHTML = "<span>You've clicked button-2<span>";
});
