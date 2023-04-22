function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62vEJJy3O64":
        Script1();
        break;
      case "6U2rjw3g03A":
        Script2();
        break;
      case "5o6Mn64k7uq":
        Script3();
        break;
      case "6MROqnSyw7H":
        Script4();
        break;
      case "6hCrPStmode":
        Script5();
        break;
      case "6eFkFQVOZwL":
        Script6();
        break;
  }
}

function Script1()
{
  /*
var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

// alert("Slide 1.1 Trigger 1 A");
// ----------------------

script.src = 'story_content/WebObjects/v.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script);

// alert("Slide 1.1 Trigger 1 B");

*/
}

function Script2()
{
  /*
A step needed:

Copy the following code and add it to the end of the bosy section of the story or index file:

<script 
 src="https://code.responsivevoice.org/responsivevoice.js?key=QWobFfIM";
></script> 



*/
}

function Script3()
{
  
// alert("Slide 1.1 Trigger 3 A");

// OnLineVoice();

// alert("Slide 1.1 Trigger 3 B");

}

function Script4()
{
  // alert("OnLineVoice Trigger A");

var player = GetPlayer();
var EngText = player.GetVar("EngText");
responsiveVoice.speak(EngText , "US English Female");

// alert("OnLineVoice Trigger B");
// alert("OnLineVoice Trigger C");

}

function Script5()
{
  
// alert("Slide 1.1 Trigger 3 A");

// OnLineVoice();

// alert("Slide 1.1 Trigger 3 B");

}

function Script6()
{
  // alert("OnLineVoice Trigger A");

var player = GetPlayer();
var ArabText = player.GetVar("ArabText");
responsiveVoice.speak(ArabText , "Arabic Female");

// alert("OnLineVoice Trigger B");
// alert("OnLineVoice Trigger C");

}

