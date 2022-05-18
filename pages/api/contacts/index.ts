import dbConnect from "../../../lib/dbConnect";
import Contact from "../../../models/Contact";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendConfirmationEmail = ({ firstname, lastname, email }) => {
  const msg = {
    to: email,
    from: "confirmation@snakeoilsoftware.com",
    templateId: process.env.CONFIRMATION_TEMPLATE_ID,
    dynamic_template_data: {
      firstname: firstname,
      lastname: lastname,
    },
  };

  return sgMail.send(msg);
};

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        /* Find all data in the database */
        const contacts = await Contact.find({});
        res.status(200).json({ success: true, data: contacts });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
      const secret = process.env.RECAPTCHA_PRIV_KEY;
      const token = req.body.token;

      const result = await (
        await fetch(recaptchaURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${secret}&response=${token}`,
        })
      ).json();

      if (result.success) {
        try {
          /* Create new model in the database */
          const contact = await Contact.create(req.body.form);
          res.status(201).json({ success: true, data: contact });
        } catch (err) {
          res.status(400).json({ success: false });
        }
      } else {
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
