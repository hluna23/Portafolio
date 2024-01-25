//executar funtion no evento click|| ejecutar funcion en ele evento click//

document.getElementById("boneco").addEventListener("click", open_close_menu)


 var side_menu= document.getElementById("menu_side")
 var boneco = document.getElementById("boneco")
 var body = document.getElementById("body")
 

 //evento para ocultar e mostrar menu//

 function open_close_menu(){
    body.classList.toggle("body_move")
    side_menu.classList.toggle("men_side_move")
 }


 //comsumo de api de github//

 