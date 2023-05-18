import { body, validationResult } from "express-validator";
import userRepository from "../repositories/UserRepository.js";
// import cartRepository from "../repositories/CartRepository.js";
import Cart from "../models/CartModel.js";
import Course from "../models/CourseModel.js";
import Coupon from "../models/CouponModel.js";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  let user = await userRepository.login({ email, password });
  res.json({
    data: user,
  });
};

const register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const user = await userRepository.register({
      name,
      email,
      password,
      phone,
    });
    res.status(201).json({
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};

const getDetailUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

// const userCart = async (req, res) => {
//   try {
//     const { courses } = req.body;
//     const user = req.user;
//     const coursesArr = await Course.find({ _id: courses });
//     const cartTotal = coursesArr.reduce((total, value) => {
//       return total + value.price;
//     }, 0);
//     const params = {
//       orderBy: user.data,
//       courses: coursesArr.map((value) => {
//         return { course: value };
//       }),
//       cartTotal,
//     };
//     const newCart = await Cart.create(params);
//     res.status(201).json(newCart);
//   } catch (error) {
//     res.send(error);
//   }
// };

const addToCart = async (req, res) => {
  try {
    const { courses, coupon } = req.body;
    const user = req.user;
    const coursesArr = await Course.find({ _id: courses });
    console.log(coursesArr);
    const validCoupon = await Coupon.findOne({ _id: coupon });
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
    res.status(201).json(newCart);
  } catch (error) {
    res.send(error);
  }
};

const readCart = async (req, res) => {
  try {
    const currentCart = await Cart.findOne().sort({"createdAt": -1})
    res.json(currentCart);
  } catch (error) {
    res.send(error);
  }
};

export default {
  login,
  register,
  getDetailUser,
  deleteUser,
  addToCart,
  readCart,
};
