var logFormData = function(data){
	// Write all form data to the console in order to view the objects
	
	console.log(data);
};

$('#addItem').on('pageinit', function(){

		var myForm = $('#bigForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			logFormData(data);
		    storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	var id = sessionStorage.length + 1;
	
		sessionStorage.setItem(id, JSON.stringify(data));
		alert("Vehicle Saved!");
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};