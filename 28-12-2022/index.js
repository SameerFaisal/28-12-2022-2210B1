// function concat(){
//     let firstName=document.getElementById("fname").value
//     let lastName=document.getElementById("lname").value
//     let result=firstName+" "+lastName
//     document.getElementById("output").innerHTML=result

// }

// function add(){
//     let n1=document.getElementById("num1").value
//     let n2=document.getElementById("num2").value
//   let result=parseFloat(n1)+parseFloat(n2)
//   document.getElementById("output").innerHTML=result    
// }

// function sub(){
//     let n1=document.getElementById("num1").value
//     let n2=document.getElementById("num2").value
//   let result=parseFloat(n1)-parseFloat(n2)
//   document.getElementById("output").innerHTML=result
    
// }

// function mul(){
//     let n1=document.getElementById("num1").value
//     let n2=document.getElementById("num2").value
//   let result=parseFloat(n1)*parseFloat(n2)
//   document.getElementById("output").innerHTML=result
    
// }

// function div(){
//     let n1=document.getElementById("num1").value
//     let n2=document.getElementById("num2").value
//   let result=parseFloat(n1)/parseFloat(n2)
//   document.getElementById("output").innerHTML=result
    
// }
// function change(){
//   document.getElementById("img").src="./domains-icon-trendy-logo-concept-260nw-1246794922.webp"
  
// }

// function reverse(){
//     document.getElementById("img").src="./2aff5d3ae14a89142c768228c5c2d4ec.png"
// }

// function style(){
//     // document.getElementById("para").style.color="crimson";
//     // document.getElementById("para").style.backgroundColor="purple";
//     document.getElementById("para").style.color = "blue";

// }

// function createNode(){
//     const para = document.createElement("p");
//     var input=prompt("Enter your text")
//     const text = document.createTextNode(input);
//     para.appendChild(text);
//     const element = document.getElementById("root");
//     element.appendChild(para);
//     para.setAttribute("id","para")
//     }

function createNode(){
    const para = document.createElement("img");
    // var input=prompt("Enter your text")
    // const text = document.createTextNode(input);
    // para.appendChild(text);
    const element = document.getElementById("root");
    element.appendChild(para);
    para.setAttribute("id","para")
    para.setAttribute("src","./2aff5d3ae14a89142c768228c5c2d4ec.png")
    para.setAttribute("height","100")
    para.setAttribute("width","100")
    }