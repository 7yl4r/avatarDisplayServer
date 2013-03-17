function insertImage(animationSize) {
	var MAX_AVATARS = 1000;
	for(var i = 1; i < MAX_AVATARS ; i++){
		var newAvatarId = 'avatar'+i;
		if(document.getElementById(newAvatarId) == null) {	//if avatar does not yet exist
			//insert new avatar
			document.getElementById('avatars').innerHTML+="<image id='"+newAvatarId+"' src='images/"+animationSize+"/running/0.png' />";

			//schedule first frame change
			newAvatarElement = document.getElementById(newAvatarId);
			//avatarNum = avatarElement.id.split('avatar')[1];	//remove 'avatar' at front of id
			scheduleNextFrame(newAvatarElement);// call animation nextFrame scheduler
			console.log(newAvatarId + " added");
			break;	//exit the for loop
		}
	}
}

function insertAvatars(){
	nAvatars = 1;
	for(var i = 0; i < nAvatars ; i++){
		insertImage(animationSize);
	}
}
