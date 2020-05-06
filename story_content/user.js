function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BG3grlrIbx":
        Script1();
        break;
      case "5uzqcz5Lsk2":
        Script2();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var totalScore=player.GetVar("final_score");
if(totalScore=>80){
onBWEvent("BW_UpdateStatus","completed|~|"+totalScore+"|~|0|~|5.26|~|80|~|quiz");
}
else{
onBWEvent("BW_UpdateStatus","incomplete|~|"+totalScore+"|~|0|~|5.26|~|80|~|quiz");
}
}

function Script2()
{
  var player=GetPlayer();
var totalScore=player.GetVar("final_score");
if(totalScore=>15){
onBWEvent("BW_UpdateStatus","completed|~|"+totalScore+"|~|0|~|19|~|15|~|quiz");
}
else{
onBWEvent("BW_UpdateStatus","incomplete|~|"+totalScore+"|~|0|~|19|~|15|~|quiz");
}
}

