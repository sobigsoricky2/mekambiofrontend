import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "info@mekambio.com",
      from: "pranav@coursenator.com",
      subject: `${req.body.subject}`,
      html: `<h2>name - ${req.body.name || `none`}</h2> <h2>surname - ${
        req.body.surname
      }</h2> <h2>email - ${req.body.formEmail}</h2>   <h2>phone - ${
        req.body.phone
      }</h2>   
      `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
