// i am creating my first Lambda function
module.exports.handler = async (event) => {
  let response = {
    statusCode: 200,
    message: JSON.stringify("hello world"),
    input: event,
  };

  return response;
};
