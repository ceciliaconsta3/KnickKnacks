''' Screen Scraping with BeautifulSoup '''
# import libraries
import urllib2
from bs4 import BeautifulSoup

# specify the url
coaching_report = 'https://my.wgu.edu/coaching-report/v4/studentPidm/590386/assessmentId/1160001/courseVersionId/1280001/https://my.wgu.edu/coaching-report/v4/studentPidm/590386/assessmentId/1160001/courseVersionId/1280001/'

# query website and return the html to my coaching_report variable
page = urllib2.urlopen(coaching_report)

# parse the html into Beautiful Soup and store the output
soup = BeautifulSoup(page, 'html.parser')

# Find the tag
course_name_box = soup.find('span', attrs={'class':'name'})

# Get the tag text and remove starting and trailing
course = course_name_box.text.strip()
print(course)

# TODO Get the total score
raw_score_box = soup.find('div', attrs={'data-track-cr-attempt-score'})
raw_score = raw_score_box.text
print(raw_score)

# TODO Get the total cut score - may need to total all fields
cut_score_box = soup.find()
cut_score = cut_score_box.text
print(cut_score)

# TODO Calculate the Cut Score based grade
def calculateTrueGrade(raw_score,cut_score):
    pass_score = 0.85
    cut_grade = ((raw_score - cut_score) / (1 - cut_score)) * (1 - pass_score) + pass_score
    print(cut_grade)