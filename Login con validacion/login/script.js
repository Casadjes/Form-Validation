const form = document.getElementById("form");
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const userValue = user.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (userValue === "") {
		setErrorFor(user, "User Can't be empty");
	} else {
		setSuccessFor(user);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email Can't be Empty");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Invalid Email");
	} else {
		setSuccessFor(email);
	}

	if (passwordValue === "") {
		setErrorFor(password, "Password Can't be Empty");
	} else {
		setSuccessFor(password);
	}
	if (password2Value === "") {
		setErrorFor(password2, "Password Can't be Empty");
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, "Passwords don't match");
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
		email
	);
}
