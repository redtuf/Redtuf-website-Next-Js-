// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {mailOptions, transporter} from "../../config/nodemailer"

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;
    if(!data.name || !data.email || !data.subject || !data.country || !data.website){
      res.status(401).json({message:"Please fill all the fields"})
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject : data.subject,
        text: "This is a test string",
        html: "<h1>Test Title</h1><p>Some Body Test.</p>"
      })

      return res.status(200).json({ message : "successfully sent message" });

    } catch (err) {
      console.log(err);
      return res.status(400).json({ message : "err.message" });

    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
