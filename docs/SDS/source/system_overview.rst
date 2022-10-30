System Overview
=================

The primary purpose of our application is to serve as a repository made specifically for time series data. Users are able to download training sets of TS data to build and train predictive models. Then the user can choose to upload their predictions for the data set at which point our application will give them a "score" on the accuracy of their predictions. Our application has the added feature of keeping a "high score" page for predictions made for each data set. Our repository also allows contributers to add data to the collection.

The software can be broadly divided into two areas: front-end and back-end. On the front-end side we have a website made with Angular which features four user-facing pages. The home page which welcomes users, the data sets page for browsing time data sets, a page for uploading data, and a "high score" page for keeping track of the most effective predictive models. All four of these pages are made up of a combination of HTML, CSS, Bootstrap, and Javascript which have been generated with Typescript using the Angular web application framework. Also in the front-end, we have Typescript code that handles interactions between the pages, interfaces with the back-end, and adjusts to user inputs.

On the back-end side of things, we have separated the application into two main components: database management and data processing. For the former side of the system, we have a MongoDB database that interfaces with a Python program (that uses the pandas library) allowing us to request data and contribute new data to the repo. For the data-processing module, we have more Python functions which handle the formatting of data going in and out of the database.

