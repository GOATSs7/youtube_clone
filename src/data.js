export const API_KEY = "AIzaSyClLT7iigRSkWNvx1qnLOGYJ9QK8x7CcVg";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};

let obj = {
  items: [
    {
      kind: "youtube#video",
      etag: "IEFVP9qNiSqa5vcIxiLrNmuxNQs",
      id: "7hYbrdC_-s8",
      snippet: {
        publishedAt: "2024-02-12T07:14:05Z",
        channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        title: "Usher’s Apple Music Super Bowl Halftime Show",
        description:
          "For a limited time get up to 3 months free* to listen to USHER’s new album COMING HOME in Spatial Audio on Apple Music: https://apple.co/UsherSuperBowl\n*New subscribers only. Three month offer valid through February 15, 2024 in eligible\nregions and must be redeemed on iPhone, iPad, or Mac. One month free for other new\nsubscribers. Plan automatically renews at your region's price per month until cancelled.\nTerms apply.\n\nWatch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.com\nCheck out our other channels:\nNFL Mundo https://www.youtube.com/mundonfl\nNFL Brasil https://www.youtube.com/c/NFLBrasilOficial\nNFL UK https://www.youtube.com/channel/UCVe0dAja_vZCmvfHXjtdRQA \nNFL Fantasy Football https://www.youtube.com/nflfantasyfootball\nNFL Play Football https://www.youtube.com/playfootball\nNFL Throwback http://www.youtube.com/nflvault\nNFL Films http://www.youtube.com/nflfilms\nNFL Network http://www.youtube.com/nflnetwork\n\n#NFL #Football #AmericanFootball",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/7hYbrdC_-s8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/7hYbrdC_-s8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/7hYbrdC_-s8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/7hYbrdC_-s8/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/7hYbrdC_-s8/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "NFL",
        tags: ["NFL", "Football", "American Football", "sport", "sports"],
        categoryId: "17",
        liveBroadcastContent: "none",
        defaultLanguage: "en",
        localized: {
          title: "Usher’s Apple Music Super Bowl Halftime Show",
          description:
            "For a limited time get up to 3 months free* to listen to USHER’s new album COMING HOME in Spatial Audio on Apple Music: https://apple.co/UsherSuperBowl\n*New subscribers only. Three month offer valid through February 15, 2024 in eligible\nregions and must be redeemed on iPhone, iPad, or Mac. One month free for other new\nsubscribers. Plan automatically renews at your region's price per month until cancelled.\nTerms apply.\n\nWatch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.com\nCheck out our other channels:\nNFL Mundo https://www.youtube.com/mundonfl\nNFL Brasil https://www.youtube.com/c/NFLBrasilOficial\nNFL UK https://www.youtube.com/channel/UCVe0dAja_vZCmvfHXjtdRQA \nNFL Fantasy Football https://www.youtube.com/nflfantasyfootball\nNFL Play Football https://www.youtube.com/playfootball\nNFL Throwback http://www.youtube.com/nflvault\nNFL Films http://www.youtube.com/nflfilms\nNFL Network http://www.youtube.com/nflnetwork\n\n#NFL #Football #AmericanFootball",
        },
        defaultAudioLanguage: "en",
      },
      contentDetails: {
        duration: "PT13M21S",
        dimension: "2d",
        definition: "hd",
        caption: "false",
        licensedContent: true,
        contentRating: {},
        projection: "rectangular",
      },
      statistics: {
        viewCount: "14277970",
        likeCount: "370865",
        favoriteCount: "0",
        commentCount: "27694",
      },
    },
  ],
};
