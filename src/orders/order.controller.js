
const Order = require("./order.model");
const createAOrder = async (req, res) => {
  try {
    const newOrder =  await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};
const getOrderByEmail = async(req,res) =>{
  try {
    const {email} = req.params;
    const orders = await Order.find({email}).sort({createdAt:-1});
    if(!orders){
      return res.status(500).json({ message: "order not found" });
    }
    res.status(200).json(orders);


  } catch (error) {
    onsole.error("Error fetching order", error);
    res.status(500).json({ message: "Failed to fetch an order" });
  }
}
  
  module.exports = {
    createAOrder,
    getOrderByEmail
  };


