

The Concept of Operations (ConOps)
===================================


Current System
----------------

Time series analysis and forecasting is a powerful tool in our modern data-driven world. Because of this, time series data is needed in a wide variety of industries including meteorology, finance, power, and agriculture. As we advance our predictive schemes with innovations like machine learning and stochastic modeling, the availability of data to train and test these systems has not been able to keep up with the increased demand. Our product will address this problem head on. We plan to engineer a repository with time series in mind that will accommodate the many facets of this special class of data while maintaining an intuitive user interface and optimized data management.


Justification for a New System
-------------------------------

The need for time series data is here to stay. While buzzwords like neural networks and deep learning are now common place in science journalism, time series analysis has also been a fundamental component of the artificial intelligence revolution of the past few decades. We see it being applied to everything from predicting effectiveness of COVID-19 lock-downs [:ref:`2<cite-2>`] to studying insulin effectiveness [:ref:`3<cite-3>`]. Our repository will fill a need in the field of time series analysis and therefore advance research and industry alike.


It should be noted that there are existing repositories for time series data including UEA & UCR Time Series Classification Repository [:ref:`1<cite-1>`] and Wolfram Data Repository (Time Series) [:ref:`4<cite-4>`]. However, these repositories fall short of our costumer's needs in several ways. One major drawback of many of these systems is a lack of data. To train predictive models, one often needs several datasets of high-quality data. Some repos have ample data, but do not provide crucial functionality for organizing time series data such as hierarchical and set structures. We plan to design our new system so that we can avoid the shortcomings of other repositories and find a solution that caters to all of our costumers' needs.


Operational Features of the Proposed System
---------------------------------------------

The primary function of our system will be to provide a repository of time series data to train and test analysis models. Users will be able to select from a list of time series data sets with a variety of sizes, structures, and domains.

After the user has selected which time series they wish to use, our application will provide them with a set of data points for training. The user is then intended to use this data set in any way they wish to build a predictive model for the remaining data points (which will be specified when they receive the initial csv file). The user will then input their predicted values for the remaining points at which point our program will rate the effectiveness of the predictions.


User Classes
-------------

**Time Series Analysts** 
	Our application will be useful to analysts in industry who do work with time series. The increased availability and specificity of time series data through the use of our repository will allow professionals to build more accurate and precise predictive models.


**Researchers** 
	Researchers in the field of artificial intelligence will also find our repository useful. It will give them access to the kind of specific and high quality data required in a research setting without having to scour several different repositories across the web.


**Students**
	By standardizing the process of getting and working with time series data, students will be able to study time series analysis without having to go through the hassle of wrangling and cleaning up data. They will also be able to learn to build better models through the "high score" feature of our app, which allows easy comparison with others working in AI.


**Contributers**
	This class of users will (for now) be restricted to the DUX D-zine team as we build and expand the repository. They will be able to add time series data sets into the repository's backend framework and control updates and new releases of the application. This will allow us to adapt the repository according to feedback and also add more data for the benefit of the user classes listed above.


Modes of Operation
-------------------

There will be a single mode of operation for all of our user classes. Within this mode users will be able to select time series data, receive the training data in a csv file, and then test their predictions against a validation set kept hidden by the application. 


Operational Scenarios 
--------------------------


**Use Case #1: Retrieving Time Series Data**

	**Brief Description:** This use case describes how a user would retrieve a training set of a time series using our application.

	**Actors:** A user

	**Preconditions:**

		#. The user must have system requirements satisfied
		#. The user must have the application installed

	**Steps to Complete the Task:**

		#. The user will select which time series data set they wish to work with
		#. They will then download the data into their computer's "Downloads" folder in the form of a .csv file
		#. Then, they will be given the option to upload predictive data for the remaining data points in the time series

	**Postconditions**
		The user will now be on a screen that allows them to upload predictions for the rest of the data points. If they would like to test their predictive model, they can continue in the application as prompted.
  

**Use Case #2: Uploading Predictions**

	**Brief Description:** This use case describes how a user would upload data produced using a predictive model to get feedback on the accuracy of their predictions.

	**Actors:** A user

	**Preconditions:**

		#. User must have system requirements satisfied
		#. User must have our application installed
		#. User must have made predictions based on TS data previously retrieved from the repository according to the steps detailed above.

	**Steps to Complete the Task:**
	
		#. The user will prepare their predictions in a specified format as a csv file
		#. They will then upload the file to our application
		#. The user will have the option to leave their information (e.g. name, GitHub account) for the purpose of the "high-score" charts
		#. They will receive a calculated "rating" of their predictions
		#. If their prediction is in a specified top scorers range for the given data set, they will be notified by the GUI and their name will be added to the "high-score" page

	**Postconditions**
		The user now has some idea of the predictive ability of the model they are testing and potentially have improved their model with the additional training data.


**Use Case #3: Adding Data to the Repository**

	**Brief Description:** This case describes how a contributer would add a time series data set to the repository and make it available to users of the application.

	**Actors:** A contributer

	**Preconditions:**

		#. Contributer must have system requirements satisfied
		#. Contributer must have our application installed
		#. Contributer must have access to the application's data base

	**Steps to Complete the Task:**
	
		#. Contributer will format TS data in the manner necessary to interact with the backend framework
		#. Then they will specify meta data properties of that data set
		#. They will upload it to the data base, making it available to users
		#. If the new addition of data requires additional features in the front end application, the contributer may make a new release of the application and push the updated application to end users

	**Postconditions**
		The new TS data set will be available in the application's repository. Potentially users will have to update their application depending on the nature of the data added.