const pocketUrl = "https://getpocket.com/v3/oauth/request"

const consumerKey = "108458-7ba405c634734be7ee12f75";
const redirectUri = "https://google.com"

const requestDetails = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "X-Accept": "application/json"
  },
  body: JSON.stringify({
    "consumer_key": consumerKey,
    "redirect_uri": redirectUri
  })
}
fetch(pocketUrl, requestDetails)
  .then(response => response.json())
  .then(data => console.log(data));

console.log("Javascript working")
