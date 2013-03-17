var maxAvatars = 1000;

// this function moves all avatars forward one frame
function oneFrameAll() {
	for (var i=1 ; i < maxAvatars ; i++){
		var currentAvatarID = "avatar" + i;
		//console.log(currentAvatarID);
		currentAvatar = document.getElementById(currentAvatarID); 
		//console.log(currentAvatar);
		if( currentAvatar == null ) {
			//console.log("all avatars animated");
			return;
		} else {
			//currentAvatar.src = "images/animations/running/0.png";
			nextFrame(currentAvatar);
		}
	}
}

// move given image one frame
function nextFrame(avatarElementToChange){
	//get old src (minus leading '?/images/animations/' (len=18) and file extension (len=4))
	//var fullOldSrc = avatarElement.src.split("/images/animations/")[1]; 
	splitSrc = avatarElementToChange.src.split("/");
	//console.log(splitSrc);
	//[0] = "http:",
	//[1] = "",
	//[2] = "localhost:8000",
	//[3] = "images",
	//[4] = "ani_vSmall",
	//[5] = "running",
	//[6] = "0.png"
	//I don't really need 0-2, 3-5 need to stay the same, 6 needs to be changed
	oldFrameN = splitSrc[6].substr(0,splitSrc[6].length-4);	//remove extension
	var newFrameN = parseInt(oldFrameN) + 1;
	var newSrc = splitSrc[3] +'/'+ splitSrc[4] +'/'+ splitSrc[5] +'/'+ newFrameN + ".png";

	if ( ! UrlExists(newSrc) ){	//if animation not found
		 newSrc = splitSrc[3] +'/'+ splitSrc[4] +'/'+ splitSrc[5]+'/'+"0.png";//reset to 0 animation
	}
	avatarElementToChange.src=newSrc;
	console.log(avatarElementToChange.id+" frame changed to " + avatarElementToChange.src);
} 

// check for file exists at url
function UrlExists(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

