// Student Workspace
Chess.start = function (n) {

if (n===0) {
  return "";
}
var size=n || 8;
var width=size;
var height=size;
var lines="";
for (var begin=1; begin<=height; ++begin) {
  if (begin%2!=0) {
  for (var oddly=1; oddly<=width; ++oddly) {
    if (oddly%2!=0) {
      lines+=" ";
    }else {
      lines+="#";
    }
  }
  lines+="\n";
  }else {
    for (var evenly=1; evenly<=width; ++evenly) {
      if (evenly%2==0) {
        lines+=" ";
      }else {
        lines+="#";
      }
    }
    lines+="\n";
  }
}
return lines;
};