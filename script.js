// How do you call a server-side API via fetch API?

// More Resources
// Fetch Article: https://blog.webdevsimplified.com/202...
// Learn Promises In 10 Minutes Video: https://youtu.be/DHvZLI7Db8E
// Async Await Tutorial: https://youtu.be/V_Kr9OSfDeU

// Fetching an API with options
// fetch("https://reqres.in/api/users", {});

// Fetch does a promise which means we can do async await or .then / .catch
// console.log(fetch("https://reqres.in/api/users"));

// To see the response
// fetch("https://reqres.in/api/users").then((res) => console.log(res));
// fetch("https://reqres.in/api/users")
// 	.then((res) => res.json())
// the code above needs to be turned into JSON, but doesn't do anything. you need the code below
// 	.then((data) => console.log(data));

// This is basic syntax to call data from server-side api
// fetch("https://reqres.in/api/users")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// What about 404?
// fetch("https://reqres.in/api/users/23")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))

// Unless the website goes down, a .catch(error => console.log('ERROR')) won't trigger
// .catch((error) => console.log("Error"));

// How do I make sure the response is good?
// fetch("https://reqres.in/api/users/23")
// 	.then((res) => {
// 		if (res.ok) {
// 			console.log("SUCCESS" && res.json());
// 		} else {
// 			console.log("NOT SUCCESSFUL");
// 		}
// 	})
// 	.then((data) => console.log(data));
// Output 404 and NOT SUCCESSFUL, undefined

// Successful output
// fetch("https://reqres.in/api/users")
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((data) => console.log(data));

// What if I wanted to post DATA?

fetch("https://reqres.in/api/users", {
	// Add these options
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		name: "User 1",
	}),
})
	.then((res) => {
		return res.json();
	})
	.then((data) => console.log(data));
