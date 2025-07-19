if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.deep_learning = {
    nodes: [
        // --- Part I: Mathematical Foundations (数学基石) ---
        { id: 'dl_math_foundations', label: 'Part I: Mathematical Foundations', type: 'basic', details: {
            description: "Deep learning is built upon a solid mathematical foundation. This section covers the essential prerequisites needed to understand how and why deep learning models work.",
        }},
        { id: 'linear_algebra', label: 'Linear Algebra', type: 'basic', details: {
            description: "The language of deep learning. Data is represented as tensors (multi-dimensional arrays), and network operations are fundamentally matrix and vector manipulations. Concepts like SVD and PCA are key.",
            exercises: [
                { title: "Deep Learning Book, Ch 2: Linear Algebra", url: "https://www.deeplearningbook.org/contents/linear_algebra.html" },
                { title: "3Blue1Brown: Essence of Linear Algebra", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" }
            ]
        }},
        { id: 'probability_info_theory', label: 'Probability & Information Theory', type: 'intermediate', details: {
            description: "Used to quantify uncertainty. Probability distributions model our data, while information theory concepts like entropy and cross-entropy provide the basis for designing most loss functions.",
            exercises: [
                { title: "Deep Learning Book, Ch 3: Probability and Information Theory", url: "https://www.deeplearningbook.org/contents/prob.html" },
            ]
        }},
        { id: 'numerical_computation', label: 'Numerical Computation', type: 'intermediate', details: {
            description: "The practical challenges of training models on a computer. This includes understanding gradient-based optimization and potential issues like numerical stability (e.g., vanishing/exploding gradients).",
            exercises: [
                { title: "Deep Learning Book, Ch 4: Numerical Computation", url: "https://www.deeplearningbook.org/contents/numerical.html" },
            ]
        }},
        
        // --- Part II: Core Deep Learning Models (核心深度学习模型) ---
        { id: 'core_dl_models', label: 'Part II: Core Deep Learning Models', type: 'basic', details: {
            description: "This section covers the fundamental building blocks of most deep learning applications, from basic networks to the classic architectures for vision and sequence data.",
        }},
        { id: 'feedforward_networks', label: 'Feedforward Networks (MLP)', type: 'basic', details: {
            description: "The quintessential deep learning model. A Multi-Layer Perceptron (MLP) learns to map inputs to outputs through a series of hidden layers, forming the basis for more complex architectures.",
            exercises: [
                { title: "Deep Learning Book, Ch 6: Deep Feedforward Networks", url: "https://www.deeplearningbook.org/contents/mlp.html" },
            ]
        }},
        { id: 'regularization', label: 'Regularization for Deep Learning', type: 'intermediate', details: {
            description: "A collection of techniques designed to prevent overfitting. Key methods include L1/L2 regularization, Dropout, Batch Normalization, and Early Stopping.",
            exercises: [
                { title: "Deep Learning Book, Ch 7: Regularization for Deep Learning", url: "https://www.deeplearningbook.org/contents/regularization.html" },
                { title: "StatQuest: Batch Normalization", url: "https://www.youtube.com/watch?v=7VeUPuFGJHk" }
            ]
        }},
        { id: 'optimization_dl', label: 'Optimization for Training', type: 'intermediate', details: {
            description: "How to efficiently train deep models. This covers optimization algorithms beyond simple SGD, such as Adam and RMSprop, as well as the importance of learning rate schedules.",
            exercises: [
                { title: "Deep Learning Book, Ch 8: Optimization for Training Deep Models", url: "https://www.deeplearningbook.org/contents/optimization.html" },
            ]
        }},
        { id: 'cnn', label: 'Convolutional Networks (CNN)', type: 'intermediate', details: {
            description: "The workhorse of computer vision. CNNs use specialized layers (convolution, pooling) to learn spatial hierarchies of features, making them ideal for image-related tasks. Key architectures: LeNet, AlexNet, VGG, ResNet.",
            exercises: [
                { title: "Deep Learning Book, Ch 9: Convolutional Networks", url: "https://www.deeplearningbook.org/contents/convnets.html" },
                { title: "Stanford CS231n: CNNs for Visual Recognition", url: "https://cs231n.github.io/convolutional-networks/" }
            ]
        }},
        { id: 'rnn_lstm', label: 'Sequence Modeling (RNNs & LSTMs)', type: 'intermediate', details: {
            description: "Architectures designed for sequential data. Recurrent Neural Networks (RNNs) have 'memory', and advanced versions like LSTMs and GRUs use gating mechanisms to effectively learn long-range dependencies in text, speech, or time series.",
            exercises: [
                { title: "Deep Learning Book, Ch 10: Sequence Modeling", url: "https://www.deeplearningbook.org/contents/sequences.html" },
                { title: "Understanding LSTMs by Chris Olah", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" }
            ]
        }},
        
        // --- Part III: Modern Architectures & Hot Topics (现代架构与前沿热点) ---
        { id: 'modern_dl_architectures', label: 'Part III: Modern Architectures & Hot Topics', type: 'basic', details: {
            description: "This section explores the state-of-the-art, including architectures and paradigms that have defined the last decade of AI research and are pushing the boundaries of what's possible.",
        }},
        { id: 'transformers_attention', label: 'Transformers & Attention', type: 'advanced', details: {
            description: "The architecture that powers modern NLP (e.g., BERT, GPT) and is now used in vision and beyond. It replaces recurrent connections with a Self-Attention mechanism, allowing it to process entire sequences in parallel and capture complex contextual relationships.",
            exercises: [
                { title: "Paper: 'Attention Is All You Need'", url: "https://arxiv.org/abs/1706.03762" },
                { title: "The Illustrated Transformer by Jay Alammar", url: "http://jalammar.github.io/illustrated-transformer/" }
            ]
        }},
        { id: 'gans', label: 'Generative Adversarial Networks (GANs)', type: 'advanced', details: {
            description: "A framework for generative modeling where a Generator and a Discriminator network compete, leading to the creation of highly realistic, novel data like images or music.",
            exercises: [
                { title: "Deep Learning Book, Ch 20: Deep Generative Models", url: "https://www.deeplearningbook.org/contents/generative_models.html" },
            ]
        }},
        { id: 'graph_neural_networks', label: 'Graph Neural Networks (GNNs)', type: 'advanced', details: {
            description: "A class of neural networks designed to work directly on graph-structured data. They are used in social network analysis, drug discovery, and recommendation systems.",
            exercises: [
                { title: "A Gentle Introduction to GNNs", url: "https://distill.pub/2021/gnn-intro/" },
            ]
        }},
        { id: 'self_supervised_learning', label: 'Self-Supervised Learning', type: 'advanced', details: {
            description: "A paradigm for learning from vast amounts of unlabeled data. The model creates its own 'pseudo-labels' from the input data (e.g., masking a word and trying to predict it), forming the basis for large pre-trained models.",
            exercises: [
                { title: "An overview of Self-Supervised Learning", url: "https://lilianweng.github.io/posts/2019-11-10-self-supervised/" }
            ]
        }},
    ],
    edges: [
        // Connect the three main parts to the root

        // Part I Edges
        { from: 'dl_math_foundations', to: 'linear_algebra' },
        { from: 'dl_math_foundations', to: 'probability_info_theory' },
        { from: 'dl_math_foundations', to: 'numerical_computation' },

        { from: 'linear_algebra', to: 'core_dl_models' },
        { from: 'probability_info_theory', to: 'core_dl_models' },
        { from: 'numerical_computation', to: 'core_dl_models' },

        // Part II Edges (Math is a prerequisite for models)
        { from: 'core_dl_models', to: 'feedforward_networks' },
        { from: 'feedforward_networks', to: 'regularization' },
        { from: 'feedforward_networks', to: 'optimization_dl' },
        { from: 'regularization', to: 'cnn' },
        { from: 'optimization_dl', to: 'cnn' },
        { from: 'regularization', to: 'rnn_lstm' },
        { from: 'optimization_dl', to: 'rnn_lstm' },

        { from: 'rnn_lstm', to: 'modern_dl_architectures' },
        { from: 'cnn', to: 'modern_dl_architectures' },

        // Part III Edges (Core models are prerequisites for modern ones)
        { from: 'modern_dl_architectures', to: 'transformers_attention' },
        { from: 'modern_dl_architectures', to: 'gans' },
        { from: 'modern_dl_architectures', to: 'graph_neural_networks' },
        { from: 'modern_dl_architectures', to: 'self_supervised_learning' },
        { from: 'rnn_lstm', to: 'transformers_attention' }, // Transformers evolved from sequence modeling
    ]
};