// Project: MIU Week 2
// Name: Brent Marohnic
// Term: 1208
// Date: 2012-08-09

window.addEventListener("DOMContentLoaded", function(){

/* ------------------------------------------------------------------------------------------------------
 | Reusable functions section
 ------------------------------------------------------------------------------------------------------*/
	// getIt - use this function whenever you need to obtain a handle of an element using its id.
	function getIt(x){
		var whichElement = document.getElementById(x);
		return whichElement;
	}
/* ------------------------------------------------------------------------------------------------------
 | End of Reusable functions section
 ------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------------------------------------------------
 | Get JSON data section
 ------------------------------------------------------------------------------------------------------*/
	var ownersBtn = getIt('ownersBtn'),
		makesBtn = getIt('makesBtn'),
		modelsBtn = getIt('modelsBtn');
	
	ownersBtn.addEventListener('click', createAccordian('ownersPara', 'ownersGrid', 'owner'));
	makesBtn.addEventListener('click', createAccordian('makesPara', 'makesGrid', 'make'));
	modelsBtn.addEventListener('click', createAccordian('modelsPara', 'modelsGrid', 'model'));
	
	function createAccordian (var1, var2, var3){
		// The following line will prevent the remainder of the code from running if the list has
		// already been created. This will prevent the list from being rendered over and over again
		// each time the buttons are clicked. Prior to including this line, a new list was appended
		// to the previous list every time the button was clicked.
		
		if (! getIt(var1)) {
			var	selectDiv = getIt(var2);
			
			//Cycle thru the JSON data and create the accordian
			for (var n in json) {
			
				var makePara = document.createElement('div');
				var makePic = document.createElement('img');
				var makeBreak = document.createElement('br');
				var makeP = document.createElement('p');
				makePic.setAttribute("src","images/" + json[n]["make"][1] + ".jpg");
				makePic.setAttribute("alt",json[n]["make"][1]);
				makePic.setAttribute("height","40px");
				makePic.setAttribute("width","40px");				
				if(n % 3 === 0) {
					makePara.setAttribute("class","ui-block-a");
				}
				else if(n % 2 === 0) {
					makePara.setAttribute("class","ui-block-b");
				}
				else {
					makePara.setAttribute("class","ui-block-c");
				};
				
				
				makePara.setAttribute("value",json[n][var3][1]);
				

				makePara.setAttribute("id", var1);
				makeP.innerHTML=json[n][var3][1];
				
				selectDiv.appendChild(makePara);
				
				makePara.appendChild(makePic);
				makePara.appendChild(makeBreak);
				makePara.appendChild(makeP);
				
			}
		}
		$('#ownersSet').collapsibleset('refresh');
	};
	
	
/* ------------------------------------------------------------------------------------------------------
 | End of Get JSON data section
 ------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------------------------------------------------
 | The following section contains the logic responsible for performing the search of the json data.
 ------------------------------------------------------------------------------------------------------*/
	var searchBtn = getIt('searchBtn'),
		glblCount = 0;
	
	searchBtn.addEventListener('click', doSearch);
	// doSearch - Cycle thru each of the objects contained within the json object and identify elements
	// that match the search string. Output all of the corresponding data elements when a match is found.
	
	function doSearch() {
		var searchText = getIt('searchText').value,
			searchBox = getIt('searchText'),
			selectDiv = getIt('searchSet');
		
		if (searchText !== "") {
			glblCount = glblCount + 1;
			var searchList = document.createElement('div');
			searchList.setAttribute("id","searchList" + glblCount);
			searchList.setAttribute("data-role","collapsible");
			searchList.setAttribute("data-collapsed","false");
			var searchH3 = document.createElement('h3');
			searchH3.setAttribute("id", "searchH3" + glblCount);
			searchH3.innerHTML = "Search" + " " + glblCount;
			
			for (var n in json) {
				for (var o in json[n]) {
					if (json[n][o][0] === searchText || json[n][o][1] === searchText) {
						
						var makeDivider = document.createElement('p');
						makeDivider.setAttribute("class","divider");
						searchList.appendChild(makeDivider);
						
						for (var p in json[n]) {
							console.log(json[n][p][0] + " " + json[n][p][1]);
							
							var makePara = document.createElement('p');
				
							makePara.setAttribute("id", "search" + glblCount);
							makePara.innerHTML = json[n][p][0] + " " + json[n][p][1];
							searchList.appendChild(makePara);
						};
					};
				};
			};
			
			if (glblCount === 1) {
				searchList.appendChild(searchH3);
				selectDiv.appendChild(searchList);
			} else {
				searchList.appendChild(searchH3);
			//	selectDiv.appendChild(searchList);
				selectDiv.insertBefore(searchList,selectDiv.firstChild);
				
			};
		};
		searchBox.value = '';
		$('#searchSet').collapsibleset('refresh');
		
	};
/* ------------------------------------------------------------------------------------------------------
 | End of the search logic section.
 ------------------------------------------------------------------------------------------------------*/

})

