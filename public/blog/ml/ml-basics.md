---
title: "ml basics"
description: "ML basics: decision trees, pandas"
pubDate: 2026-03-18
---
# ML basics: pandas, data loading and manipulation

Pandas is the primary tool data scientists use for exploring and manipulating data. 

```python
import pandas as pd
```

Loading and exploring the data: a DataFrame. It holds type of data you might of as a table.

```python
# save filepath to variable for easier access
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
# read the data and store data in DataFrame titled melbourne_data
melbourne_data = pd.read_csv(melbourne_file_path) 
# print a summary of the data in Melbourne data
melbourne_data.describe()
```

The following code drops data with missing values in some column(s):
```python
# na = not available
melbourne_data = melbourne_data.dropna(axis=0)
```
### Selection of the prediction target
Pulling a variable using dot-notation creates series - a DataFrame with a single column.
By selecting data we wanna predict we create a **prediction target**.
```python
# by convention y = prediction target
y = melbourne_data.Price
```

### Selection of the features
The columns that are inputted into our model (and later used to make predictions) are called "features." 
```python
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
# by convention X = features
X = melbourne_data[melbourne_features]
```