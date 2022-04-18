<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form</title>
</head>
<body>

    <div>
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="First Name">
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" placeholder="Last Name">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Email">
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Password">
    </div>
    <input id="formSubmit" type="submit" value="Submit">


    <script>
      let submit = document.querySelector('#formSubmit');
      submit.addEventListener('click', function(e){
        e.preventDefault();
        let firstName = document.querySelector('#firstName').value;
        let lastName = document.querySelector('#lastName').value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        let data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        };

        // console.log(JSON.stringify(data));

        // fetch('api/index.cfm?method=users')
        //   .then(response => response.json())
        //   .then(data => { userData = data })
        //   .then(() => {
        //     console.log(userData);
        //   })
        
        fetch('api/index.cfm?method=users', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
          .then(data => {
            console.log(data);
          })
      });
    </script>
</body>
</html>