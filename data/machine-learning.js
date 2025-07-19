if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// This roadmap is structured to follow the UC Berkeley CS 189/289A syllabus.
ROADMAP_DATA.machine_learning = {
    nodes: [
        { id: 'ml_root', label: 'UCB CS 189: Machine Learning', type: 'basic', details: {
            description: "A roadmap structured according to the UC Berkeley CS 189 course, covering theoretical foundations, algorithms, and methodologies from classical ML to modern deep learning.",
            exercises: [{ title: "CS 189/289A Course Website", url: "https://cs189.org" }]
        }},
        
        // --- Module 1: Probabilistic Foundations (Weeks 1-2) ---
        { id: 'prob_foundations', label: 'Probabilistic Foundations', type: 'basic', details: {
            description: "The theoretical bedrock of machine learning. This module covers how to frame learning problems using probability, focusing on Maximum Likelihood Estimation (MLE) and the properties of Gaussian distributions.",
            exercises: [{ title: "Reading: Probability & MLE (Weeks 1-2)", url: "https://cs189.org" }]
        }},
        
        // --- Module 2: Supervised Learning - Linear Models (Weeks 3-4) ---
        { id: 'linear_regression', label: 'Linear Regression & Regularization', type: 'basic', details: {
            description: "The starting point for supervised learning. Models data with a linear relationship. This also introduces crucial concepts like regularization (L1/Lasso, L2/Ridge) to prevent overfitting and Bayesian interpretations (MAP).",
            exercises: [{ title: "Reading: Linear Regression (Week 3)", url: "https://cs189.org" }]
        }},
        { id: 'classification', label: 'Classification: Generative vs Discriminative', type: 'intermediate', details: {
            description: "The two main approaches to classification. Generative models (like Naive Bayes) learn the distribution of each class, while Discriminative models (like Logistic Regression) learn the decision boundary between classes directly.",
            exercises: [{ title: "Reading: Classification (Week 4)", url: "https://cs189.org" }]
        }},
        { id: 'logistic_regression', label: 'Logistic Regression', type: 'intermediate', details: {
            description: "A fundamental discriminative algorithm for binary classification. It serves as the bridge from classical linear models to neural networks, as a single neuron with a sigmoid activation is essentially logistic regression.",
        }},

        // --- Module 3: Neural Networks & Deep Learning (Weeks 5-6) ---
        { id: 'neural_networks_basics', label: 'Neural Networks & Backpropagation', type: 'intermediate', details: {
            description: "Multi-layer perceptrons (MLPs) and the core algorithm that powers them: Backpropagation. This involves using the chain rule to efficiently compute gradients and update network weights with Gradient Descent.",
            exercises: [{ title: "Reading: Backpropagation (Week 5)", url: "https://cs189.org" }]
        }},
        { id: 'cnn_transformers', label: 'Modern Architectures: CNNs & Transformers', type: 'advanced', details: {
            description: "The specialized architectures that define modern deep learning. Convolutional Neural Networks (CNNs) with components like Batch Norm and ResNets for vision, and Transformers with the Attention mechanism for sequence data.",
            exercises: [
                { title: "Reading: CNNs & Transformers (Week 6)", url: "https://cs189.org" },
                { title: "The Illustrated Transformer", url: "http://jalammar.github.io/illustrated-transformer/" }
            ]
        }},

        // --- Module 4: Unsupervised & Instance-Based Learning (Weeks 7-8) ---
        { id: 'dimensionality_reduction', label: 'Dimensionality Reduction', type: 'intermediate', details: {
            description: "Techniques for reducing the number of features in a dataset while preserving important information. Principal Component Analysis (PCA) finds directions of maximum variance, while t-SNE is used for visualization.",
            exercises: [{ title: "Reading: PCA & t-SNE (Week 7)", url: "https://cs189.org" }]
        }},
        { id: 'clustering_neighbors', label: 'Clustering & Nearest Neighbors', type: 'intermediate', details: {
            description: "Methods for finding structure in unlabeled data. Clustering algorithms like K-Means and Gaussian Mixture Models (GMMs) group similar data points. K-Nearest Neighbors (KNN) is a simple instance-based method for classification.",
            exercises: [{ title: "Reading: Clustering & KNN (Week 8)", url: "https://cs189.org" }]
        }},

        // --- Module 5: Trees, Ensembles, & Model Theory (Week 9-10) ---
        { id: 'model_theory', label: 'Model Theory: Bias-Variance Tradeoff', type: 'intermediate', details: {
            description: "A fundamental concept in ML. The tradeoff between a model's bias (underfitting) and its variance (overfitting) helps diagnose model performance and guide model selection.",
            exercises: [{ title: "Reading: Bias-Variance (Week 10)", url: "https://cs189.org" }]
        }},
        { id: 'decision_trees_ensembles', label: 'Decision Trees & Ensembling', type: 'intermediate', details: {
            description: "Tree-based models that are powerful and interpretable. Ensembling methods like Bagging (Random Forests) and Boosting combine many simple models to create a more powerful and robust one.",
            exercises: [{ title: "Reading: Trees & Ensembling (Week 9)", url: "https://cs189.org" }]
        }},
        
        // --- Module 6: Advanced Models (Weeks 10-14) ---
        { id: 'graphical_models', label: 'Probabilistic Graphical Models', type: 'advanced', details: {
            description: "Models that use a graph to represent conditional dependencies between random variables. Hidden Markov Models (HMMs) are a key example, used for modeling sequential data like speech or text.",
            exercises: [{ title: "Reading: HMMs (Weeks 10-11)", url: "https://cs189.org" }]
        }},
        { id: 'generative_models', label: 'Generative Models', type: 'advanced', details: {
            description: "Models that can generate new data samples. This includes Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs), which learn the underlying distribution of the training data.",
            exercises: [{ title: "Reading: Generative Models (Weeks 11-12)", url: "https://cs189.org" }]
        }},
        { id: 'gnn', label: 'Graph Neural Networks (GNNs)', type: 'advanced', details: {
            description: "Extending deep learning to graph-structured data. GNNs are essential for social network analysis, molecular chemistry, and recommendation systems.",
            exercises: [{ title: "Reading: GNNs (Week 13)", url: "https://cs189.org" }]
        }},
        { id: 'kernel_methods', label: 'Kernel Methods (SVMs)', type: 'advanced', details: {
            description: "A powerful class of algorithms for classification and regression, most famously Support Vector Machines (SVMs). The 'kernel trick' allows them to find complex, non-linear decision boundaries.",
            exercises: [{ title: "Reading: Kernels (Week 14)", url: "https://cs189.org" }]
        }},
    ],
    edges: [
        // Foundational Flow
        { from: 'ml_root', to: 'prob_foundations' },
        { from: 'prob_foundations', to: 'linear_regression' },
        { from: 'linear_regression', to: 'classification' },
        { from: 'classification', to: 'logistic_regression' },
        
        // Path to Neural Networks
        { from: 'logistic_regression', to: 'neural_networks_basics' },
        { from: 'neural_networks_basics', to: 'cnn_transformers' },
        
        // Unsupervised Branch
        { from: 'prob_foundations', to: 'dimensionality_reduction' },
        { from: 'dimensionality_reduction', to: 'clustering_neighbors' },
        
        // Trees and Model Theory
        { from: 'classification', to: 'model_theory' },
        { from: 'model_theory', to: 'decision_trees_ensembles' },
        
        // Advanced Models build on everything
        { from: 'decision_trees_ensembles', to: 'graphical_models' },
        { from: 'cnn_transformers', to: 'generative_models' },
        { from: 'generative_models', to: 'gnn' },
        { from: 'gnn', to: 'kernel_methods' }
    ]
};