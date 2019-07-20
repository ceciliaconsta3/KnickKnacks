# Sample Python code to get all user’s updates on Twitter */

# Import Required Package

import twitter

api = twitter.Api()
statuses = api.GetUserTimeline ('ceciliaconsta3')
print(s.text for s in statuses[:5])