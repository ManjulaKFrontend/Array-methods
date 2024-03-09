//array length

function btn1(){

    var al=document.getElementById("value1").value;
    var al = al.split(",");
    document.getElementById("res1").innerHTML=al.length;

}
//array to string

function btn2(){

    var bl=document.getElementById("value2").value;
    var str=bl.split(",");
    str.toString(document.getElementById("res2").value);
    document.getElementById("res2").innerHTML=str;
}
//array pop
function btn3(){

    var cl=document.getElementById("value3").value;
    var pop=cl.split(",");
    pop.pop(document.getElementById("res3").value);
    document.getElementById("res3").innerHTML=pop;
}

//array push



function btn4(){
    var dl=document.getElementById("value4").value;
    var push = dl.split(",")
    push.push(document.getElementById("newinput").value);
    document.getElementById("res4").innerHTML = push;
}
//array shift
function btn5(){

    var el=document.getElementById("value5").value;
    var pop=el.split(",");
    pop.shift(document.getElementById("res5").value);
    document.getElementById("res5").innerHTML=pop;
}
//array unshift
function btn6(){
    var fl=document.getElementById("value6").value;
    var shift = fl.split(",")
    shift.unshift(document.getElementById("unshift").value);
    document.getElementById("res6").innerHTML = shift;
}
//Array Delete

function btn7(){
    var gl=document.getElementById("value7").value;
    var del = gl.split(",")
    delete del[document.getElementById("delete").value];
    document.getElementById("res7").innerHTML =del;
}
//array concat


function btn8(){
    var hl=document.getElementById("value8").value;
    var con = hl.split(",")
   let result= con.concat([document.getElementById("concat").value]);
    document.getElementById("res8").innerHTML = result;
}
//Array join

function btn9(){
    var il=document.getElementById("value9").value;
    var join = il.split(",")
   let res= join.join([document.getElementById("join").value]);
    document.getElementById("res9").innerHTML = res;
}
//slice


function btn10()
{
    let slicing = document.getElementById("value10").value;
    let slice = slicing.split(",");
    let val1 = document.getElementById("slice1").value;
    let val2 = document.getElementById("slice2").value;
    document.getElementById("res10").innerHTML = slice.slice(val1,val2);
}

//splice
function btn11()
{
    let splicing = document.getElementById("value11").value;
    let splice = splicing.split(",");
    let val1 = document.getElementById("splice1").value;
    let val2 = document.getElementById("splice2").value;
    splice.splice(val1,val2)
    document.getElementById("res11").innerHTML = splice;
}








// array at
