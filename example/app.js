// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error code was encountered", 400);
