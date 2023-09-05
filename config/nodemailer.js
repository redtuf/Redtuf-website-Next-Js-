import nodemailer from "nodemailer";

const email = "service.redtuf@gmail.com";
const password = "ybcmcmndouppdqsy";

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: "gmail",
    auth :{
        user: email,
        password,
    }
});

export const mailOptions = {
    from : email,
    to: email
}