# Example (Frontend Javascript)
1. Login -
fetch('localhost:3000/api/login', {
    method: 'POST',
    body: { 
        "email" : "patelsakshi1998@gmail.com",
        "password" : "iamdumb"
    }
}).then(response => response.json()).then(response => {
    console.log(response)
})

2. Universities -
fetch('localhost:3000/api/universities', {
    method: 'GET',
    headers: {
    'auth-token': '<TOKEN_RECIEVED_FROM_LOGIN>'
    },
}).then(response => response.json()).then(response => {
    console.log(response)
})

# Routes 

1. POST localhost:3000/api/login
Request Body  
{
 	"email" : "patelsakshi1998@gmail.com",
	"password" : "iamdumb"
}

2. POST localhost:3000/api/users/register
Request Body
{
 	"name": "Sakshi Patel",
	"email" : "patelsakshi1998@gmail.com",
	"password" : "iamdumb"
}

3. GET localhost:3000/api/universities
Headers {
    "auth-token" : <TOKEN_RECEIVED_FROM_LOGIN>
}

4. GET localhost:3000/api/users/
Headers {
    "auth-token" : <TOKEN_RECEIVED_FROM_LOGIN>
}
