const list = [];

function funcEU() {
    list.push(0);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("EUR_USD").value;
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("EU")[0].style.color = "#d9534f";}

function funcGU() {
    list.push(1);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("GBP_USD").value;
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("GU")[0].style.color = "#d9534f";}

function funcGJ() {
    list.push(2);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("GBP_JPY").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("GJ")[0].style.color = "#d9534f";}

function funcXAU() {
    list.push(3);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("XAU_USD").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("XAU")[0].style.color = "#d9534f";}

function funcNU() {
    list.push(4);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("NZD_USD").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("NU")[0].style.color = "#d9534f";}

function funcEN() {
    list.push(5);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("EUR_NZD").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("EN")[0].style.color = "#d9534f";}

function funcGC() {
    list.push(6);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("GBP_CAD").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("GC")[0].style.color = "#d9534f";}

function funcGN() {
    list.push(7);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("GBP_NZD").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("GN")[0].style.color = "#d9534f";}

function funcUJ() {
    list.push(8);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("USD_JPY").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("UJ")[0].style.color = "#d9534f";}

function funcUZ() {
    list.push(9);
    var lastListVal = list.slice(-2)[0] 
    pipvalue = document.getElementById("USD_ZAR").value; 
    document.getElementsByClassName("pair")[lastListVal].style.color = "#000";
    document.getElementsByClassName("UZ")[0].style.color = "#d9534f";}

function Calculation() {
    var y = document.getElementById("SLpips").value;
    var x = document.getElementById("riskamount").value;
    var z = y*pipvalue/x;
    var answer = Math.pow(z, -1).toFixed(3);
    if (answer.slice(-1) == 0) {
        if (answer.slice(-2) == 0) {
            if (answer.slice(-3) == 0) {
                var answer = Math.pow(z, -1).toFixed(0);
            } else { var answer = Math.pow(z, -1).toFixed(1); }
        } else { var answer = Math.pow(z, -1).toFixed(2); }
    } else { var answer = Math.pow(z, -1).toFixed(3); }
    if (answer>0.5 && Number.isInteger(answer*100) == false) {
        var answer = Math.pow(z, -1).toFixed(2);}
    var commition = (answer*document.getElementById("commitionValue").value).toFixed(2);
    var risk = (Number(x) + Number(commition)).toFixed(2);
    document.getElementById("com").innerHTML = "$ " + commition;
    document.getElementById("risk").innerHTML = "$ " + risk;
    document.getElementById("size").innerHTML = answer;}

function centercontent() {
    document.getElementById("content").setAttribute(
        "style", "display: flex; justify-content: center; align-items: center;");
    document.getElementById("button_wrap").style.height = "160px";
    document.getElementById("corner").style.display = "block";
    document.getElementById("center").style.display = "none";}

function cornercontent() {
    document.getElementById("content").style.display = "block";
    document.getElementById("button_wrap").style.height = "0";
    document.getElementById("center").style.display = "block";
    document.getElementById("corner").style.display = "none";}