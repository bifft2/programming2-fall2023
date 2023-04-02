const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "vEH1UMHM39a54Za5X";
const serviceID = "service_mxwnvlt";
const templateID = "template_njks42p";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
   e.preventDefault();

   submitBtn.innerText = "Just a moment...";

   const inputFields = {
      to_name: "Ms. Ifft",
      from_name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
   };

   emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message Sent Successfully.";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    });
});





