exports.handler = async function(event) {
  const { message } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: "You said: " + message
    })
  };
};
