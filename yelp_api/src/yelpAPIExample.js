import yelp from 'yelp-fusion'


// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = "0CXTw0A9ICuRceSreQ0EKan6-sqY9fUcyyQU7_S5BPdEWPVOObcEeia5boBWT_3c3TVVRxbfScCTBxeXHnJiIA-Dn2BAu6pYrWsWiLQ_IEyYM2C95eAkeC8e7CfnXXYx";

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};
const client = yelp.client(apiKey);
client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});
