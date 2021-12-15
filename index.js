const arr=["inp","mydiv1","mydiv2","mydiv3","mydiv4","mydiv5","mydiv6","mydiv7","mydiv8","mydiv9","mydiv0"];
const arr1=["mydiv1","mydiv2","mydiv3","mydiv4","mydiv5","mydiv6","mydiv7","mydiv8","mydiv9","mydiv0"];
var arr2=[1,2,3,4,5,6,7,8,9,0];
var c=0;
const el=document.getElementById("inp");
//
const bt1=document.getElementById(arr1[0]);
bt1.addEventListener('click',()=>{
    console.log(c);
    if(el.value==='')
    c+=parseInt(arr2[0]);
    else
    c+=parseInt(arr2[0]);
})
const bt2=document.getElementById(arr1[1]);
bt2.addEventListener('click',()=>{
    console.log(c);
    if(el.value==='')
    c+=parseInt(arr2[1]);
    else
    c+=parseInt(arr2[1]);
})
const bt3=document.getElementById(arr1[2]);
bt3.addEventListener('click',()=>{
    console.log(c);
    if(el.value==='')
    c+=parseInt(arr2[2]);
    else
    c+=parseInt(arr2[2]); 
})
//
function fuc1()
{
  document.getElementById("inp").name=c;
}
function fun3()
{
  document.getElementById("mydiv1").style.backgroundImage="bg.jpg";
}
for(var i=0;i<11;i++)
{
dragElement(document.getElementById(arr[i]));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
   
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
   
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
}
//