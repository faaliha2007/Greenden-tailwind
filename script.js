var resnav = document.getElementById("resnav")
var navicon = document.getElementById("navicon")
var closetag = document.getElementById("closetag")

navicon.addEventListener("click",function(){
    resnav.style.right= 0
})

closetag.addEventListener("click",function(){
    resnav.style.right = "-50%"
})