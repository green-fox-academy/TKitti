let httpRequest = new XMLHttpRequest();
httpRequest.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=N3Re1D2plTKmuVpxq51cq6AGAqWG1Xyi&limit=16",
  true
);
httpRequest.onload = () => {
  let content = JSON.parse(httpRequest.responseText);
  let body = document.getElementsByTagName("body")[0];
  for (let i = 0; i < content.data.length; i++) {
    let gifUrl = content.data[i].images.fixed_height_downsampled.url;
    let newImg = document.createElement("img");
    let thumbnailUrl = content.data[i].images.fixed_width_small_still.url;
    newImg.setAttribute("src", thumbnailUrl);
    newImg.addEventListener("click", () => {
      newImg.setAttribute("src", gifUrl);
    });
    body.appendChild(newImg);
  }
};
httpRequest.send();