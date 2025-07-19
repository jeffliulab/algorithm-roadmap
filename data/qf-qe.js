if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.qf_qe = {
    nodes: [
        { id: 'quant_root', label: 'Quantitative Finance & Economics', type: 'basic', details: {
            description: "A roadmap for the application of mathematical and statistical methods in finance and economics. This tree branches into Shared Foundations, Quantitative Finance (QF), and Quantitative Economics (QE).",
        }},

        // --- Branch 1: Shared Foundations ---
        { id: 'math_stats_foundations', label: 'Mathematical & Statistical Foundations', type: 'basic', details: {
            description: "The absolute prerequisites. A strong grasp of multivariable calculus, linear algebra, probability theory, and statistical inference is non-negotiable for both QF and QE.",
            exercises: [{ title: "Book: 'All of Statistics' by Larry Wasserman", url: "https://www.stat.cmu.edu/~larry/all-of-statistics/" }]
        }},
        { id: 'optimization', label: 'Optimization Theory', type: 'intermediate', details: {
            description: "The study of finding the best solution from a set of available alternatives. This includes linear programming, convex optimization, and dynamic programming, which are fundamental to both portfolio optimization (QF) and resource allocation models (QE).",
            exercises: [{ title: "Stanford Course: Convex Optimization (EE364a)", url: "https://web.stanford.edu/~boyd/cvxbook/" }]
        }},
        { id: 'time_series', label: 'Time Series Analysis', type: 'intermediate', details: {
            description: "Techniques for analyzing time-ordered data points. Core concepts like stationarity, autocorrelation, and models like ARMA, GARCH, and VAR are essential for modeling financial returns (QF) and macroeconomic data (QE).",
            exercises: [{ title: "StatQuest: Time Series Analysis", url: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" }]
        }},

        // --- Branch 2: Quantitative Finance (QF) ---
        { id: 'qf_foundations', label: 'Quant Finance Core', type: 'basic', details: {
            description: "The QF branch focuses on modeling financial markets and derivatives. The goal is often pricing, hedging, and algorithmic trading.",
        }},
        { id: 'financial_instruments', label: 'Financial Instruments', type: 'intermediate', details: {
            description: "Understanding the building blocks of financial markets: Equities (stocks), Fixed Income (bonds), and Derivatives (options, futures).",
            exercises: [{ title: "Book: 'Options, Futures, and Other Derivatives' by John C. Hull", url: "https://www.amazon.com/Options-Futures-Other-Derivatives-Global/dp/013447208X" }]
        }},
        { id: 'stochastic_calculus', label: 'Stochastic Calculus', type: 'intermediate', details: {
            description: "The mathematics of random processes over time. This is essential for modeling the random behavior of asset prices. Key concepts include Brownian Motion, Random Walks, and Itô's Lemma.",
            exercises: [{ title: "StatQuest: Brownian Motion and Random Walks", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" }]
        }},
        { id: 'option_pricing', label: 'Option Pricing Models', type: 'advanced', details: {
            description: "The Nobel-prize winning Black-Scholes-Merton model is the most famous example of using stochastic calculus to price financial derivatives, forming the bedrock of modern quantitative finance.",
            exercises: [{ title: "Black-Scholes Model Explained", url: "https://www.investopedia.com/terms/b/blackscholes.asp" }]
        }},
        { id: 'risk_management', label: 'Risk Management', type: 'advanced', details: {
            description: "The quantitative measurement and management of financial risk. Key metrics include Value at Risk (VaR) and Conditional Value at Risk (CVaR). Also involves understanding the 'Greeks' for derivatives hedging.",
            exercises: [{ title: "Value at Risk (VaR) Explained", url: "https://www.investopedia.com/terms/v/var.asp" }]
        }},
        { id: 'algo_trading', label: 'Algorithmic Trading & Backtesting', type: 'advanced', details: {
            description: "The practical application of quantitative models. This involves designing, implementing, and rigorously backtesting automated trading strategies to identify and exploit market inefficiencies.",
            exercises: [{ title: "Quantopian Lecture Series (Archived)", url: "https://github.com/shakti-g/quantopian-archive" }]
        }},
        
        // --- Branch 3: Quantitative Economics (QE) ---
        { id: 'qe_foundations', label: 'Quant Economics Core', type: 'basic', details: {
            description: "The QE branch focuses on applying quantitative methods to economic phenomena. The goal is often forecasting, policy analysis, and understanding causal relationships.",
        }},
        { id: 'econometrics', label: 'Econometrics', type: 'intermediate', details: {
            description: "The application of statistical methods to economic data. This is the foundation of empirical economics, starting with Ordinary Least Squares (OLS) and moving to more advanced techniques for dealing with issues like endogeneity.",
            exercises: [{ title: "Book: 'Mostly Harmless Econometrics' by Angrist & Pischke", url: "https://www.mostlyharmlesseconometrics.com/" }]
        }},
        { id: 'causal_inference_qe', label: 'Causal Inference', type: 'advanced', details: {
            description: "A primary goal of modern econometrics: distinguishing correlation from causation. This involves methods like Instrumental Variables (IV), Regression Discontinuity (RDD), and Difference-in-Differences (DiD).",
            exercises: [{ title: "Book: 'Causal Inference: The Mixtape' by Scott Cunningham", url: "https://mixtape.scunning.com/" }]
        }},
        { id: 'macro_modeling', label: 'Macroeconomic Modeling', type: 'advanced', details: {
            description: "Building models of the entire economy to understand business cycles, growth, and the effects of monetary/fiscal policy. Dynamic Stochastic General Equilibrium (DSGE) models are a cornerstone of modern macroeconomics.",
            exercises: [{ title: "Intro to DSGE Models", url: "https://sites.google.com/site/pfeifereconomics/dsge-a-primer" }]
        }},
        { id: 'computational_econ', label: 'Computational Economics', type: 'advanced', details: {
            description: "Using computational methods to solve economic models that are too complex for analytical solutions. This includes numerical methods, simulations, and Agent-Based Modeling (ABM).",
            exercises: [{ title: "QuantEcon: Lectures in Quantitative Economics", url: "https://quantecon.org/" }]
        }},
    ],
    edges: [
        // Connect shared foundations to the root
        { from: 'quant_root', to: 'math_stats_foundations' },
        { from: 'math_stats_foundations', to: 'optimization' },
        { from: 'math_stats_foundations', to: 'time_series' },

        // Connect QF and QE branches to their shared foundations
        { from: 'optimization', to: 'qf_foundations' },
        { from: 'optimization', to: 'qe_foundations' },
        { from: 'time_series', to: 'qf_foundations' },
        { from: 'time_series', to: 'qe_foundations' },

        // Build out the QF branch
        { from: 'qf_foundations', to: 'financial_instruments' },
        { from: 'financial_instruments', to: 'stochastic_calculus' },
        { from: 'stochastic_calculus', to: 'option_pricing' },
        { from: 'option_pricing', to: 'risk_management' },
        { from: 'risk_management', to: 'algo_trading' },

        // Build out the QE branch
        { from: 'qe_foundations', to: 'econometrics' },
        { from: 'econometrics', to: 'causal_inference_qe' },
        { from: 'econometrics', to: 'macro_modeling' },
        { from: 'macro_modeling', to: 'computational_econ' }
    ]
};