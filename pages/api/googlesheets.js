import { google } from "googleapis";

export default async function googlesheets(req, res) {
  console.log(process.env.GOOGLE_PRIVATE_KEY);
  console.log(process.env.GOOGLE_CLIENT_EMAIL);
  console.log(process.env.GOOGLE_SHEET_ID);
  try {
    if (req.method != "POST") {
      res.status(405).send({ message: "Only Post requests are allowed" });
    }

    const body = JSON.stringify(req.body);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace("/\\n/g", "\n"),
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
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.email]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message ? error.message : "Something Went Wrong",
    });
  }
}
