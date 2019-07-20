wgu-gpa-calc
============

### An unofficial GPA calculator for Western Governor's University

Introduction
------------

This application will calculate your gpa based on the scores from your 
objective exams (exams that have scores) and performance exams(exams that 
are just pass/fail). It does this by taking your official GPA of 3.0 and adding 
any points you have over the minimum. This is because if you score the bare 
minimum on all tests your official gpa will still be 3.0. Therefore, this 
takes any points over the minimum and attempts to calculate an unofficial gpa, 
which will be anywhere between 3.0-4.0. The method of adding points is based on 
a few assumptions.

### First assumption
The first assumption made is that a 3.0 gpa will convert to 85% for calculating 
purposes.

* 3.0 gpa -> 85%

### Objective exam assumptions
A gpa of 3.0 is presumed to be equal to 85%. A percentage 
of 87-90 is given a gpa of 3.33. A percentage of 90-93 is given a gpa of 3.67. 
A percentage of 93-100 is given a gpa of 4.0. 

### Here is a list covering the covering the objective exam assumptions:

* 87-90% -> 3.33 gpa
* 90-93% -> 3.67 gpa
* 93-100% -> 4.00 gpa

These are arbitrarily obtained values based on how other schools have calculated
their gpa scale. Each school operates a little differently.

### Performance exam assumptions
The performance exam GPA is determined based on the amount of tries on the exam. Passing an exam on the first try is worth 4.0 gpa. Passing an exam on the second try is worth 3.67 gpa. Passing an exam on the third try is worth 3.33 gpa. Passing an exam in 4 tries or more is worth 3.0 gpa. This is calculated partly based on the fact that WGU allows 4 exam tries before taking disciplinary measures against a student. It is also calculated this way because the mathematics are convenient and logical.

### Here is a list covering the performance exam assumptions:
First try -> 4.0 gpa
Second try -> 3.67 gpa
Third try -> 3.33 gpa
Fourth or more try -> 3.0 gpa

### Here's the basic calculation for determining the weighted score
A = The student's raw score (Let’s say they got an 84%, which you’d plug in as .84)
B = The passing percentage for the test (85% is considered competently passing at WGU = .85)
C = The Cut score of the test (Let’s go with a .67)

Formula: ((A ‐ C)/(1 ‐ C)) x (1 ‐ B) + B = Cut Score based grade

Example: ((Raw Score minus Cut Score) divided by (1 minus Cut Score) multiplied by (1 minus Passing Percentage)) plus the Passing Percentage = Cut-­‐score based grade. This will result in ((.84 ‐ .58)/(1 ‐ .58)) x (1 ‐ .75) + .75 = .904, or a 90% passing grade.

### References
* [Inspiration](https://github.com/nathanhillyer/wgu-gpa-calc)
* [Cut score math](https://platinumed.zendesk.com/hc/en-us/articles/209194786-How-is-cut-score-grading-calculated-)
* [Guidance](https://medium.freecodecamp.org/how-to-scrape-websites-with-python-and-beautifulsoup-5946935d93fe)
* [Basics of Scraping](http://www.gregreda.com/2013/03/03/web-scraping-101-with-python/)
* [General scraping](https://automatetheboringstuff.com/chapter11/)
* [Using Beautiful Soup](https://www.analyticsvidhya.com/blog/2015/10/beginner-guide-web-scraping-beautiful-soup-python/)
* [Scraping dynamic pages](https://stackoverflow.com/questions/13960567/reading-dynamically-generated-web-pages-using-python)
* [Dynamic site with Beautiful Soup](https://stackoverflow.com/questions/46916543/how-to-scrape-dynamic-website-created-on-toggle-button-with-python)