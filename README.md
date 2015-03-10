# Tweets
Returning user tweets using json and ajax

# 1.Briefly describe your team’s project?

Twixer is an application built on twitter gateway Each user in the group will be able to login in to his/her account. User can see all the tweets posted in to the account. The users will be able to add other people in the group. Each user can post the tweet but the tweet will not be posted on the twitter unless it wins a majority of votes. The member can access these groups and see what posts have not been published yet and can vote for it. Each voting will be shown as a green sign, while every reject will be shown as red sign. The non-voting will be shown as grey. User can edit, delete his/her posts only if it is not published.


# 2.Research and compile a list of APIs that might be useful for your project?
Twitter REST APIS

Twitcher


# 3.For each API, briefly describe how its functionality might be used in your project?

	Twitcher
It can be directly used in an application without requiring any authentication Oauth 1.0.
It makes things easier with many functionalities like fetching user’s information, timeline and all tweets. Its able to search using tweets and give retweets if have any.

	Twitter REST APIS
It can be used to post tweets in group’s account after it is successfully verified by other group members.
We chose it because it uses authentication Oauth to post tweets.No One can post on twitters account without having twitter app details. Every request is secured by Authorization header in which consumer key, consumer key secret, access token and access token secret those things are unique for twitter application.


# 4.Choose one API from your list and create an example web page using jQuery AJAX to call the API and display the returned results?

We chose to use the Twitcher API for a simple example (code).
The function of the API used is, to enter the twitter username and the page displays the recent tweets of the user.


# 5.Describe why you chose that particular API and provide a link to its documentation.

Twitcher API provides the required functionality without the need of authentication and its easy to implement.
The link to documentation :  http://twitcher.steer.me/ 


# 6.Discuss any potential issues that you can foresee with using this API in your project.

When the user enters wrong user name the API does not written anything. In addition when the user does not enter anything in search bar it doesn't display any warning message for the user to enter the username.
Twitter REST API depends on consumer key, consumer key secret, access token and access token secret  to work.It should be secured otherwise anyone have those things can directly post on twitter.


# 7.Evaluate your experience creating the example web page and make a recommendation of whether your team should use this API or keep looking for better options

I liked the function of returning user’s recent tweets on entering the twitter username of the user in the Twitcher API.
Twitcher API does not require any authentication therefore it is easy to implement.
But there are more functionalities offered by Twitter REST API which is more secure as it requires authentication so I would suggest to use this API as it has more functionality.


# 8.Describe how the example you wrote might be expanded to use additional functionality provided by the API?

The example I used can search the users recent tweets. With this API we can take advantage of making this an actual application that users can start using immediately. We can expand the functionality by searching a word or a hashtag and in return it displays recent tweets made on the search. It will be similar to the concept of trending in twitter.
