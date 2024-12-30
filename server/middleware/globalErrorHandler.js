const globalErrorHandler = async(error,req,res,next)=>{
  const err = new Error();
  err.status = error.status || 500;
  err.message = error.message || "Internal Server Error";
  res.send(err);
}

export default globalErrorHandler;