import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
type SheetForm = {
  name: string;
  surname: string;
  formEmail: string;
  phone: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method != "POST") {
      res.status(405).send({ message: "Only Post requests are allowed" });
    }
    console.log("run");
    const body = req.body as SheetForm;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC1WU987doAhKNQ\n9p35twd9P7EjlBPiX5qTUPlpOixGO3yEb6MkDAY5DWqvnj7yyll/XN52XPV6X3iW\nrSpmQfVfYxLiQEgA8sq4Mw4EHg1P7Icm7RD8TXRikisdlimnuFW++CJ7z/mFV/Ea\ngNA/R6stV8SwaXSL34aiUWgwjWZ/3GNaLn4w3MXyYL9J1hG1CTriDy6fAbdwuBri\nq0hgkVjaN9EF9YjiCDQWkHf8f0uNLzeTz1WMjea0j9AGgSDpRW3K12gnmza96drp\nLnKb4kIcrWpbeoESqkdaqvWPQetJfqckm9gBw5wPcaq9wG5TA3QbmZpRcBV7VgT3\nsID1rDWtAgMBAAECggEAHkd7uKnEGQsMc8PBq8SuKPD+BClAyq7Y0dkW08WFR/K9\nvyUesbGaRmNhmVIMQ6CaoePhNxUdXaHcMhhWuH0x2Yvixskh3JqtU2Ue5XwZD+u3\nwz2Y9O9/y8eJEGcWrGzgUEMBCvg2Otfsp1azrqUqRSde7W+mKIaZZbe+9EBfyWA8\nOv5dvxNnCCz9DOoxjG+1Z5EV0bACSSIODoElibf0CCWvat3a5XMSRIxshjJgo3Ot\nnQfHhGx6CMCp8loWQX8c8Ng5cFoqVR5osYpFi5DdK/QUFh5KKywwfYSKNJjGHlqu\nx1wAqAsQt6dwkiyZ3MOttZZdk42sw3PzrtgUq28ZAQKBgQDp1+WjpU1aAN9q9TnO\nFKt41Hw/lptm45g4pas0ryDrmeh6tnWe0T/BqBC8C3hG/k8QsOOz6w3/ZUnAUCBh\nrMwOP3WtEMBGl99kofHCDLyATmA9a4P0n47V+In8kuMzx7OpQ20LFadmnim7Zr52\nxG/LymjJ/Q3xvcakUvElIahYLQKBgQDGiBuRKAXMRUJGSLhTzRFvfE2F+5hMeiqn\nGCL+NTw3BOqkurxuW3XtfJQKEPzAUZ656FPC8MwUJw2RxtLmhrWm5ndmUM1gWC60\njpe6umUy49Sqt1Cf20/bCsVmNsaw4hpqKZhzt01tACOV4ufnc97TiIGmxTAyDiOg\n6hiKSlRDgQKBgGkglW2PiAnZcJeuLVGXe0s0A7O2qqCD21BEMobZ4KvqolhgpNpE\naixOuU9AvM71z2fKjmO5Xa6ew5xAqX4f6BDTuLyYVkimSFj+cShy/1+TXLLgHg+g\nl99b//TbuGbz9bI3zNL55is9GbfVRfUw9K2ijp+YM2elkKMZYq31xq/1AoGAZPFL\nYvDAke4dFnNfFWzNEqxXFmqoMypiiXciQ7J5nVfonj08Fbh3K3sOIlgkyvw1Aj14\naUPZ391Dbv1yujeAIQ5JY0JuSjBL/w4JY63mSovA09RFMCJoZe0CFUiAmes8lwHz\nO9LVkThi35DxbKNjhpZ/pXXZXXoG74hXVekZEwECgYBDuH+qf40elO+MgPnALfjG\ndWT2zdXUK3gm8S1F/Ir19ZVoPSXe35LSr4K9WiqoKzHLo/b6ElXijjfxWj+jfSo+\nUOkQS0MdmHQEUus4+kmAT5V459TCoagri4Tjc/gCLDE4tJRjI46uDWW20RDSmkDM\nQ5Su0d2crIqbykHiC8i8+w==\n-----END PRIVATE KEY-----\n"?.replace("/\\n/g", "\n"),
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
