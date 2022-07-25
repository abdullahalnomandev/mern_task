import Users from "../models/usersModel.js";
import AppError from "../utils/appError.js";



const getUsers =async (req,res,next) => {

    try {
        const users = await Users.find({})
        console.log(users[0]);
        //    const { password, passwordConfirm, ...othersUserDetails } = users._doc;
        res.status(200).json({
            status: 'success',
            results:users.length,
            data:users
        })
    } catch (error) {
        next(new AppError(error))
    }

}

export { getUsers };