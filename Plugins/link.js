createTag("li","link",actionsselect);
function aClick_Link() {aClick('n','link');}

document.getElementById("link").onclick=aClick_Link;
document.getElementById("link").style.cursor="hand";

strHTML="<input type='radio' name='n' value='link'>��������� ����� �� ������� �����";
strHTML+="    <ul>";
strHTML+="    <li onclick='javascript:aClick(\"link_method\",\"create\");' style='cursor:hand;'>";
strHTML+="      <input type='radio' name='link_method' value='create' checked > �������";
strHTML+="      <ul>";
strHTML+="        <li onclick='javascript:aClick(\"link_create\",\"program\");' style='cursor:hand;'>";
strHTML+="          <input type='radio' name='link_create' value='program' checked> � ���������";
strHTML+="          <ul>";
strHTML+="            <li>��� ������<br />";
strHTML+="              <input type='text' name='link_create_program_name'>";
strHTML+="            </li>          ";
strHTML+="            <li>���� � ���������<br />";
strHTML+="              <input type='text' name='link_create_program_target' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a>";
strHTML+="            </li>";
strHTML+="            <li>���� � ������<br />";
strHTML+="              <input type='text' name='link_create_program_icon' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a>";
strHTML+="            </li>";
strHTML+="            <li>������� �����<br />";
strHTML+="              <input type='text' name='link_create_program_workdir' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a>";
strHTML+="            </li>";
strHTML+="          </ul>";
strHTML+="        </li>";
strHTML+="        <li onclick='javascript:aClick(\"link_create\",\"folder\");' style='cursor:hand;' id='link_create_folder'>";
strHTML+="          <input type='radio' name='link_create' value='folder'> � �����";
strHTML+="          <ul>";
strHTML+="            <li>��� ������<br />";
strHTML+="              <input type='text' name='link_create_folder_name'>";
strHTML+="            </li>          ";
strHTML+="            <li>���� � �����<br />";
strHTML+="              <input type='text' name='link_create_folder_target' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a>";
strHTML+="            </li>";
strHTML+="            <li>���� � ������<br />";
strHTML+="              <input type='text' name='link_create_folder_icon' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a>";
strHTML+="            </li>";
strHTML+="          </ul>";
strHTML+="        </li>";
strHTML+="      </ul>";
strHTML+="    </li> ";
strHTML+="    <li onclick='javascript:aClick(\"link_method\",\"copy\");' style='cursor:hand;'>";
strHTML+="      <input type='radio' name='link_method' value='copy'> ����������� �������";
strHTML+="      <ul>";
strHTML+="        <li>����-��������<br /><input type='text' name='link_copy_src' onfocus='javascript:viewInsertButton(this)' onblur='javascript:hideInsertButton()'/><a class='buttoninsert' onmouseover='javascript:viewVariablesList(this)'> �������� ����������</a></li>";
strHTML+="        <!--li>����-����������<br /><input type='text' name='link_copy_dst'></li-->";
strHTML+="      </ul>";
strHTML+="    </li>";
strHTML+="  </ul>";


document.getElementById("link").innerHTML=strHTML;


function makeActionlink(){
// �����
  var link_method = getCheckedValueByName("link_method");  
  var link_create = getCheckedValueByName("link_create");
  var link_create_program_name = document.getElementsByName("link_create_program_name")[0].value;
  var link_create_program_target = document.getElementsByName("link_create_program_target")[0].value;
  var link_create_program_icon = document.getElementsByName("link_create_program_icon")[0].value;
  var link_create_program_workdir = document.getElementsByName("link_create_program_workdir")[0].value;
// ����� ������� � ���������  
  if (link_method == "create" && link_create == "program" && link_create_program_name.length>0 && link_create_program_target.length>0 && link_create_program_icon.length>0 && link_create_program_workdir.length>0) {
    var strFunction = "createDesktopLink";
    var strDescription = "������� �� ������� ����� ����� � ��������� <b>"+link_create_program_name+"</b>";
    var strCallFunction = 'strResult = createDesktopLink("'+link_create_program_name+'","'+link_create_program_target+'","'+link_create_program_workdir+'","'+link_create_program_icon+'")\n';
  }
  var link_create_folder_name = document.getElementsByName("link_create_folder_name")[0].value;  
  var link_create_folder_target = document.getElementsByName("link_create_folder_target")[0].value;
  var link_create_folder_icon = document.getElementsByName("link_create_folder_icon")[0].value;  
// ����� ������� � �����  
  if (link_method == "create" && link_create == "folder" && link_create_folder_name.length>0 && link_create_folder_target.length>0 && link_create_folder_icon.length>0) {
    var strFunction = "createDesktopLink";
    var strDescription = "������� �� ������� ����� ����� � ����� <b>"+link_create_folder_name+"</b>";  
    var strCallFunction = 'strResult = createDesktopLink("'+link_create_folder_name+'","'+link_create_folder_target+'","","'+link_create_folder_icon+'")\n';
  }
  var link_copy_src = document.getElementsByName("link_copy_src")[0].value;
//  var link_copy_dst = document.getElementsByName("link_copy_dst")[0].value;   
// ���������� �����
  if (link_method == "copy" && link_copy_src.length>0) {
    var strFunction = "copyFiles";
    var strDescription = "����������� �������������� ����� <b>"+link_copy_src+"</b> �� ������� ����";  
    var strCallFunction = 'Set objShell = WScript.CreateObject("WScript.Shell")\nstrDesktop = objShell.SpecialFolders("Desktop")\nstrResult = copyFiles("'+link_copy_src+'",strDesktop,"True")\n';
  }
  addAction(strCallFunction,strDescription,strFunction);
}
