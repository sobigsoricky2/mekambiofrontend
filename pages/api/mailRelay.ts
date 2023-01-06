import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type SheetForm = {
  email: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method != "POST") {
      res.status(405).send({ message: "Only Post requests are allowed" });
    }
    const body = req.body;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "ukRNKGy1FZxNajq6NKAVMqsh1URk5xg85LDsfHac",
      },
    };
    const mailRelayData = JSON.stringify({
      status: "active",
      email: body.email,
    });

    const response = await axios.post(
      "https://mekambio.ipzmarketing.com/api/v1/subscribers",
      mailRelayData,
      config
    );

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    throw(error)
    return res.status(500).send({
      message: error.message ? error.message : "Something Went Wrong",
    });
  }
}
