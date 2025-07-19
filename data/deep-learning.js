// data/deep-learning-data.js

if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// 定义 "deep_learning" 主题的数据
ROADMAP_DATA.deep_learning = {
    nodes: [
        { id: 'dl_foundations', label: 'DL Foundations', type: 'basic', details: {
            description: "The core principles of Deep Learning. This includes understanding the structure of a Neural Network, how weights are updated via Gradient Descent, and the crucial concept of Backpropagation.",
            exercises: [
                { title: "3Blue1Brown: Neural Networks Series", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
                { title: "StatQuest: Backpropagation Explained", url: "http://googleusercontent.com/youtube.com/6" }
            ]
        }},
        { id: 'activation_loss', label: 'Activation & Loss', type: 'intermediate', details: {
            description: "The two pillars of network training. Activation Functions (like ReLU, Sigmoid) introduce non-linearity, while Loss Functions (like MSE, Cross-Entropy) measure the model's error.",
            exercises: [
                { title: "Guide to Activation Functions", url: "https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6" },
                { title: "Guide to Loss Functions", url: "https://towardsdatascience.com/common-loss-functions-in-machine-learning-46AF0FFB4D23" }
            ]
        }},
        { id: 'cnn', label: 'Convolutional NN (CNN)', type: 'intermediate', details: {
            description: "The workhorse of Computer Vision. CNNs use convolutional and pooling layers to automatically learn hierarchical features from images, making them ideal for tasks like image classification.",
            exercises: [
                { title: "Stanford CS231n: CNNs for Visual Recognition", url: "https://cs231n.github.io/convolutional-networks/" },
                { title: "The CIFAR-10 Dataset", url: "https://www.cs.toronto.edu/~kriz/cifar.html" }
            ]
        }},
        { id: 'rnn_lstm', label: 'Recurrent NN & LSTM', type: 'intermediate', details: {
            description: "Designed for sequence data like text or time series. RNNs have 'memory' of previous inputs. LSTMs and GRUs are advanced RNNs that solve the vanishing gradient problem, enabling them to learn long-range dependencies.",
            exercises: [
                { title: "Understanding LSTMs", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
                { title: "The Unreasonable Effectiveness of RNNs", url: "http://karpathy.github.io/2015/05/21/rnn-effectiveness/" }
            ]
        }},
        { id: 'transformers', label: 'Transformers', type: 'advanced', details: {
            description: "The state-of-the-art architecture, revolutionizing Natural Language Processing (NLP). Based entirely on the 'Self-Attention' mechanism, it processes all inputs simultaneously, leading to models like BERT and GPT.",
            exercises: [
                { title: "Paper: Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
                { title: "The Illustrated Transformer", url: "http://jalammar.github.io/illustrated-transformer/" }
            ]
        }},
        { id: 'gans', label: 'Generative Adversarial Networks (GANs)', type: 'advanced', details: {
            description: "A framework for generative modeling where two neural networks, a Generator and a Discriminator, compete against each other, leading to the creation of highly realistic, novel data (e.g., images of faces that don't exist).",
            exercises: [
                { title: "Original GAN Paper", url: "https://arxiv.org/abs/1406.2661" },
                { title: "Kaggle: Getting started with GANs", url: "https://www.kaggle.com/code/jesucristo/gan-getting-started" }
            ]
        }},
        { id: 'dl_frameworks', label: 'DL Frameworks', type: 'basic', details: {
            description: "The tools to build these models. PyTorch and TensorFlow are the two dominant frameworks that provide the necessary building blocks and automatic differentiation.",
            exercises: [
                { title: "Official PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
                { title: "Official TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" }
            ]
        }},
    ],
    edges: [
        { from: 'dl_foundations', to: 'dl_frameworks' },
        { from: 'dl_foundations', to: 'activation_loss' },
        { from: 'activation_loss', to: 'cnn' },
        { from: 'activation_loss', to: 'rnn_lstm' },
        { from: 'rnn_lstm', to: 'transformers' },
        { from: 'activation_loss', to: 'gans' }
    ]
};