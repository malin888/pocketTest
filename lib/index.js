const pocketRequestUrl = "https://getpocket.com/v3/oauth/request"
const pocketAuthorizeUrl = "https://getpocket.com/v3/oauth/authorize"

const consumerKey = "108458-7ba405c634734be7ee12f75";
const redirectUri = "https://malin888.github.io/pocketTest/"

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


function fetchCode(){
  let code = "";
  fetch(pocketRequestUrl, requestDetails)
    .then(response => response.json())
    .then(data => code = data.code);

  return code
}


function buildLink() {
  return `https://getpocket.com/auth/authorize?request_token=${fetchCode()}&redirect_uri=${redirectUri}`
}

const codeBtn = document.getElementById("code-button");
codeBtn.setAttribute("href", buildLink());




// const code = "d3c51ad4-8773-9d16-614d-6a7c43"
const authorizeDetails = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "X-Accept": "application/json"
  },
  body: JSON.stringify({
    "consumer_key": consumerKey,
    "code": fetchCode()
  })
}

function getToken(){
  fetch(pocketAuthorizeUrl, authorizeDetails)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
}

const authBtn = document.getElementById("auth-button");

authBtn.addEventListener("click", () => {
  const token = getToken();
  console.log(token);
})
