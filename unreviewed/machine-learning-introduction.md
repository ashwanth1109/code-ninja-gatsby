### ML Terminology

Supervised ML: systems learn how to combine input to produce useful predictions on never-before-seen data

Label: the thing we're predicting (y variable in simple linear regression)

Feature: input variable (x variable in simple linear regression)

Example: a particular instance of data

Labeled example: includes both feature and label (train the model)
Unlabeled example: includes only feature (model predicts label on these)

Model: defines the relationship between features and label
Training: means creating or learning the model (better understand the relationships)
Inference: apply the trained model to unlabeled examples to make useful predictions

Regression Model: predicts continuous values
Classification Model: predicts discrete values

### Linear Regression

A method for finding the straight line or hyperplane that best fits a set of points.
Loss function for Regression (L2 Loss): squared error (sq of diff btw prediction and label) => (y - y')^2
MSE: Mean Square Error is the average squared loss per example over the whole dataset
More sophisticated models rely on multiple features, each having a separate weight (w1, w2 etc)

Training a model simply means learing/determining good values for all the weights and the biases from labelled examples.

Empirical risk minimization: In supervised learning, an ML algorithm builds a model by examining many examples and attempting to find a model that minimizes loss.
