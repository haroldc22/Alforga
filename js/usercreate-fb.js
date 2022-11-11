createUserWithEmailAndPassword(auth, email, password)

            
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...user.uid
    set(ref(database, 'users/' + user.uid), {
        email: email,
        password: password,
    
  })
  .then(() => {
  // Data saved successfully!
  alert('user created sucesfull');

})
.catch((error) => {
  // The write failed...
  alert(error);
});
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });