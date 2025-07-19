if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// 这里就是定义ROADMAP_DATA的地方！
ROADMAP_DATA.machine_learning = {
    nodes: [
        { id: 'ml_foundations', label: 'ML Foundations', type: 'basic', details: {
            description: "Start here. Understand the core concepts: What is Machine Learning? Types of learning (Supervised, Unsupervised, Reinforcement), and the vocabulary of features, labels, and models.",
            exercises: [
                { title: "Google's Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
                { title: "Supervised vs. Unsupervised Learning", url: "https://www.geeksforgeeks.org/supervised-unsupervised-learning/" }
            ]
        }},
        { id: 'linear_regression', label: 'Linear Regression', type: 'basic', details: {
            description: "The 'Hello World' of ML. Learn how to predict a continuous value (e.g., house price) from input features by fitting a straight line. Key concepts: cost function, gradient descent.",
            exercises: [
                { title: "Andrew Ng's Notes on Linear Regression", url: "https://see.stanford.edu/materials/aimlcs229/cs229-notes1.pdf" },
                { title: "Kaggle: House Prices Dataset", url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques" }
            ]
        }},
        { id: 'logistic_regression', label: 'Logistic Regression', type: 'intermediate', details: {
            description: "Despite its name, this is a classification algorithm. It's used to predict a binary outcome (0 or 1, True or False) by passing the linear output through a sigmoid function.",
            exercises: [
                { title: "StatQuest: Logistic Regression Explained", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" },
                { title: "Kaggle: Titanic - Machine Learning from Disaster", url: "https://www.kaggle.com/c/titanic" }
            ]
        }},
        { id: 'decision_trees', label: 'Decision Trees & Forests', type: 'intermediate', details: {
            description: "Learn about tree-based models that make decisions by splitting data based on feature values. Random Forests are an ensemble of many trees, improving robustness and reducing overfitting.",
            exercises: [
                { title: "StatQuest: Decision Trees Explained", url: "https://www.youtube.com/watch?v=7VeUPuFGJHk" },
                { title: "StatQuest: Random Forests Explained", url: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" }
            ]
        }},
        { id: 'unsupervised_learning', label: 'Unsupervised Learning', type: 'intermediate', details: {
            description: "Finding patterns in data without pre-existing labels. Key algorithms include K-Means for clustering and PCA for dimensionality reduction.",
            exercises: [
                { title: "K-Means Clustering Explained", url: "https://developers.google.com/machine-learning/clustering/k-means/introduction" },
                { title: "Principal Component Analysis (PCA)", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ" }
            ]
        }},
        { id: 'dl_intro', label: 'Intro to Deep Learning', type: 'advanced', details: {
            description: "The gateway to modern AI. Understand the basic building blocks: neurons, layers, and activation functions. This leads to Neural Networks (NNs), Convolutional NNs (CNNs) for images, and Recurrent NNs (RNNs) for sequences.",
            exercises: [
                { title: "3Blue1Brown: Neural Networks Series", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
                { title: "TensorFlow Playground", url: "https://playground.tensorflow.org/" }
            ]
        }},
        { id: 'ml_practice', label: 'Practical Skills', type: 'advanced', details: {
            description: "The skills that separate beginners from practitioners. Learn how to evaluate models (Accuracy, Precision, Recall, F1-Score), handle overfitting (Regularization), and engineer meaningful features.",
            exercises: [
                { title: "Accuracy, Precision, Recall, F1 Score", url: "https://towardsdatascience.com/accuracy-precision-recall-or-f1-331fb37c5cb9" },
                { title: "Google's Guide to Regularization", url: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization" }
            ]
        }},
    ],
    edges: [
        { from: 'ml_foundations', to: 'linear_regression' },
        { from: 'linear_regression', to: 'logistic_regression' },
        { from: 'logistic_regression', to: 'decision_trees' },
        { from: 'ml_foundations', to: 'unsupervised_learning' },
        { from: 'decision_trees', to: 'dl_intro' },
        { from: 'unsupervised_learning', to: 'dl_intro' },
        { from: 'dl_intro', to: 'ml_practice' }
    ]
};