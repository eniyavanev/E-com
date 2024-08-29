const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  //console.log("error", err);

  // Default status code to 500 if not already set
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //console.log(statusCode);

  let message = err.message;
  //console.log("errorssssssssssssss", message);

  //Handle specific CastError for ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    res.status(404);
  } else {
    res.status(statusCode);
  }

  res.json({
    message,
  });
};

export { notFound, errorHandler };
