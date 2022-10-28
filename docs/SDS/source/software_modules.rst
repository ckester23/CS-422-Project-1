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
   :width: 50%

   Dynamic Model of Web Interface

The rationale behind the design decisions for the web interface is primarily familiarity. Separate pages with a navigation bar to link them is familiar to most Internet users, making navigation and comprehension intuitive. Our reasoning with the technologies we choose was that our team had familiarity with Angular and Angular provided us with all the functionality we needed.

The reason we favored this design over others is that it provided the most straight forward user interface. More complicated and detailed user interfaces could be created, but with our design users are only provided with what they need. This simplifies user documentation, increases loading speeds, and optimizes efficiency for users.


This module can be divided into five sub-modules which are listed below.


Home Page
############

The purpose of the home page is to welcome the user to the application and orient them to the website interface. Specifically it allows them to easily navigate to other pages and learn more about the project if they so choose. Furthermore, the home page links directly to user documentation, which is a thorough guide if they have any trouble using the app.


Datasets Page
##############

This page displays a list of time series data sets which are available to download in the form of .csv files. Information about each data set is displayed on this page including the number of variables, the number of data-points, and the domain that the data comes from. 


High Score Page
#################

This part of the web interface allows users to see how their predictive methods compare to peers who also use the repository. They are ranked in terms of a "score" which is calculated using an equation specified below.


Enter Predictions/Data Page
#############################

Here users can enter predicted values that they have generated for time series data sets taken from the repository and receive feedback from the application. They can also upload new data sets that they wish to be included in the repository in the future.


Data Processing
-----------------------

This module acts a mediator between modules by formatting their data outputs so that they can be interpreted as inputs for other parts of the system. The structure of this component can be visualized statically as in the diagram shown below.

.. figure:: images/Data_Processing_static.png
   :name: data-processing-static
   :width: 50%

   Static Model of Data Processing Module


However the static model above doesn't do the best job at showing the purpose of this module which is as a middle ground for transporting data throughout the system. The data processing section of the application receives inputs from both the database interpretor module and the web framework module. The former is in the form of database data which it then processes to be in a format accessible to users of the web interface; while the latter does the opposite--it takes database formatted data and makes it readable by the MongoDB database. From this it follows that the data processing module outputs to the same modules it receives inputs from. The dynamic model below shows this situation in a more visual fashion:


.. figure:: images/Data_Processing_dynamic.png
   :name: data-processing-dynamic
   :width: 50%

   Dynamic Model of Data Processing Module


The design decision to include this module was a clear one because MongoDB's BSON data type is not very accessible to the target users of our application and therefore we need to do some interpretation to accept other formats. The splitting of this module into two separate components made development much more straightforward as we could focus on a single data translation paradigm (i.e., .csv to BSON or BSON to .csv).

The other design decisions that were considered were primarily in the realm of what data types should be accepted and what should be the "mediator" data type. For the data types accepted, we considered JSON and .txt, but ultimately settled on .csv and .dat as these were generally what other TS repositories had their data available in. The "middle-ground" datatype is a pandas dataframe object which we choose due to its plentiful options and its through documentation. It also fit well with both the Python modules in the backend and the Python interface provided by MongoDB.


The data processing module of our application can be divided into two sub-modules based on the direction in which data is flowing.

Data preprocessor
###################

This part of back-end system processes time series data inputted as a .csv file and formats it as a pandas object which is then passed on to the database interpretor module to be formatted to comply with MongoDB's interface formatting.



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
   :width: 50%

   Static Model of Score Calculator Module


To further elaborate on the interface of this module with the rest of the system, we can split the interfacing into two categories: inputs and outputs. The score calculator receives inputs from the data preprocessor and database interpretor. The inputs come in the form of pandas dataframe objects unless they are control messages. The output comes in the form of a float value representing the "score" calculated using the equation above. The modules which receive the score value are the web framework and the score tracking module (by way of the web framework), which eventually makes its way to the web interface to be displayed properly. 

