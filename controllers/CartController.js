import cartRepository from "../repositories/CartRepository.js";

const addToCart = async (req, res) => {
    const { courses , coupon } = req.body;
    try {
        const newCart = await cartRepository.addToCart({
            orderBy,
            courses,
            coupon,
            cartTotal,
            totalAfterDiscount,
          });
          res.status(201).json({
            data: newCart,
          });
    } catch (error) {
        res.send(error)
    }
}

export default {
    addToCart,
  };
  