async function validateUser(username_txt, password_txt, email_txt, firstName_txt, lastName_txt, phoneNumber_txt) {
   try {
      let response = await fetch(
         "http://localhost:8080/project_backend/rest/users/register",

         {
            method: "POST",
            headers: {
               Accept: "*/*",
               "Content-Type": "application/json",
               username: username_txt,
               password: password_txt,
               email: email_txt,
               firstName: firstName_txt,
               lastName: lastName_txt,
               phoneNumber: phoneNumber_txt,
            },
         }
      );
      if (response.status == 200) {
         return 200;
      } else if (response.status == 409) {
         return 409;
      } else if (response.status == 400) {
         return 400;
      } else {
         return 500;
      }
   } catch (err) {
      return Promise.reject(response.status);
   }
}

function isValidPhoneNumber(phoneNumber) {
   valideNumber = true;

   if (phoneNumber.length != 9 && phoneNumber.length != 10) valideNumber = false;
   // Check if the phone number has the expected format
   if (!phoneNumber.match(/^\d+$/)) {
      valideNumber = false;
   }
   return valideNumber;
}

function isValidEmail(email) {
   return email.includes("@") && email.includes(".");
}
async function updatePhoto(username, pass, newPhoto) {
   try {
      let response = await fetch("http://localhost:8080/project_backend/rest/users/updatePhoto", {
         method: "PUT",
         headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            username: username,
            password: pass,
            newPhoto: newPhoto,
         },
      });

      if (response.status == 200) {
         return 200;
      } else {
         return 409;
      }
   } catch (err) {
      return Promise.reject(response.status);
   }
}

module.exports = {
   validateUser,
   isValidPhoneNumber,
   isValidEmail,
   updatePhoto,
};
