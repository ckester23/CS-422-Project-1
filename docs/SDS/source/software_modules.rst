Software Modules
=================


Web Interface
-------------------

This module's primary function is to provide the user an interface through which they can interact with our application. Specifically, it allows them to access and add to the TS data in our repository as well as test predictive models and compare to other models' results.

The structure of this module can be visualized with the following static model.


.. figure:: images/Web_UI_static.png
   :width: 50%

   Static Model of Web Interface

This module interacts with the typescript code that makes up the framework that the site is built upon. It controls interactions between the pages, passes on requests to reach any back-end modules, and updates the user-facing pages with generated HTML and CSS code. This module is also the primary part of the application which interfaces with end-users. End-users are able to reach the web interface through connecting to a UOregon server by way of the Internet and from there they can interact with the application using options provided on the web site.

To further show how this module interacts with other modules the following dynamic model further specifies the module's interactions with the other components of the system.

.. figure:: images/Web_UI_dynamic.png
   :width: 80%

   Dynamic Model of Web Interface

The rationale behind this design for the web interface is primarily familiarity. The separate page with a navigation bar model for web pages is familiar to most internet users, making navigation and searching intuitive.

The reason we favored this design over others is that it provided the most straight forward user interface. More complicated and detailed user interfaces could definitely being created, but with our design users are only provided with what they need. This simplifies user documentation, increases loading speeds, and optimizes efficiency for users.


This module can be divided into five sub-modules which are listed below.


Home Page
############

The purpose of the home page is to welcome the user to the application and orient them to the website interface. Specifically it allows them to easily navigate to other pages and learn more about the project if they so choose. Furthermore, the home page links directly to user documentation, which is a through guide if they have any trouble using the app.


Datasets Page
##############

This page displays a list of time series data sets which are available to download in the form of .csv files. Information about each data set is displayed on this page including the number of variables, the number of data-points, and the domain that the data comes from. 


High Score Page
#################

This part of the web interface allows users to see how their predictive methods compare to peers who also use the repository. They are ranked in terms of a "score" which is calculated using an equation specified below.


Add Data Page
#################

This sub-module is where users can upload their own time series data for review and possible inclusion in the repository. 


Enter Predictions Page
########################

Here users can enter predicted values that they have generated for time series data sets taken from the repository. 


Data Processing
-----------------------

This module acts a mediator between other modules by formatting their data outputs so that they can be interpreted by other modules. 


The data processing module of our application can be divided into two sub-modules based on the direction in which data is flowing.

Data preprocessor
###################

This part of back-end system processes time series data inputted as a csv file and formats it as a pandas object which is then passed on to the database interpretor module to be formatted to comply with MongoDB's interface formatting.



Data Postprocessor
#####################

This sub-module formats data outputted by MongoDB into .csv files which can be passed on to the front-end and made available to users.


Score Calculator
------------------

This module calculates the "score" of predicted values submitted by users of the repository to give them an idea of how accurate their predictive model was. It uses the following equation to do its calculation:

[equation here]


The score calculator is a module that is essentially defined by its interaction with other modules and doesn't have much internal structure of its own. The following static model displays a more static view including some internal structure, but notice that it still includes a good amount of interaction with other modules as this is the score calculator's primary purpose.


.. figure:: images/Score_Calculator_static.png
   :name: score-calculator-static
   :width: 80%

   Static Model of Score Calculator Module


To further elaborate on the interface of this module with the rest of the system, we can split the interfacing into two categories: inputs and outputs. The score calculator receives inputs from the data preprocessor and database interpretor. The inputs come in the form of pandas dataframe objects unless they are control messages. The output comes in the form of a float value representing the "score" calculated using the equation above. The modules which receive the score value are the web framework and the score tracking module (by way of the web framework), which eventually makes its way to the web interface to be displayed properly. 

The dynamic model of the score calculator (shown below) visualizes this module's interface in a more clear way:

.. figure:: images/Score_Calculator_dynamic.png
   :name: score-calculator-dynamic
   :width: 80%

   Dynamic Model of Score Calculator Module



TS Database
-----------------

This module stores the time series data that is offered as the main service of the repository. It also contains meta data about the time series data sets that are stored including the number of variables, the number of data points, and the domain that the data comes from. 

Two other collections exist within the database as well: an archive of users who have submitted predictions and a queue of additions to the repository that have not yet been approved by a reviewer in the system. These provide further functionality in the app in the form of score tracking and growing the repository's data set.

We can see a visualization of this compartmentalization of the TS database with the following static model:

.. figure:: images/TS_Database_static.png
   :name: ts-database-static
   :width: 60%

   Static Model of TS Database Module

The interactions that this module has with the rest of the system is very straightforward due to the existence of the "database interpretor module" whose sole purpose is to interface with the database using procedures defined by MongoDB. The following dynamic model for the TS database module goes into further detail about the interface between the interpretor and database.


.. figure:: images/TS_Database_dynamic.png
   :name: ts-database-dynamic
   :width: 60%

   Dynamic Model of TS Database Module


Database Interpretor
---------------------

The purpose of this module is to query the database when data is needed by users and to write data into the database when contributors want to expand the repository. This module is essential to the system because it allows the TS Database (which provides the primary functionality of the repository) to be incorporated into the application. 

Like the score calculator, the database interpretor is essentially defined by its interface with other modules. However, a static model of the module can be used to give a better idea of how the interpretor handles its interactions. The diagram below shows such a model:


[Database Interpretor static model]

The interface that this module has with other modules is defined by the interactions and transactions the TS database itself requires in order to be a functioning part of the application. Because of this, we can think of the MongoDB database as the primary module it interacts with in the form of reads and writes compatible with MongoDB's defined interface in Python. 

On the other side of the application, the interpretor receives incoming data transmissions strictly from the data preprocessor (this is because data must be formatted as a pandas object before being moved into the TS database). The database interpretor also receives control message inputs from the web framework when a validation set is needed in order to calculate a user's score. 

In terms of outputs, the database interpretor transfers data to the data postprocessor when it needs to be transferred directly to users and to the score calculator when it will be used to create a score value. The interpretor may also send control messages to other modules in order to notify them of receiving or not receiving certain requests.

[Database Interpretor dynamic model]