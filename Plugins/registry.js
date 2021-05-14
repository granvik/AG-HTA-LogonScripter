loadLib("convertRegfileToVbs.js");
createTag("li","registry",actionsselect);
function aClick_Registry() {aClick('n','registry');}

document.getElementById("registry").onclick=aClick_Registry;
document.getElementById("registry").style.cursor="hand";

strHTML="<input type='radio' name='n' value='registry'>Внести изменения в реестр (строго в формате файла реестра)\n<ul>";
strHTML+="<textarea name='registry_keys'></textarea>";
document.getElementById("registry").innerHTML=strHTML;

function makeActionregistry(){
  var registry_keys = document.getElementsByName("registry_keys")[0].value; 
  if (registry_keys.length>0) {
    var strFunction = "";
    var strDescription = "Внести изменения в реестр";
    var strCallFunction = convertRegfileToVbs(registry_keys);
  }
	if (strCallFunction != "") {
    addAction(strCallFunction,strDescription,strFunction);
  }
}
