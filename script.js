function showBarite(){

document.getElementById("viewer").innerHTML = `
<iframe
title="Barite"
frameborder="0"
allowfullscreen
src="https://sketchfab.com/models/db6d2fc5cecb41cb818b60344c3a6604/embed">
</iframe>
`

document.getElementById("infoPanel").style.display="block"

document.getElementById("infoPanel").innerHTML = `
<h3>Барит (Barite)</h3>

<b>Химийн томьёо:</b> BaSO₄ <br>
<b>Ангилал:</b> Сульфат эрдэс <br>
<b>Өнгө:</b> Цагаан, шар, саарал <br>
<b>Хатуулаг (Mohs):</b> 3 – 3.5 <br>
<b>Нягт:</b> 4.5 г/см³ <br>
<b>Талст бүтэц:</b> Орторомбик <br>

<b>Хэрэглээ:</b>
<ul>
<li>Газрын тосны өрөмдлөгийн шавар</li>
<li>Будаг, лак үйлдвэрлэл</li>
<li>Цацраг хамгаалалтын материал</li>
<li>Химийн үйлдвэрлэл</li>
</ul>
`

}


function showPotash(){

document.getElementById("viewer").innerHTML = `
<iframe
title="Sylvite"
frameborder="0"
allowfullscreen
src="https://sketchfab.com/models/0230737ef6324d588cb4a62d064ef5b9/embed?ui_infos=0&ui_controls=0">
</iframe>
`

document.getElementById("infoPanel").style.display="block"

document.getElementById("infoPanel").innerHTML = `
<h3>Калийн давс (Sylvite)</h3>

<b>Химийн томьёо:</b> KCl <br>
<b>Ангилал:</b> Галогенид эрдэс <br>
<b>Өнгө:</b> Цагаан, ягаан, улаан <br>
<b>Хатуулаг (Mohs):</b> 2 – 2.5 <br>
<b>Нягт:</b> 1.99 г/см³ <br>
<b>Талст бүтэц:</b> Кубик <br>

<b>Хэрэглээ:</b>
<ul>
<li>Хөдөө аж ахуйн бордоо</li>
<li>Химийн үйлдвэрлэл</li>
<li>Шил, саван үйлдвэрлэл</li>
<li>Эмийн үйлдвэрлэл</li>
</ul>
`


}

window.onload = function(){

const hash = window.location.hash

// fullscreen mode
function fullscreenModel(){
document.getElementById("title").style.display = "none"
document.querySelector(".buttons").style.display = "none"
document.getElementById("viewer").style.width = "100%"
document.getElementById("viewer").style.height = "100vh"
}

if(hash === "#barite"){
showBarite()
fullscreenModel()
}

else if(hash === "#potash"){
showPotash()
fullscreenModel()
}

else{
showBarite()
}

}
