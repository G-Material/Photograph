function LoadCookie(Key)
{
  var CookieString = document.cookie
  var CookieSet = CookieString.split(';')
  var SetSize = CookieSet.length
  var CookiePieces
  var ReturnValue = ""
  var x = 0
  for (x = 0; ((x < SetSize) && (ReturnValue == "")); x ++)
  {
    CookiePieces = CookieSet[x].split ('=')
    if (CookiePieces[0].substring (0,1) == ' ')
      CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length)
    if (CookiePieces[0] == Key)
    {
      ReturnValue = CookiePieces[1]
      break
    }
  }
  return ReturnValue
}

if ("" == LoadCookie("etangWHSAD"))
{
  document.cookie = "etangWHSAD=done; path=/" 
var myURL='/-fs0/4/4/d/home_ad/ad.html';
var myURL1='/-fs0/4/4/d/home_ad/ad1.html';
var myWidth='468';
var myHeight='30';
var popV='width='+myWidth+',height='+myHeight+',titlebar=0,toolbar=0,location=0,menubar=0,scrollbars=no,resizable=yes';
popV+='scrollbars=0,resizable=0,channelmode=0,directories=0,status=0'; var dz=document;
if(parseFloat(navigator.appVersion)>=4){var myTI=screen.height/2-myHeight/2;
var myLI=screen.width/2-myWidth/2;popV+=',top='+myTI+',left='+myLI;}
if(dz.cookie.indexOf('he=llo')<=0)
        {
	//setTimeout("fastClickpopWindow()",5000); 
	fastClickpopWindow();
	//fastClickpop1Window();
        dz.cookie='he=llo';	
}
function fastClickpopWindow(){window.open(myURL,'etangWHSAD',popV)}
//function fastClickpop1Window(){window.open(myURL1,'tongzhi','status=no,scrollbars=no,top=30,left=160,width=468,height=145');self.focus();}
}
