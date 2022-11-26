export default async function handler(req, res) {
  console.log("Entered the serverless function");

  return res.status(200).json("hello");
}
