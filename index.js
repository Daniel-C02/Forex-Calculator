const list = [];
var intPipValue = 0;

let arrPipValues = [
    ['EUR_USD', 10], //const
    ['GBP_USD', 10], //const
    ['GBP_JPY', 9.32671], // EJ UJ
    ['XAU_USD', 1],
    ['USD_CAD', 7.30514], // GC
    ['GBP_CAD', 7.30514],
    ['EUR_NZD', 6.42110],
    ['EUR_JPY', 9.32671], 
    ['USD_JPY', 9.32671],
    ['AUD_USD', 10], //const
    ['USD_CHF', 10.5462],
    ['USD_ZAR', 0.57916]
];

function Color(strPair, intPair) {
    var elements = document.getElementsByClassName('pair'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color = "rgb(226, 226, 226)";
	}
    document.getElementsByClassName(strPair)[0].style.color = "#d9534f";
    intPipValue = arrPipValues[intPair][1];
};

//Pips at risk * pip value(per lot) * lots traded = amount at risk
//Pips at risk * pip value(per lot) / amount at risk = 1 / lots traded
function Calculation() {
    var y = document.getElementById("SLpips").value;
    var x = document.getElementById("riskamount").value;
    var z = y*intPipValue/x;
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
    document.getElementById("size").innerHTML = answer;
};

function centercontent() {
    document.getElementById("content").setAttribute(
        "style", "display: flex; justify-content: center; align-items: center;");
    document.getElementById("button_wrap").style.height = "8rem";
    document.getElementById("corner").style.display = "block";
    document.getElementById("center").style.display = "none";
};

function cornercontent() {
    document.getElementById("content").style.display = "block";
    document.getElementById("button_wrap").style.height = "0";
    document.getElementById("center").style.display = "block";
    document.getElementById("corner").style.display = "none";
};

$(function() {
    var skipNum = 1;
    (function riskDollar(){
        $(".arrow_minus_1").click(risky);
        $(".arrow_plus_1").click(risky);
        function risky() {
            var riskyy = document.getElementById("riskamount").value;
            if (riskyy < 100) {skipNum = 1;
            } else if (riskyy < 999) {skipNum = 10;
            } else if (riskyy < 9999) {skipNum = 100;
            } else if (riskyy < 99999) {skipNum = 1000;
            } else if (riskyy < 999999) {skipNum = 10000;
            } else if (riskyy < 9999999) {skipNum = 100000;
            } else if (riskyy < 99999999) {skipNum = 1000000;
            } else {skipNum = 1;
            }};
    })();

    (function Products1() {
        var $ArrowMinus = $(".arrow_minus_1");
        var $ArrowPlus = $(".arrow_plus_1");
        var $Num = $(".num_1");
        $ArrowMinus.click(Minus);
        $ArrowPlus.click(Plus);
        function Minus() {
            if ($Num.val() > skipNum) {$Num.val(+$Num.val() - skipNum);}}
        function Plus() {$Num.val(+$Num.val() + skipNum);}
    })();

    var microNum = 1;
    var decimal = 0;
    (function micro() {
        $(".micro_btn").click(function() {microo(),decimall(),microColor()});
        function microo() {
            if (microNum == 1) {
                microNum = 0.1;
            } else {
                microNum = 1;}}
        function decimall() {
            if (decimal == 0) {
                decimal = 1;
            } else {
                decimal = 0;}}
        function microColor() {
            var black = "rgb(41, 43, 44)";
            var white = "rgb(226, 226, 226)";
            var red = "rgb(217, 83, 79)";
            var x = $(".micro_btn").css("color");
            if (x == black || x == white) {
                $(".micro_btn").css("color", red);
            } else if ($(".Heading").css("color") == black) {
                $(".micro_btn").css("color", black);
            } else {
                $(".micro_btn").css("color", white);
            }}
    })();

    (function Products2() {
        var $ArrowMinus = $(".arrow_minus_2");
        var $ArrowPlus = $(".arrow_plus_2");
        var $Num = $(".num_2");
        $ArrowMinus.click(Minus);
        $ArrowPlus.click(Plus);
        function Minus() {
            if ($Num.val() > microNum) {$Num.val((+$Num.val() - microNum).toFixed(decimal));}}
        function Plus() {$Num.val((+$Num.val() + microNum).toFixed(decimal));}
    })();

    (function Products3() {
        var $ArrowMinus = $(".arrow_minus_3");
        var $ArrowPlus = $(".arrow_plus_3");
        var $Num = $(".num_3");
        $ArrowMinus.click(Minus);
        $ArrowPlus.click(Plus);
        function Minus() {
            if ($Num.val() > 1) {$Num.val(+$Num.val() - 1);}}
        function Plus() {$Num.val(+$Num.val() + 1);}
    })();
});

function zero() {
    var amt = (document.getElementById("riskamount").value).trim();
    if (amt) {
        var x = Number((amt).toString() + 0);
        document.getElementById("riskamount").value = x;
    } else {document.getElementById("riskamount").value = 1;}
};

function NewWindow() {
    window.open(
        'window.html', 
        'newwindow', 
        'width=300,height=500'
    ); 
    return false;
};