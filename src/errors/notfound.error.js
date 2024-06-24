const { StatusCodes } = require("http-status-codes");
const BaseError = require("./Baseerror");

class NotFound extends BaseError{
    constructor(data){
        super(
            "Not found",
            StatusCodes.NOT_FOUND,
            `The requested id ${data} is not found`,
            {}
            
        )
    }
}
module.exports=NotFound;