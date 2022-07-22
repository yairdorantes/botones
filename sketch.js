var btn_rojo, btn_verde;
var r=0
var g=0
var b=0
function setup(){
createCanvas(400,400)
btn_rojo=createButton("rojo")
btn_rojo.position(100,50)
btn_rojo.mousePressed(rojo_bg)
}
function drawn(){
background(r,g,b)

}
function cafe_bg(){
document.querySelector("body").style.background="brown"

}
function negro_bg(){
    document.querySelector("body").style.background="black"
    
    }
function azul_bg(){
document.querySelector("body").style.background="blue"

}
function amarillo_bg(){
    document.querySelector("body").style.background="yellow"
    
    }
    function rosaMaria_bg(){
        document.querySelector("body").style.background="pink"
        
        
    }
    function otro_bg(){
        document.querySelector("body").style.background="orange"
        
        }
                