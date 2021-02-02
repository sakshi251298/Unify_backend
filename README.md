# Example (Frontend Javascript)
1. Login -
fetch('https://unify-api-server.herokuapp.com/api/login', {
    method: 'POST',
    body: { 
        "email" : "patelsakshi1998@gmail.com",
        "password" : "iamdumb"
    }
}).then(response => response.json()).then(response => {
    console.log(response)
})

2. Universities -
fetch('https://unify-api-server.herokuapp.com/api/universities', {
    method: 'GET',
    headers: {
    'auth-token': '<TOKEN_RECIEVED_FROM_LOGIN>'
    },
}).then(response => response.json()).then(response => {
    console.log(response)
})

# Routes 

1. POST https://unify-api-server.herokuapp.com/api/login
Request Body  
{
 	"email" : "patelsakshi1998@gmail.com",
	"password" : "iamdumb"
}

2. POST https://unify-api-server.herokuapp.com/api/users/register
Request Body
{
 	"name": "Sakshi Patel",
	"email" : "patelsakshi1998@gmail.com",
	"password" : "iamdumb"
}

3. GET https://unify-api-server.herokuapp.com/api/universities
Headers {
    "auth-token" : <TOKEN_RECEIVED_FROM_LOGIN>
}

4. GET https://unify-api-server.herokuapp.com/api/users/
Headers {
    "auth-token" : <TOKEN_RECEIVED_FROM_LOGIN>
}
