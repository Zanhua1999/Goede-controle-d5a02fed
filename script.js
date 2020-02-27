var points = 0;

function my_func() {
var answer = ["Parijs", "8", "Ijsselmeer"];
var arr = [];
var ans1 = document.getElementById("fr").value;
var ans2 = document.getElementById("sp").value;
var ans3 = document.getElementById("nl").value;
arr.push(ans1, ans2, ans3);
for (let i= 0; i < arr.length; i++) {
    if (answer[i] == arr[i]) {
        points++;
    }else{
        
    }
}
if (points == 3) {
    document.write("Je hebt alles goed");
}else {
    document.write("Je hebt een fout");
}points = 0;
}




