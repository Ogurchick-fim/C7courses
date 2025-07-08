import emailjs from "emailjs-com"; // or "emailjs/browser"

const sendEmail = () => {
  emailjs
    .send(
      "service_vcd2h2o",
      "template_kl4zk39",
      {
        from_name: "John",
        reply_to: "timlim.2006@gmail.com",
        to_email: "your@email.com", // required if template expects it
        message: "Hello",
      },
      "gV87tEjzaBDjcbGs1"
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      console.error("FAILED...", err);
    });
};