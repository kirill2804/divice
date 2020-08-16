	var bg = document.querySelector(".background");

		var modal_mess = document.querySelector(".modal-message");

		var contacts_btn = document.querySelector(".contacts-btn");

		var close_btn = modal_mess.querySelector(".close-btn");

		var form = document.querySelector(".form-message");

		var field_name = form.querySelector("input[type=text]");

		var field_email = form.querySelector("input[type=email]");

		var field_message = form.querySelector(".message-text");

		var field_valid = form.querySelectorAll(".form-field");



		var logininfo = {}

		var storage = ""
		var isStoragesupport = true

		try{
			var storage = JSON.parse(localStorage.getItem("formdata"))
		}catch(err){
		    isStoragesupport = false
		}



		function valid_field(val){

			if(val){
				for(var i = 0; i < field_valid.length; i++){
					field_valid[i].classList.remove("field-error")
				}
			}else{
				for(var i = 0; i < field_valid.length; i++){
					if(!field_valid[i].value){
						field_valid[i].classList.add("field-error")
					}else{
						field_valid[i].classList.remove("field-error")
					}
				}
			}
		}




		contacts_btn.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_mess.classList.add("modal-show")
			bg.classList.add("bg-show")
			document.body.classList.add("overflow-bg")

			valid_field(true)

			if(storage){
					field_name.value = storage.name
					field_email.value = storage.email
					field_message.focus()
			}else{
					field_name.focus()
			}
		})



		

		form.addEventListener("submit", function(evt){


			if(!field_name.value || !field_email.value || !field_message.value){
				evt.preventDefault()
				valid_field(false)
			}else{
				if(isStoragesupport){
						// форма отправлена!!!
						console.log("форма отправлена успешно!!!")
						evt.preventDefault()
						console.log("Форма успешно отправлена!!")

						logininfo.name = field_name.value
						logininfo.email = field_email.value
						localStorage.setItem("formdata", JSON.stringify(logininfo))
						modal_mess.classList.remove("modal-show")
						bg.classList.remove("bg-show")
						document.body.classList.remove("overflow-bg")
				}
			}
		
		})




		close_btn.addEventListener("click", function(evt){

			evt.preventDefault()

			modal_mess.classList.remove("modal-show")

			bg.classList.remove("bg-show")

			document.body.classList.remove("overflow-bg")
		})


		window.addEventListener("keydown", function(evt){


			if(modal_mess.classList.contains("modal-show")){

				if(evt.keyCode === 27){

					evt.preventDefault()

					modal_mess.classList.remove("modal-show")

					bg.classList.remove("bg-show")

					document.body.classList.remove("overflow-bg")

				}
			}
		})