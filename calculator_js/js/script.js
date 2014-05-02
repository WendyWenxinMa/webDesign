function num0()
{
    document.calForm.result.value += "0";
}

function num1()
{
    document.calForm.result.value += "1";
}

function num2()
{
    document.calForm.result.value += "2";
}

function num3()
{
    document.calForm.result.value += "3";
}

function num4()
{
    document.calForm.result.value += "4";
}

function num5()
{
    document.calForm.result.value += "5";
}

function num6()
{
    document.calForm.result.value += "6";
}

function num7()
{
    document.calForm.result.value += "7";
}

function num8()
{
    document.calForm.result.value += "8";
}

function num9()
{
    document.calForm.result.value += "9";
}

//=================================================================
function dotcal()
{
    document.calForm.result.value += ".";
}

function clearcal()
{
    document.calForm.result.value = "";
}

function percentcal()
{
    document.calForm.result.value /= "100";
}

//=====================================================================


function pluscal()
{
    document.calForm.result.value += "+";
}

function minuscal()
{
    document.calForm.result.value += "-";
}

function multiplecal()
{
    document.calForm.result.value += "*";
}

function dividecal()
{
    document.calForm.result.value += "/";
}

function plusmins()
{
    document.calForm.result.value *="-1";
}

//=========================================================

function equalcal()
{
    var evaluation = eval(document.calForm.result.value)
    document.calForm.result.value = evaluation;
}