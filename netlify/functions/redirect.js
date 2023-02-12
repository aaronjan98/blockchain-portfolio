exports.handler = async (event, context, callback) => {
  const headers = {
    'Content-Disposition': 'inline; filename="resume.pdf"'
  };
  return callback(null, {
    statusCode: 302,
    headers,
    body: '',
    isBase64Encoded: false,
    redirect: 'https://resume.aaronjanovitch.com'
  });
};
