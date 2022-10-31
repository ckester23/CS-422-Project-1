Backend Development Guide
=============================

Overview
----------

This section is intended to aid developers who would like to contribute to or modify their own version of the DATSR backend functionality. The backend modules can be found in the "backend" folder in the root directory.


Getting Started
-----------------------

Necessary Software
###################

To run the backend python modules, and be fully capable of modifying any/all components, on your local machine you will need the following python packages installed: pymongo (vrs. 4.2.0), Flask (vrs. 2.2.2), python (vrs. 3.9.0), numpy (vrs. 1.23.1), and bson (vrs. 0.5.10). 


Proficiencies
#################

To add to, or modify, the backend codebase a developer should be proficient in python programming and also have substantial familiarity with locating (and interpreting) documentation for a given python library. Specifically, the developer would need familiarity with the pymongo documentation and related developer guides. 

In order to fully implement the backend/database functionality such that it can be utilized on the UI (the web-hosted app) a developer would also require proficiency in the basics of app routing with Flask. 


Possible Areas of Improvement
------------------------------

- Adding backend compatibility for more file types (e.g., '.json', .'xlx', .'dat', '.txt', etc.) 
- More API routed compatibility to facilitate DATSR users filtering through database results
- Backend production of plots (of the time series themselves and also of the predicted/modeled forecasting task compared to the actual sample_test data)


Best Practices
---------------

Developers should adhere to Python style guidelines as well as maintain adequate version control of altered elements to ensure that the codebase remains functional.