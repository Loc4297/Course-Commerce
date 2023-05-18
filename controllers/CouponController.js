import couponRepository from "../repositories/CouponRepository.js";

const createCoupon = async (req, res) => {
  try {
    let newCoupon = await couponRepository.createCoupon(req.body);
    res.json({
      data: newCoupon,
    });
  } catch (error) {
    res.json(error);
  }
};

export default {
  createCoupon,
};
