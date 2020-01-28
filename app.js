var getIcecream = function () {
	return fetch("http://localhost:8080/icecream")
};

var createIcecream = function (addFlavor, addSize, addSprinkles, addRating){
	var data = `flavor=${encodeURIComponent(addFlavor)}`;
	data += `&size=${encodeURIComponent(addSize)}`;
	data += `&sprinkles=${encodeURIComponent(addSprinkles)}`;
	data += `&rating=${encodeURIComponent(addRating)}`;

	return fetch("http://localhost:8080/icecream", {
    body: data,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

var app= new Vue({
	el: "#app",
	data: {
		flavorInput: "",
		flavorTitle: "Flavor: ",
		sizeInput: "",
		sizeTitle: "Size:",
		sprinklesInput: "",
		sprinklesTitle: "Sprinkles:",
		ratingInput: "",
		ratingTitle: "Rating:",
		ICECREAM: []
	},
	methods: {
		goButtonClicked: function () {
			createIcecream(this.flavorInput, this.sizeInput,
			this.sprinklesInput, this.ratingInput).then((response) =>{
				if (response.status == 201){
					this.loadIcecream();
				}
			this.flavorInput= "";
			this.sizeInput= "";
			this.sprinklesInput= "";
			this.ratingInput = "";

			});
		},
		loadIcecream: function () {
			getIcecream().then((response) =>{
				response.json().then((ICECREAM) =>{
					console.log("here are movies:", ICECREAM);
					this.ICECREAM = ICECREAM;
					//_.orderBy(this.rating, ['rating'], ['desc']);
				});
				//_.orderBy(this.rating, ['rating'], ['desc']);
			});
		}
	},
	// computed: {
	// 	orderedRating: function () {
	// 		return _.orderBy(this.ratingInput, 'Rating')
	// 	}
	// },

		created: function() {
		console.log("VUE LOADED.");
		this.loadIcecream();
	}
});