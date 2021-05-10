var student_array=[];

function submit(){
    var d_s_a=[];
    for(var x=1; x<=4; x++){
        var n_s=document.getElementById("name_of_the_student_" +x).value;
        console.log(n_s);
        student_array.push(n_s);
    }
    console.log(student_array);
    var l_a=student_array.length;
    console.log(l_a);
    for(var z=0; z<l_a; z++){
d_s_a.push("<h4> Name- "+student_array[z] + "</h4>");
console.log(d_s_a);
}
document.getElementById("display_name_with_commas").innerHTML=d_s_a;
var r_c=d_s_a.join("");
document.getElementById("display_name_without_commas").innerHTML=r_c;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    var d_s_a_s=[];
    var l_a_s=student_array.length;
    for(var i=0; i<l_a_s; i++){
d_s_a_s.push("<h4> Name-"+student_array[i]+"</h4>");
console.log(d_s_a_s);
}
var r_c_s=d_s_a_s.join("");
document.getElementById("display_name_without_commas").innerHTML=r_c_s;
}