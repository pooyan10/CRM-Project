import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to db" });
    return;
  }
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    console.log(id);
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "Data deleted" });
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ status: "failed", message: "error in deleting data" });
    }
  }
}
