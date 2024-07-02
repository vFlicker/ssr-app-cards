export const openTwitterShare = (tweet) => {
  const twitterIntentURL = "https://twitter.com/intent/tweet?";
  const text = encodeURIComponent(tweet);
  const url = `${twitterIntentURL}text=${text}&related=rohitkrops`;
  window.open(url, `Share on Twitter`, "height=500, width=600");
};