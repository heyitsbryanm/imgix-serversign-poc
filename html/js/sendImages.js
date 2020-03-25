async function sendImages() {

  // build the list of images to sign
  let images = document.querySelectorAll('img');
  let reqBody = { urls: [], srcset: false }
  for (let i = 0; i < images.length; i++) {
    reqBody.urls.push(images[i].src)
  }

  // fetch options
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(reqBody)
  };
  let p = new Promise(res => {
    // send request and replace new objects
    return fetch("http://localhost:3001/sign_images", requestOptions)
      .then(response => response.text())
      .then(result => {
        return res(result);
      })
      .catch(error => console.log('error', error));
  });
  return p;

}