''' Screen Scraping with BeautifulSoup '''
# import libraries
import urllib2
from bs4 import BeautifulSoup

# specify the url
current_reads = 'https://www.goodreads.com/review/list/84207402-cecilia?shelf=currently-reading'

# query website and return the html to my coaching_report variable
page = urllib2.urlopen(current_reads)

# parse the html into Beautiful Soup and store the output
soup = BeautifulSoup(page, 'html.parser')

# Find the tag
book_name_box = soup.find('span', attrs={'class':'name'})

# Get the tag text and remove starting and trailing
book = book_name_box.text.strip()
print(book)

# TODO display on website as feed or link to GitHub for auto update