var intPipValue = 0;
$('#commitionValue').val(3);

let arrPipValues = [
    ['EUR_USD', 10], //const
    ['GBP_USD', 10], //const
    ['GBP_JPY', 9.32671], // EUR_JPY USD_JPY
    ['XAU_USD', 1],
    ['USD_CAD', 7.30514], // GBP_CAD
    ['GBP_CAD', 7.30514],
    ['EUR_NZD', 6.42110],
    ['EUR_JPY', 9.32671], 
    ['USD_JPY', 9.32671],
    ['AUD_USD', 10], //const
    ['USD_CHF', 10.5462],
    ['USD_ZAR', 0.57916]
];

function Color(strPair, intPair) {
    $('.pair').css('color','rgb(226, 226, 226)');
    $('.'+strPair).css('color','#d9534f');
    intPipValue = arrPipValues[intPair][1];
};

//Pips at risk * pip value(per lot) * lots traded = amount at risk
//Pips at risk * pip value(per lot) / amount at risk = 1 / lots traded
function Calculation() {
    var slPips = $("#SLpips").val();
    var riskAmt = $("#riskamount").val();
    var posSize = slPips*intPipValue/riskAmt;
    var answer = Math.pow(posSize, -1).toFixed(3);
    if (answer.slice(-1) == 0) {
        if (answer.slice(-2) == 0) {
            if (answer.slice(-3) == 0) {
                var answer = Math.pow(posSize, -1).toFixed(0);
            } else { var answer = Math.pow(posSize, -1).toFixed(1); }
        } else { var answer = Math.pow(posSize, -1).toFixed(2); }
    } else { var answer = Math.pow(posSize, -1).toFixed(3); }
    if (answer>0.5 && Number.isInteger(answer*100) == false) {
        var answer = Math.pow(posSize, -1).toFixed(2);}
    var commition = (answer*document.getElementById("commitionValue").value).toFixed(2);
    var risk = (Number(riskAmt) + Number(commition)).toFixed(2);
    $("#com").html("$ "+commition);
    $("#risk").html("$ "+risk);
    $("#size").html(answer);
};

function centercontent() {
    $("#content").css({"display": "flex", "justify-content": "center", "align-items": "center"});
    document.getElementById("button_wrap").style.height = "8rem";
    document.getElementById("corner").style.display = "block";
    document.getElementById("center").style.display = "none";
    document.getElementById("popup").style.display = "block";
};

function cornercontent() {
    document.getElementById("content").style.display = "block";
    document.getElementById("button_wrap").style.height = "0";
    document.getElementById("center").style.display = "block";
    document.getElementById("corner").style.display = "none";
    document.getElementById("popup").style.display = "none";
};

$(function() {
    var skipNum = 1;
    (function riskDollar(){
        $(".arrow_minus_1").click(risky);
        $(".arrow_plus_1").click(risky);
        function risky() {
            var riskyy = $("#riskamount").val();
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

    var decimal = false;
    (function micro() {
        $(".micro_btn").click(function() {blnDecimal(),microColor(),plusFive()});
        function blnDecimal() {
            decimal ? decimal = false : decimal = true
        }
        function microColor() {
            var white = "rgb(226, 226, 226)";
            var red = "rgb(217, 83, 79)";
            decimal ? $(".micro_btn").css("color", red) : $(".micro_btn").css("color", white)
        }
        function plusFive() {
            var $Num = $(".num_2");
            decimal ?  $Num.val((+$Num.val() + 0.5).toFixed(1)) : $Num.val((+$Num.val()).toFixed(0))
        }
    })();

    (function Products2() {
        var $ArrowMinus = $(".arrow_minus_2");
        var $ArrowPlus = $(".arrow_plus_2");
        var $Num = $(".num_2");
        $ArrowMinus.click(Minus);
        $ArrowPlus.click(Plus);
        function Minus() {
            $Num.val((+$Num.val() - (decimal ? 0.1 : 1)).toFixed(decimal ? 1 : 0));
        }
        function Plus() {
            $Num.val((+$Num.val() + (decimal ? 0.1 : 1)).toFixed(decimal ? 1 : 0));
        }
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
    var amt = ($("#riskamount").val()).trim();
    if (amt) {
        var x = Number((amt).toString() + 0);
        $("#riskamount").val(x);
    } else {$("#riskamount").val(1);}
};

function NewWindow() {
    window.open(
        'window.html', 
        'newwindow', 
        'width=255,height=400'
    ); 
    return false;
};