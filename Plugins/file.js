createTag("li","file",actionsselect);
function aClick_File() {aClick('n','file');}

document.getElementById("file").onclick=aClick_File;
document.getElementById("file").style.cursor="hand";

strHTML="<input type='radio' name='n' value='file'>����������� ����\n<ul>";
strHTML+="      <li>����-��������<br /><input type='text' name='file_src' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a></li>";
strHTML+="      <li>����(��� �����)-����������<br /><input type='text' name='file_dst' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a></li>";
strHTML+="    </ul>";
document.getElementById("file").innerHTML=strHTML;

function makeActionfile(){
  var file_src = document.getElementsByName("file_src")[0].value;
  var file_dst = document.getElementsByName("file_dst")[0].value;   
  if (file_src.length>0 && file_dst.length>0) {
    var strFunction = "copyFiles";
    var strDescription = "����������� ���� <b>"+file_src+"</b> � <b>"+file_dst+"</b>";  
    var strCallFunction = 'strResult = copyFiles("'+file_src+'","'+file_dst+'","True")\n';
  }
  addAction(strCallFunction,strDescription,strFunction);
}
