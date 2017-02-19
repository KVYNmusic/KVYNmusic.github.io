var options = {
  valueNames: [ 'type', 'title' ]
};

var mediaList = new List('media', options);

let filterClickHandler = function(){
	let type = this.dataset.filter;
	filterList(type);
};

function filterList(type){
	if(type !== "all"){
		mediaList.filter(item => {
			return item._values.type === type;
		});
	}else{
		mediaList.filter();
	}
}

let filterButtons = document.getElementsByClassName("filter");
for(let i=0; i<filterButtons.length; i++){
	filterButtons[i].addEventListener('click', filterClickHandler, false);
}
