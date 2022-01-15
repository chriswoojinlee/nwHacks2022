import arff
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

import seaborn as sns
import xgboost as xgb
from sklearn.compose import ColumnTransformer, make_column_transformer
from sklearn.dummy import DummyClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    classification_report,
    confusion_matrix,
    f1_score,
    make_scorer,
    plot_confusion_matrix,
)
from sklearn.model_selection import (
    GridSearchCV,
    RandomizedSearchCV,
    cross_val_score,
    cross_validate,
    train_test_split,
)
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import OneHotEncoder, OrdinalEncoder, StandardScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier

# read arff data
with open("PhishingData.arff") as f:
    dataDictionary = arff.load(f)
    f.close()
# extract data and convert to numpy array
arffData = np.array(dataDictionary['data'])
phishing_df = pd.DataFrame(arffData)
# set up features and labels
phishing_df.columns = ['SFH', 'popUpWindow', 'SSLfinal_State', 'Request_URL', 'URL_of_Anchor', 'web_traffic', 'URL_Length', 
'age_of_domain', 'having_IP_Address', 'Result']

# split data into training and testing data
X = phishing_df.drop(columns=['Result'])
y = phishing_df['Result']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123)

# perform preprocessing and transformations

# drop features that are hard to detect, pass through features that already have binary values of legit (1) and 
# phishing (-1), and ordinalize features with legit (1), suspicious (0), and phishing (-1) values
drop_features = ["SFH", "SSLfinal_State", "URL_of_Anchor",]
passthrough_features = ["popUpWindow", "age_of_domain", "having_IP_Address"]
ordinal_features = ["Request_URL", "web_traffic", "URL_Length"]

ordinal_transformer = make_pipeline(
    SimpleImputer(strategy="constant"),
    OrdinalEncoder(handle_unknown="use_encoded_value", unknown_value=-1)
)

# make a column transformer
preprocessor = make_column_transformer(
    ("drop", drop_features),
    (ordinal_transformer, ordinal_features),
    ("passthrough", passthrough_features)
)
 
# baseline predictor
dummy_clf = DummyClassifier()
score_types = ["accuracy", "precision", "recall", "f1"]
for score_type in score_types:
    print(
        "%-9s: %.2f"
        % (score_type, cross_val_score(dummy_clf, X_train, y_train, scoring=score_type).mean())
    )

# first run-through with logistic regression and no optimization
pipe = make_pipeline(preprocessor, LogisticRegression(max_iter=1000))
pd.DataFrame(cross_validate(pipe, X_train, y_train, return_train_score=True)).mean()
for score_type in score_types:
    print(
        "%-9s: %.2f"
        % (
            score_type,
            cross_val_score(pipe, X_train, y_train, scoring=score_type).mean(),
        )
    )

print("idk")