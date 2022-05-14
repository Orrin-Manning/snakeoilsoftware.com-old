import dbConnect from "../../../lib/dbConnect";
import Contact from "../../../models/Contact";

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
      try {
        /* Create new model in the database */
        const contact = await Contact.create(req.body);
        res.status(201).json({ success: true, data: contact });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
