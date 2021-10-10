import https from 'https';
const requestGet = async (url, callback) => {
  https.get(url, (resp) => {
    let data = '';
    // A data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log(err)
  });
}

const requestMethod = {
  requestGet
};

export default requestMethod;