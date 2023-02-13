const getTweets = async (ids: string[]) => {
  if (ids.length === 0) return [];

  try {
    const queryParams = new URLSearchParams({
      ids: ids.join(","),
      expansions:
        "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
      "tweet.fields":
        "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
      "user.fields":
        "id,name,profile_image_url,protected,url,username,verified",
      "media.fields":
        "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
    });

    const response = await fetch(
      `https://api.twitter.com/2/tweets?${queryParams}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    const tweets = await response.json();
    const getAuthorInfo = (authorId: string) => {
      return tweets.includes.users.find((user: any) => user.id === authorId);
    };
    const getReferencedTweets = (mainTweet: any) => {
      return (
        mainTweet?.referenced_tweets?.map((refTweet: any) => {
          const fullReferencedTweet = tweets.includes.tweets.find(
            (tweet: any) => tweet.id === refTweet.id
          );
          return {
            type: refTweet.type,
            author: getAuthorInfo(fullReferencedTweet.author_id),
            ...fullReferencedTweet,
          };
        }) || []
      );
    };

    return tweets.data.reduce((allTweets: any[], tweet: any) => {
      const tweetWithAuthor = {
        ...tweet,
        media: tweet.attachments?.media_keys.map((key: string) =>
          tweets.includes.media.find((media: any) => media.media_key === key)
        ),
        referenced_tweets: getReferencedTweets(tweet),
        author: getAuthorInfo(tweet.author_id),
      };
      return [tweetWithAuthor, ...allTweets];
    }, []);
  } catch (_) {
    throw new Error("Failed to fetch tweets");
  }
};

export default getTweets;
