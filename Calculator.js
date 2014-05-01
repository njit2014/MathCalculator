// Neeraj Bhurewar JS code for the scientific calculator
// Class IS 353 Mobile web development
// Functions added NumPad to invoke the events to perform .
// Added User input

// global vars
var strEmpty = "";

// main functions
$(document).ready(function () {

    // ANIMATE THE HEADER
    $("div.inf").fadeTo(1000, 0.25,
    function () { $("div.inf").fadeTo(500, 1.00); });

    // TOGGLE ARTICLE
    $("div.panel").slideToggle("slow");

    // TOGGLE INSTRUCTION PANEL
    $("div.inf").click(function ()
    { $("div.panel").slideToggle("slow"); });

    // APPEND THE NUM INTO BUFFER TEXTBOX
    $("div#NumPad button.NumPad_btnNormal").click(function () {
        var btn = $(this).html();
        $(NumPad_UserInput).val($(NumPad_UserInput).val() + btn);
        $(NumPad_UserInput).focus();

    });

    // CLEAR LAST CHAR IN INPUT TBOX
    $("div#NumPad button.NumPad_btnBack").click(function () {
        var str = $(NumPad_UserInput).val();
        $(NumPad_UserInput).val(str.substring(0, str.length - 1));
        $(NumPad_UserInput).focus();

    });

    // CLEAR ENTIRE INPUT TBOX
    $("div#NumPad button.NumPad_btnClr").click(function () {
        $(NumPad_UserInput).val(strEmpty);
        $(NumPad_UserInput).focus();

    });

    // SPACE BAR BUTTON
    $("div#NumPad button.NumPad_btnSpace").click(function () {
        $(NumPad_UserInput).val($(NumPad_UserInput).val() + " ");
        $(NumPad_UserInput).focus();
    });

    // FROM INPUT BOX TO MEM
    $("div#NumPad button#NumPad_btnToMem").click(function () {
        $(NumPad_Mem).val($(NumPad_UserInput).val());
        $(NumPad_UserInput).val(strEmpty);
        $(NumPad_UserInput).focus();
    });

    // FROM MEM TO INPUT BOX 
    $("div#NumPad button#NumPad_btnFromMem").click(function () {
        $(NumPad_UserInput).val($(NumPad_UserInput).val() + $(NumPad_Mem).val());
        $(NumPad_Mem).val(strEmpty);
        $(NumPad_UserInput).focus();
    });

    // CALCULATE 4 ARITHMETIC OPERATIONS
    $("button#NumPad_btnEnter").click(function () {
        var inputBox = $(NumPad_UserInput);
        var arrVal;
        var x1;
        var x2;
        var retVal = "ERROR! CHECK INPUT";

        // VALIDATE INPUT USING SPLIT FUNCTION AND REGULAR EXPRESSION
        arrVal = inputBox.val().split(/[+-\/*]+/);
        if (arrVal.length > 2) { inputBox.val(retVal); return; }

        // parse to get 2 operands
        x1 = parseFloat(arrVal[0]);
        x2 = parseFloat(arrVal[1]);

        // "+"
        if (inputBox.val().indexOf('+') >= 0) { retVal = x1 + x2; }
        // "-"
        else if (inputBox.val().indexOf('-') >= 0) { retVal = x1 - x2; }
        // "*"
        else if (inputBox.val().indexOf('*') >= 0) { retVal = x1 * x2; }
        // "/"
        else if (inputBox.val().indexOf('/') >= 0) { retVal = x1 / x2; }
        else { }

        inputBox.val(retVal);
        inputBox.focus();
    });

    // FUNCTION KEYS' EVENT HANDLER
    $("button.NumPad_btnCommand").click(function () {
        var inputBox = $(NumPad_UserInput);
        var x = parseFloat(inputBox.val());
        var retVal = "ERROR";

        switch (this.id) {
            case 'NumPad_btnInverseSign': retVal = -x; break;       // +/-
            case 'NumPad_btnInverse': retVal = 1 / x; break;        // 1/X
            case 'NumPad_btnSquare': retVal = x * x; break;         // X^2
            case 'NumPad_btnSquareRoot': retVal = Math.sqrt(x); break;  // SQRT(X)
            case 'NumPad_btnCube': retVal = x * x * x; break;       // X^3
            case 'NumPad_btnCubeRoot': var tmp = 1 / 3; retVal = Math.pow(x, tmp); break; // POW (X, 1/3)
            case 'NumPad_btnLog': retVal = Math.log(x); break;      // LOG (N) - NATURAL
            case 'NumPad_btnExp': retVal = Math.exp(x); break;      // E^(X)
            case 'NumPad_btnSin': retVal = Math.sin(x); break;      // SIN(X)
            case 'NumPad_btnCosin': retVal = Math.cos(x); break;    // COS(X) 
            case 'NumPad_btnTg': retVal = Math.tan(x); break;       // TAN(X)
            case 'NumPad_btnCtg': retVal = 1 / Math.tan(x); break;  // CTG(X)
            default: break;
        }
        inputBox.val(retVal);
        inputBox.focus();
    });
})

// ref/demo page
function InitRefPage() {  tmrOnLoad = setTimeout(StartWindowOpen, delOpen); }
function StartWindowOpen() { window.open(refPage, 'RefDemoPage', 'fullscreen'); self.focus(); }
window.onload = InitRefPage;
