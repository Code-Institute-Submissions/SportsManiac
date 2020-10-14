
// Process the API Url for specific tasks
function processURL(url, parameter) {
    var ammendedUrl = url.replace('&APIKEY&', API_KEY);
    ammendedUrl = ammendedUrl.replace('&PARAMETER&', parameter);

    return ammendedUrl;
}