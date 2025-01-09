const successResponse = (res, message, data) => {
   return res.status(200).json({ success: true, message, data });
};

const errorResponse = (res, error) => {
   return res.status(400).json({ success: false, error });
};

module.exports = { successResponse, errorResponse };
