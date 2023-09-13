import nodemailer from "nodemailer";

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PW;

console.log(email);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });