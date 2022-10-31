.. _walkthrough:

Walkthrough
============

This section is intended to give a short tutorial that will familiarize new users to DATSR's interface and functionality. First, to do this demo please have the following ready:

- The file EARTHQUAKE_OCCURENCES_2015.csv which was included in the zipped folder that this project was submitted in
- The file chua_circuit.csv which was also included in the zip file
- Access to a web browser to reach the DATSR site

Step 1: Navigating the Page
----------------------------

Once you enter the URL for DATSR into your browser, you will be brought to the home page where you can read more about the project, the team, and access the user documentation (this document) if you please. Notice the search bar at the top of your browser and click through the 4 links (the DATSR logo is a working link as well). This gives you an idea of how to get around the broad structure of the DATSR site. For more information on each of the pages that you can visit, see the "The Site" section of this user documentation (:numref:`site`).


Step 2: Downloading a Dataset
------------------------------

Go to the "Databases" page using the navigation bar at the top and browse through time series data sets available in the repository. When you have found one that piques your interest, click the download button to add the .csv file with the set's training data to your browser's downloads folder.


Step 3: Entering Predictions
-----------------------------

For the sake of this demo, it is best to simply generate random data for predictions unless you already have a predictive scheme set up to efficiently make predictions for the validation set of the data you downloaded. Either way, predictions should be written in a .csv file and formatted in a way that complies with DATSR's backend. For more information on the proper formatting conventions, see the "Input Formatting" section (:numref:`input`). 

After you have your "predictions" for the validation part of the set completed, navigate to the "Upload Your Files" page on the site. Here you will be filling out the form that is on the top of the page. Enter your name (mandatory), the GitHub URL for the predictive scheme used (optional), the collection that the data set came from, the name of the dataset, and the .csv file using the "Choose File" button. 

After you have filled out the form, the site will display your "score" which is equal to the calculated Mean Square Error (MSE) of your predicted values compared against the actual values in the validation set. For more information on scoring see the "Scoring" section of the user documentation (:numref:`scoring`). 

Now navigate to the "Score Board" page and select the data set that you made a prediction for. The page will then show the score board for that particular data set and you can see how your prediction matches up with your peers.

Step 4: Uploading a New Dataset
----------------------------------

DATSR also allows for users to contribute to the repository by adding their own datasets to be made available to other users. To demonstrate this functionality, it will be handy to have easy access to the two .csv files mentioned above (EARTHQUAKE_OCCURENCES_2015.csv and chua_circuit.csv). 

Once again, navigate to the "Upload Your Files" page, but this time you will be filling out the lower of the two forms ("Upload a Dataset"). In the "Dataset" field enter a name for the data you will be uploading. Then, using the "Choose File" button again, select the .csv file you wish to upload into the repository. When you click "Submit" the data will be sent to the backend database to be made available other users.


 

