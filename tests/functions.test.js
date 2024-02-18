const register = require("./functions");

//Verifica se o user com todos os campos corretos é validado
<<<<<<< Updated upstream
test("User successfully validated", async  ()=>{
   try{
   const response = await register.validateUser("e", "dseddeedf", "jood@ff.eom" ,
   "Danifxdela", "Menfddes", "911061551");
       expect(response).toBe(200);
       
   }catch (error){
=======
test("User successfully validated", async () => {
   try {
      const response = await register.validateUser(
         "e",
         "dseddeedf",
         "joo@d.com",
         "Danifxdela",
         "Menfddes",
         "911061551"
      );
      expect(response.status).toBe(200);
   } catch (error) {
>>>>>>> Stashed changes
      expect(error).toBeUndefined();
   }
});

//Verifica se o user é validado com email inválido
test("User not validated: invalid email", async () => {
   try {
      const response = await register.validateUser("fjose", "12345", "ddscd", "Daniefla", "Mefndes", "989061551");
      expect(response).toBe(400);
   } catch (error) {
      expect(error).toBeUndefined();
   }
});

//Verifica se o user é validado com email já existe
test("User not validated: email allready exists", async () => {
   try {
      const response = await register.validateUser(
         "1234",
         "1234",
         "vafnia@gmail.com",
         "Daniefla",
         "Menfdes",
         "912361551"
      );
      expect(response).toBe(409);
   } catch (error) {
      expect(error).toBeUndefined();
   }
});

//Verifica se o user é validado com username já existe
test("User not validated: username allready exists", async () => {
   try {
      const response = await register.validateUser(
         "vania1",
         "12345",
         "daniddfe@gmail.com",
         "Dafnifedla",
         "Mfenfddes",
         "985236521"
      );
      expect(response).toBe(409);
   } catch (error) {
      expect(error).toBeUndefined();
   }
});

//Verifica se o user é validado com phone inválido
test("User not validated: invalid phone", async () => {
   try {
      const response = await register.validateUser(
         "1234",
         "1234",
         "danerdie@gmail.com",
         "Dasdfniela",
         "Mfffendes",
         "0780"
      );
      expect(response).toBe(400);
   } catch (error) {
      expect(error).toBeUndefined();
   }
});

//Veirifica se phone number é valido
test("Phone number is valid", () => {
   const response = register.isValidPhoneNumber("989562222");
   expect(response).toBe(true);
});

test("Phone number is not valid", () => {
   const response = register.isValidPhoneNumber("911061");
   expect(response).toBe(false);
});

test("photo updated with sucess", async () => {
   try {
      const response = await register.updatePhoto(
         "vania",
         "vania",
         "https://www.bin8rR1%2bBU&id=E628E314F244CBDFCAC95ED777ADE749FBF9ADAE&thid=OIP.E8rR1-BUCOWIHpS78uukkAHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.13cad1d7e05408e5881e94bbf2eba490%3frik%3drq35%252b0nnrXfXXg%26riu%3dhttp%253a%252f%252f1.bp.blogspot.com%252f-Dy42UBkxXXc%252fU4P9llH1IWI%252fAAAAAAAAD-I%252fMT2evyWmGFw%252fs1600%252fimagens-imagens-paisagens-natureza-758ab5.jpg%26ehk%3daMOFfe5Gxh8ql7CG6bP47W0%252bpg0otCjSiZ%252f37kNuRmA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=900&expw=1600&q=imagem&simid=608035643125535435&FORM=IRPRST&ck=22D376B96454479050A87180DF7334B7&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0"
      );
      expect(response).toBe(200);
   } catch (error) {
      expect(error).toBeUndefined();
   }
});

test("email is valid", () => {
   expect(register.isValidEmail("33345@gmail.com")).toBe(true);
});
test("email is not valid", () => {
   expect(register.isValidEmail("sdcjbsjdfvbjhdfbvbsss")).toBe(false);
});
