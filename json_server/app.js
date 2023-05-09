var universityAPI = 'http://localhost:3000/university';
fetch(universityAPI)
   .then(function(value){
      return value.json();
   })
   .then(function(respond){
    console.log(respond);
   })