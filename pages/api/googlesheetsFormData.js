import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    if (req.method != "POST") {
      res.status(405).send({ message: "Only Post requests are allowed" });
    }
    console.log("run");
    const body = JSON.stringify(req.body);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace("/\\n/g", "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const valuesRange = sheets.spreadsheets.values.get();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet2!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.surname, body.formEmail, body.phone]],
      },
    });
    console.log(response);
    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message ? error.message : "Something Went Wrong",
    });
  }
}
