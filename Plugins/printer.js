createTag("li","printer",actionsselect);

function aClick_Printer() {aClick('n','printer');}

function makeActionprinter(){
  var printer_path = document.getElementsByName("printer_path")[0].value;
  var printer_port = document.getElementsByName("printer_port")[0].value;
  var printer_default = document.getElementsByName("printer_default")[0].value; 
  if (printer_path.length>0) {
    var strFunction = "mapPrinter";
    var strDescription = "���������� ������� <b>"+printer_path+"</b>";  
    var strCallFunction = 'strResult = mapPrinter("'+printer_path+'","'+printer_port+'",'+printer_default+')\n';
  }
  addAction(strCallFunction,strDescription,strFunction);	 
}
document.getElementById("printer").onclick=aClick_Printer;
document.getElementById("printer").style.cursor="hand";
strHTML="<input type='radio' name='n' value='printer'>���������� ������� �������\n<ul>";
strHTML+="	    <li>���������� ������� ��� ��������� ����<br /><input type='text' name='printer_path'>";
strHTML+="			<select name='printer_port' size='1' style='width:50px;'>";
strHTML+="        <option value=''>���</option>";
strHTML+="        <option value='LPT1:'>LPT1:</option>";
strHTML+="        <option value='LPT2:'>LPT2:</option>";
strHTML+="        <option value='LPT3:'>LPT3:</option></select></li>";
strHTML+="      <li>������������ �� ���������<br /><select name='printer_default' style='width:50px;'>";
strHTML+="         <option value='False'>���</option>";
strHTML+="         <option value='True'>��</option></select></li>";
strHTML+="</ul>";
document.getElementById("printer").innerHTML=strHTML;
  
    
