// data/reinforcement-learning-data.js

if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

// 定义 "reinforcement_learning" 主题的数据
ROADMAP_DATA.reinforcement_learning = {
    nodes: [
        { id: 'rl_foundations', label: 'RL Foundations', type: 'basic', details: {
            description: "The fundamental concepts of RL: Agent, Environment, State, Action, and Reward. The entire problem is formalized using a Markov Decision Process (MDP).",
            exercises: [
                { title: "Sutton & Barto: Reinforcement Learning: An Introduction", url: "http://incompleteideas.net/book/the-book-2nd.html" },
                { title: "David Silver's RL Course (Lecture 1 & 2)", url: "http://googleusercontent.com/youtube.com/7" }
            ]
        }},
        { id: 'q_learning', label: 'Q-Learning', type: 'intermediate', details: {
            description: "A classic value-based, model-free algorithm. The agent learns the 'quality' (Q-value) of taking a certain action in a certain state by updating a Q-table using the Bellman equation. It's the foundation for many advanced methods.",
            exercises: [
                { title: "Simple Q-Learning tutorial with Python", url: "https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/" },
                { title: "OpenAI Gym: FrozenLake Environment", url: "https://gymnasium.farama.org/environments/toy_text/frozen_lake/" }
            ]
        }},
        { id: 'deep_q_networks', label: 'Deep Q-Networks (DQN)', type: 'intermediate', details: {
            description: "The breakthrough that combined Q-Learning with Deep Learning. Instead of a Q-table, a neural network is used to approximate the Q-values, allowing RL to scale to high-dimensional state spaces like pixels from a screen.",
            exercises: [
                { title: "DeepMind's 2013 DQN Paper (Playing Atari)", url: "https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf" },
                { title: "PyTorch DQN Tutorial", url: "https://pytorch.org/tutorials/intermediate/dqn_tutorial.html" }
            ]
        }},
        { id: 'policy_gradients', label: 'Policy Gradients', type: 'advanced', details: {
            description: "A different family of algorithms that directly learns the policy (a mapping from state to action) instead of learning value functions. The policy is a neural network that is updated using gradient ascent to maximize expected rewards.",
            exercises: [
                { title: "Andrej Karpathy: Pong from Pixels", url: "http://karpathy.github.io/2016/05/31/rl/" },
                { title: "OpenAI Spinning Up: Intro to Policy Optimization", url: "https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html" }
            ]
        }},
        { id: 'actor_critic', label: 'Actor-Critic Methods', type: 'advanced', details: {
            description: "The state-of-the-art approach that combines the best of both worlds. The 'Actor' is a policy network that decides which action to take, and the 'Critic' is a value network that evaluates how good that action was. This leads to more stable and efficient learning.",
            exercises: [
                { title: "Understanding Actor-Critic Methods", url: "https://towardsdatascience.com/understanding-actor-critic-methods-931b97b6df3f" },
                { title: "Example: A2C and A3C", url: "https://openai.com/research/baselines-acktr-a2c" }
            ]
        }},
    ],
    edges: [
        { from: 'rl_foundations', to: 'q_learning' },
        { from: 'q_learning', to: 'deep_q_networks' },
        { from: 'rl_foundations', to: 'policy_gradients' },
        { from: 'deep_q_networks', to: 'actor_critic' },
        { from: 'policy_gradients', to: 'actor_critic' }
    ]
};