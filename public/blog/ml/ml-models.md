---
title: "ml models"
description: "ML models"
pubDate: 2026-03-18
---
# ML models

The steps to building and using a model are:

Define: What type of model will it be? A decision tree? Some other type of model? Some other parameters of the model type are specified too.\
Fit: Capture patterns from provided data. This is the heart of modeling.\
Predict: Just what it sounds like\
Evaluate: Determine how accurate the model's predictions are.

Using scikit-learn:
```python
from sklearn.tree import DecisionTreeRegressor

# Define model. Specify a number for random_state to ensure same results each run
melbourne_model = DecisionTreeRegressor(random_state=1)

# Fit model, where X = feature, y = prediction target
melbourne_model.fit(X, y)
```
To predict for the first few lines and show the result:
```python
print(melbourne_model.predict(X.head()))
```