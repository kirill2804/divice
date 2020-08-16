var bg = document.querySelector(".background");

		var field_map = document.querySelector(".contacts-map");

		var modal_map = document.querySelector(".modal-map");
	
		var close_btn = modal_map.querySelector(".close-btn");


		field_map.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_map.classList.add("modal-show")
			bg.classList.add("bg-show")
			document.body.classList.add("overflow-bg")
		})


		close_btn.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_map.classList.remove("modal-show")
			bg.classList.remove("bg-show")
			document.body.classList.remove("overflow-bg")
		})

		window.addEventListener("keydown", function(evt){

				if(modal_map.classList.contains("modal-show")){

				if(evt.keyCode === 27){

					evt.preventDefault()
					modal_map.classList.remove("modal-show")
					bg.classList.remove("bg-show")
					document.body.classList.remove("overflow-bg")

				}
			}

		})