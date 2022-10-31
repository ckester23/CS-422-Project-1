.. _scoring:

Scoring
=========

DATSR rates the predictions submitted to the site using Mean Square Error (MSE)---a common error calculation in classical statistics. The following equation shows how Mean Square Error is calculated on a set of n actual values x\ :sub:`i`\ and predicted values y\ :sub:`i`\:

.. figure:: images/MSE.png
   :scale: 60%

   Mean Squared Error Calculation


MSE was selected as the statistic used to rank the predictive models in DATSR because it is common in industries that use time series analysis, as well as in the research community.