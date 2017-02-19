var options = {
  valueNames: [ 'artist', 'title', 'tags' ]
};

let possibleTags = ['party', 'wedding', 'holiday'];

var songsList = new List('songs', options);

let filterClickHandler = function(){
	let type = this.dataset.filter;
	filterList(type);
};

function filterList(type){
	if(type !== "all" && type !== "other"){
		songsList.filter(item => {
			return item._values.tags.indexOf(type) >= 0;
		});
	}else if(type === "other"){
		songsList.filter(item => {
			let isOther = true;
			for(let i=0;i<possibleTags.length;i++){
				if(item._values.tags.indexOf(possibleTags[i]) >= 0){
					isOther = false;
					break;
				}
			}
			return isOther;
		});
	}else if(type === "all"){
		songsList.filter();
	}
}

let filterButtons = document.getElementsByClassName("filter");
for(let i=0; i<filterButtons.length; i++){
	filterButtons[i].addEventListener('click', filterClickHandler, false);
}
