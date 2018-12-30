
function playPause()
{ var myVideo=document.getElementById("videos"); 
	if (myVideo.paused) 
	  myVideo.play(); 
	else 
	  myVideo.pause(); 
} 

	function makeBig()
{ var myVideo=document.getElementById("videos"); 
	myVideo.width=560; 
} 

	function makeSmall()
{ var myVideo=document.getElementById("videos"); 
	myVideo.width=320; 
} 

	function makeNormal()
{ var myVideo=document.getElementById("videos"); 
	myVideo.width=420; 
} 
