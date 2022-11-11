signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    var lgDate = new Date();
    update(ref(database, 'users/' + user.uid), {
        last_login: lgDate,
    
  })
  .then(() => {
   // Data saved successfully!
   alert('user logged in sucesfull');

 })
 .catch((error) => {
   // The write failed...
   alert(error);
 });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

  signOut(auth).then(() =>{
    // signOut-out successful.

  }).catch((error) => {
    // an error happened
  });

;