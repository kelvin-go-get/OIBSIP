<<<<<<< HEAD
=======
/*
 * Handles HTTP requests, (POST) - to create new orders in a database
 * and responds accordingly (success or failure) of the operation
*/
>>>>>>> 11c8edc9dd8ac1a8163bec0d56faccd193272507
import client  from "../../lib/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const newOrder = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "order",
            name: newOrder.name,
            address: newOrder.address,
            phone: newOrder.phone,
            total: newOrder.total,
            method: newOrder.method,
            status: 1,
          })
          .then((data) => {
            res.status(200).json(data._id);
          });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error, check console" });
      }
      break;
  }
}
