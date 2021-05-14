function populateDropDriveLetters() {
  var strDriveLetter;
  var arrDriveLetter = new Array();
  strDriveLetter = " ,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".toUpperCase();
  arrDriveLetter = strDriveLetter.split(",");
  for(i=0; i<arrDriveLetter.length; i++) {
    arrDriveLetter[i] = arrDriveLetter[i] != " " ? arrDriveLetter[i] + ":" : "";
  }
  populateDropDown("share_letter","shared",arrDriveLetter,arrDriveLetter);
}
createTag("li","share",actionsselect);
function aClick_Share() {aClick('n','share');}

document.getElementById("share").onclick=aClick_Share;
document.getElementById("share").style.cursor="hand";
strHTML="<input type='radio' name='n' value='share'>Подключить сетевой диск\n<ul>";
strHTML+="	    <li>Путь к сетевой папке <br /><input type='text' name='share_path'></li>";
strHTML+="      <li id='shared\'>Буква диска<br /></li>";
strHTML+="</ul>";
document.getElementById("share").innerHTML=strHTML;

populateDropDriveLetters();

function makeActionshare(){
  var share_path = document.getElementsByName("share_path")[0].value;
  var share_letter = document.getElementsByName("share_letter")[0].value;
  if (share_path.length>0 && share_letter.length>1) {
    var strFunction = "mapNetworkDrive";
    var strDescription = "Подключить сетевую папку <b>"+share_path+"</b> как сетевой диск <b>"+share_letter+"</b>";
    var strCallFunction = 'strResult = mapNetworkDrive("'+share_letter+'","'+share_path+'")\n';
  }
  addAction(strCallFunction,strDescription,strFunction);
}
