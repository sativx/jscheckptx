function affb()
{
	document.querySelector("#des").innerHTML="This option will make your text bold";
}

function affu()
{
document.querySelector("#des").innerHTML="This option will make your text underlined";	
}

function affi()
{
	document.querySelector("#des").innerHTML="This option will make your text italic";	
}

function number()
{
	var x=document.f.txtn.value;
	document.getElementById("textzone").style.fontSize=x+"px"; 
}

function stylo()
{
	var ch=document.f.txts.value; 
	 document.getElementById("textzone").style.fontFamily =ch; 
}

function italia()
{
	document.getElementById("textzone").style.fontStyle = "italic";
}

function blide()
{
	document.getElementById("textzone").style.fontWeight = "bolder";
}

function underworld()
{
	document.getElementById("textzone").style.textDecoration = "underline ";
}

function affnx()
{
	document.querySelector("#des").innerHTML="This option will reset the default text";
}

function reset()
{
	document.getElementById("textzone").style.textDecoration = "initial ";
	document.getElementById("textzone").style.fontWeight = "normal";
	document.getElementById("textzone").style.fontStyle = "initial";
}

function affyolo()
{
	document.querySelector("#des").innerHTML="This option will make your select your text style";	
}

function affyala()
{
	document.querySelector("#des").innerHTML="This option will make you select your text size";	
}