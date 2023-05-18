import Coupon from "../models/CouponModel.js";

const createCoupon = async ({ name, expiry, discount }) => {
  try {
    const checkName = await Coupon.findOne({ name }).exec();
    if (checkName) {
      return "Name already in use";
    } else {
      const expiresIn = Date.now() + + expiry * 24 * 60 * 60 * 1000;
      const newCoupon = await Coupon.create({
        name,
        expiry: expiresIn,
        discount,
      });
      return newCoupon;
    }
  } catch (error) {
    return error;
  }
};

export default {
  createCoupon,
};
