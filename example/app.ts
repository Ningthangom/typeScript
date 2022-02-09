// never type will never return anything

function generateError (message: string, code: number):never {
    throw{message: message, errorCode: code}
}

generateError("An error code was encountered", 400);