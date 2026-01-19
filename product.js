var resnav = document.getElementById("resnav")
var navicon = document.getElementById("navicon")
var closetag = document.getElementById("closetag")

navicon.addEventListener("click",function(){
    resnav.style.right= "0"
})

closetag.addEventListener("click",function(){
    resnav.style.right = "-50%"
})

var productcontainer = document.getElementById("product-container")
var search =  document.getElementById("search")
var productlist = productcontainer.querySelectorAll(".product")

search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count++)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display= "none"
        }
        else
        {
            productlist[count].style.display= "block"
        }
    }
})