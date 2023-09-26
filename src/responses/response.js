const customMessages = {
    HEALTH_CHECK_SUCCESS: "Health Check Success",
    CATEGORY_ALREADY_EXIST: "Category already exist",
    SUBCATEGORY_ALREADY_EXIST: "Sub category already exist",
    TERITARY_CATEGORY_ALREADY_EXIST: "Teritary category already exist",
    INVENTORY_ID_NOT_FOUND: "Inventory ID not exist!",
    USERID_ID_REQUIRED: "User Id is required",
    PRODUCT_ALREADY_EXIST: "Product Name already exist",
    MOBILE_UPDATE_AFTER_7_DAYS: "Mobile number cannot update within 7 days from Registration",
    USER_NOT_FOUND: "User not found",
    INVALID_EMAIL: "Invalid Email",
    ENTER_NEW_MPIN: "Enter New Mpin",
    PASSBOOK_NOT_FOUND: "Passbook not found",
    RECEIPT_NOT_FOUND: "Receipt not found",
    PASSBOOK_REDEEMED_SUCCESS: "Passbook Redeemed successfully",
    REDEMPTION_ALREADY_COMPLETED: "Redemption already completed",
    PASSBOOK_NOT_IN_STATE: "Passbook not in state",
    PASSBOOK_IN_STATE: "Passbook in state",
    RECEIPT_Exists_MORE: "Receipt exists more than one",
    RECEIPT_Exist: "Receipt already exist",
    Invalid_Scheme: "SGS only allowed",
    GOLD_NOT_FOUND: "Gold rate not found",
    GPP_CUSTOMER_API_NO_DATA: "GPP API returns no data",
    PASSBOOK_NOT_EXIST: "Passbook not exist",
    USER_EXIST_WITH_SAME_NUMBER: "User exist with same number",
    INVALID_PINCODE: "Please provide valid pincode",
    Invalid_Installment: "InstallmentNo less than 11"
};

const messages = {
    success: "Success",
    somethingWrong: "Something Went Wrong",
    inserted: "Inserted Successfully",
    created: "Created Successfully",
    updated: "Updated Successfully",
    deleted: "Deleted Successfully",
    otpSendSuccessful: "OTP Send Successfully",
    otpVerifySuccessful: "OTP Verify Successfully",
    alreadyExist: "Data Already Exist",
    tokenExpired: "Token Expired",
    tokenEmpty: "Unauthorized request",
    tokenInvalid: "Token Invalid",
    invalidOTP: "OTP Invalid",
    invalidPassword: "Invalid Password",
    serverError: "Internal Server Error",
    invalidParams: "Invalid Params",
    alreadyRegistered: "User already registered",
    notRegistered: "User not registered",
    invalidCredentials: "Invalid credentials",
    loginSuccessful: "Logged in successfully",
    logoutSuccessful: "Logout successfully",
    passwordAreSame: "new password and confirm password should be same",
    resetPassword: "Reset password successfully",
    barcodeExists: "Barcode already exists",
    userNotExist: "This Mobile Number is not registered with us",
    outOfStock: "Product is Out of Stock",
    timeAlreadyEXist: "From Time or To time Already Exist.",
    categoryExist: "Category Already Exists",
    dataNotFound: "Data not found",
    invalidFileUpload: "Error occured while uploading image / file",
    invalidAccess: "Invalid Access",
    currentPasswordWrong: "current Password is Wrong",
    mobileNumberExists: "Mobile number already exists",
    passbookUpdated: "passbook updated successfully",
    alreadyExist : "this user already exist in another group",
    onlySuperAdmin:"Super Admin only can create group",
    onlySuperAdd:"Super admin only can add user to group"
};

const sendSuccessResponse = (req, res, status, message, data) => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};

const sendErrorResponse = (req, res, status, message, data) => {

  return res.status(status).json({
    status,
    message,
    data,
  });
};

const joierrors = (req, res, status, message, err) => {
  let error = err.details.reduce((prev, curr) => {
    prev[curr.path[0]] = curr.message.replace(/"/g, "");
    return prev;
  }, {});

  return res.status(status).json({
    status,
    message,
    error,
  });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  joierrors,
  customMessages,
  messages
};
