import Cart from "../models/CartModel.js";
import Course from "../models/CourseModel.js";
import Coupon from "../models/CouponModel.js";

const addToCart = async ({ courses, coupon }) => {
  try {
    const user = req.user;
    const coursesArr = await Course.find({ _id: courses }).exec();
    const validCoupon = await Coupon.findOne({ _id: coupon }).exec();
    const cartTotal = coursesArr.reduce((total, value) => {
      return total + value.price;
    }, 0);
    const totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(0);
    const params = {
      orderBy: user.data,
      courses: coursesArr.map((value) => {
        return { course: value };
      }),
      coupon,
      cartTotal,
      totalAfterDiscount: totalAfterDiscount,
    };
    const newCart = await Cart.create(params);
    return newCart;
  } catch (error) {
    return error;
  }
};

export default {
    addToCart,
};
