if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.reinforcement_learning = {
    nodes: [
        { id: 'rl_root', label: 'Reinforcement Learning Roadmap', type: 'basic', details: {
            description: "A comprehensive roadmap based on the Sutton & Barto textbook, expanded with Deep Reinforcement Learning and state-of-the-art research topics like RLHF for LLMs and Meta-Learning.",
        }},

        // --- Part I: The Foundations of Reinforcement Learning ---
        { id: 'mdp_foundations', label: 'I: Markov Decision Processes (MDPs)', type: 'basic', details: {
            description: "The mathematical framework for formalizing RL problems. This is the absolute foundation, defining the interaction between Agent and Environment through States, Actions, Rewards, Policies (π), and Value Functions (V, Q).",
            exercises: [
                { title: "Sutton & Barto, Ch 3: Finite Markov Decision Processes", url: "http://incompleteideas.net/book/the-book-2nd.html#chap3" },
                { title: "David Silver's RL Course, Lecture 2: MDPs", url: "https://www.youtube.com/watch?v=AzXpcb4b64A" }
            ]
        }},
        { id: 'bellman_equations', label: 'I: The Bellman Equations', type: 'intermediate', details: {
            description: "The central equations in RL. They express the relationship between the value of a state and the values of its successor states. Understanding the Bellman optimality equations is key to grasping how RL algorithms find optimal policies.",
            exercises: [
                { title: "Sutton & Barto, Sec 3.5-3.6: Optimality", url: "http://incompleteideas.net/book/the-book-2nd.html#sec:3.5" },
                { title: "Deriving the Bellman Equation", url: "https://www.jeremyjordan.me/reinforcement-learning-introduction/" }
            ]
        }},
        
        // --- Part II: Classical Solution Methods ---
        { id: 'dp_planning', label: 'II: Dynamic Programming (Planning)', type: 'intermediate', details: {
            description: "If the complete model of the environment is known (i.e., you know the transition probabilities), DP methods like Policy Iteration and Value Iteration can be used to compute optimal policies. This is also called 'Planning'.",
            exercises: [{ title: "Sutton & Barto, Ch 4: Dynamic Programming", url: "http://incompleteideas.net/book/the-book-2nd.html#chap4" }]
        }},
        { id: 'model_free_intro', label: 'II: Model-Free Learning', type: 'basic', details: {
            description: "What if the model is unknown? Model-free methods learn directly from experience (samples of states, actions, rewards). This branch covers the two main approaches: Monte Carlo and Temporal-Difference.",
        }},
        { id: 'monte_carlo', label: 'II: Monte Carlo (MC) Methods', type: 'intermediate', details: {
            description: "Learning from complete episodes. The agent waits until the end of an episode, then the total return is used to update the value estimates for the states visited in that episode. Simple but can have high variance.",
            exercises: [{ title: "Sutton & Barto, Ch 5: Monte Carlo Methods", url: "http://incompleteideas.net/book/the-book-2nd.html#chap5" }]
        }},
        { id: 'temporal_difference', label: 'II: Temporal-Difference (TD) Learning', type: 'intermediate', details: {
            description: "The core of modern RL. TD methods learn from incomplete episodes by 'bootstrapping'—updating value estimates based on other learned estimates. This includes SARSA (on-policy) and Q-Learning (off-policy).",
            exercises: [{ title: "Sutton & Barto, Ch 6: Temporal-Difference Learning", url: "http://incompleteideas.net/book/the-book-2nd.html#chap6" }]
        }},

        // --- Part III: Deep Reinforcement Learning ---
        { id: 'function_approximation', label: 'III: Function Approximation', type: 'intermediate', details: {
            description: "The bridge from classical to deep RL. When state spaces are too large for tables, we use parameterized functions (like linear models or neural networks) to approximate value functions (V̂, Q̂) or policies (π̂).",
            exercises: [{ title: "Sutton & Barto, Part II Intro: Function Approximation", url: "http://incompleteideas.net/book/the-book-2nd.html#partII" }]
        }},
        { id: 'dqn', label: 'III: Deep Q-Networks (DQN)', type: 'advanced', details: {
            description: "The first major success of Deep RL. DQN uses a deep neural network to approximate the Q-function and introduced key innovations like Experience Replay and a fixed Target Network for stable training. Extensions include Double DQN and Dueling DQN.",
            exercises: [
                { title: "DeepMind's 2015 Nature Paper: Human-level control through deep reinforcement learning", url: "https://www.nature.com/articles/nature14236" },
                { title: "Lilian Weng's Blog: A (Long) Peek into Reinforcement Learning", url: "https://lilianweng.github.io/posts/2018-02-19-rl-overview/" }
            ]
        }},
        { id: 'policy_gradients', label: 'III: Policy Gradients & REINFORCE', type: 'advanced', details: {
            description: "The other main family of DRL algorithms. Instead of learning a value function, we directly optimize a parameterized policy. The REINFORCE algorithm is the fundamental baseline for this approach.",
            exercises: [
                { title: "Sutton & Barto, Ch 13: Policy Gradient Methods", url: "http://incompleteideas.net/book/the-book-2nd.html#chap13" },
                { title: "OpenAI Spinning Up: Intro to Policy Optimization", url: "https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html" }
            ]
        }},
        { id: 'actor_critic', label: 'III: Actor-Critic Methods', type: 'advanced', details: {
            description: "The modern workhorse of DRL, combining Policy Gradients (the Actor) and Value Function estimation (the Critic). The critic helps reduce the variance of the policy gradient. This family includes A2C/A3C, DDPG, TRPO, PPO, and SAC.",
            exercises: [
                { title: "OpenAI Spinning Up: A Guide to Actor-Critic Algorithms", url: "https://spinningup.openai.com/en/latest/algorithms/sac.html" },
                { title: "Paper: Proximal Policy Optimization (PPO)", url: "https://arxiv.org/abs/1707.06347" }
            ]
        }},

        // --- Part IV: Advanced & Frontier Topics ---
        { id: 'model_based_rl', label: 'IV: Model-Based RL', type: 'advanced', details: {
            description: "In contrast to model-free methods, these algorithms learn a model of the environment's dynamics, then use that learned model for planning (e.g., via simulation). This can lead to much greater sample efficiency. AlphaGo and MuZero are famous examples.",
            exercises: [{ title: "DeepMind's MuZero Paper", url: "https://www.nature.com/articles/s41586-020-03051-4" }]
        }},
        { id: 'meta_learning_rl', label: 'IV: Meta-Learning ("Learning to Learn")', type: 'advanced', details: {
            description: "The goal is to train an agent that can rapidly adapt to new, unseen tasks. The agent is trained over a distribution of tasks, learning a general strategy that can be quickly fine-tuned. Key algorithms include MAML.",
            exercises: [{ title: "Lilian Weng's Blog: Meta-Learning", url: "https://lilianweng.github.io/posts/2018-11-30-meta-learning/" }]
        }},
        { id: 'rlhf_llm', label: 'IV: RLHF & Large Language Models', type: 'advanced', details: {
            description: "Reinforcement Learning from Human Feedback is the key technique used to align powerful LLMs (like GPT) with human preferences. A reward model is trained on human feedback, and then PPO is used to fine-tune the LLM to maximize this reward signal, making it more helpful and harmless.",
            exercises: [
                { title: "OpenAI's InstructGPT Paper (The basis for ChatGPT)", url: "https://arxiv.org/abs/2203.02155" },
                { title: "Hugging Face Blog: Illustrating RLHF", url: "https://huggingface.co/blog/rlhf" }
            ]
        }},
    ],
    edges: [
        // Part I
        { from: 'rl_root', to: 'mdp_foundations' },
        { from: 'mdp_foundations', to: 'bellman_equations' },
        
        // Part II
        { from: 'bellman_equations', to: 'dp_planning' },
        { from: 'bellman_equations', to: 'model_free_intro' },
        { from: 'model_free_intro', to: 'monte_carlo' },
        { from: 'model_free_intro', to: 'temporal_difference' },
        
        // Part III
        { from: 'temporal_difference', to: 'function_approximation' },
        { from: 'function_approximation', to: 'dqn' },
        { from: 'function_approximation', to: 'policy_gradients' },
        { from: 'dqn', to: 'actor_critic' },
        { from: 'policy_gradients', to: 'actor_critic' },

        // Part IV
        { from: 'actor_critic', to: 'model_based_rl' },
        { from: 'actor_critic', to: 'meta_learning_rl' },
        { from: 'actor_critic', to: 'rlhf_llm' }
    ]
};