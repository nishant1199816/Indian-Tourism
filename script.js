let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

// element.addEventListener(event, function, useCapture);

// element: The DOM element to which you want to attach the event handler.
// event: A string that specifies the name of the event to listen for (e.g., "click", "mouseover", "keydown").
// function: The function to be called when the event occurs. This function is also known as the event handler or event listener.
// useCapture (optional): A boolean value that specifies whether the event should be captured during the capturing phase (if `true`) or the bubbling phase (if `false`). The default is `false.`

next.addEventListener('click', function(){
let items= document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items= document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length-1])
    })



  
// function dosomething(){
//     document.getElementById("getting").innerHTML="";
// } 