The dynamic model of the score calculator (shown below) visualizes this module's interface in a more clear way:

.. figure:: images/Score_Calculator_dynamic.png
   :name: score-calculator-dynamic
   :width: 50%

   Dynamic Model of Score Calculator Module


The design decisions of this module were made primarily with statistics in mind. The language and libraries used are popular in data science (Python, pandas, numpy) and the equations used in calculation are common error measures across many fields. 

Other design decisions were considered; however, we favored this approach because it aligns with the needs of our users. ML engineers use evaluation schemes that are heavily based on classical statistics and so we wanted to comply we industry and research standards when building this module.


TS Database
-----------------

This module stores the time series data that is offered as the main service of the repository. It also contains meta data about the time series data sets that are stored including the number of variables, the number of data points, and the domain that the data comes from. 

Two other collections exist within the database as well: an archive of users who have submitted predictions and a queue of additions to the repository that have not yet been approved by a reviewer in the system. These provide further functionality in the app in the form of score tracking and growing the repository's data set.

We can see a visualization of this compartmentalization of the TS database with the following static model:

.. figure:: images/TS_Database_static.png
   :name: ts-database-static
   :width: 50%

   Static Model of TS Database Module


The interactions that this module has with the rest of the system is very straightforward due to the existence of the "database interpretor module" whose sole purpose is to interface with the database using procedures defined by MongoDB. The following dynamic model for the TS database module goes into further detail about the interface between the interpretor and database.


.. figure:: images/TS_Database_dynamic.png
   :name: ts-database-dynamic
   :width: 50%

   Dynamic Model of TS Database Module


This module was implemented using MongoDB, python, and python libraries (primarily pandas). Many of the design decisions around the TS Database were made with these technologies in mind--playing to their strengths and accommodating to the way they interact with other technologies. Furthermore, our design decisions allowed for greater usability for us as developers. This was key as we are a team of somewhat inexperienced programmers.

Many other designs were considered, but the primary alternative we looked at was a relational database such as SQLite. Ultimately, we decided that a non-relational database would be preferable because of its more straightforward interface with Python and its more intuitive data formatting protocols.


Database Interpretor
---------------------

The purpose of this module is to query the database when data is needed by users and to write data into the database when contributors want to expand the repository. This module is essential to the system because it allows the TS Database (which provides the primary functionality of the repository) to be incorporated into the application. 

Like the score calculator, the database interpretor is essentially defined by its interface with other modules. However, a static model of the module can be used to give a better idea of how the interpretor handles its interactions. The diagram below shows such a model:


.. figure:: images/Database_Interpretor_static.png
   :name: database-interpretor-static
   :width: 50%

   Static Model of Database Interpretor Module

The interface that this module has with other modules is defined by the interactions the TS database requires in order to be a functioning part of the application. Because of this, we can think of the MongoDB database as the primary module it interacts with in the form of reads and writes compatible with MongoDB's Python interface. 

On the other side of the application, the interpretor receives incoming data transmissions strictly from the data preprocessor (this is because data must be formatted as a pandas object before being moved into the TS database). The database interpretor also receives control message inputs from the web framework when a validation set is needed in order to calculate a user's score. 

In terms of outputs, the database interpretor transfers data to the data postprocessor when it needs to be transferred directly to users and to the score calculator when it will be used to create a score value. The interpretor may also send control messages to other modules in order to notify them of receiving or not receiving certain requests.


.. figure:: images/Database_Interpretor_dynamic.png
   :name: database-interpretor-dynamic
   :width: 50%

   Dynamic Model of Database Interpretor Module


The design of this module was crated with ease of interface in mind. Because the database interpretor acts primarily as a conduit to the TS database storage, we wanted to make this module efficiently interact with MongoDB as well as the modules on the other side of the application. 

When designing this module, we considered using a more command line oriented approach that is supported by MongoDB. However, the python interface libraries provided by Mongo were more than enough to create effective passages of information and control messages. Furthermore, by staying in the domain of Python code it was easier to integrate this module with the rest of the backend which was also primarily written in Python.