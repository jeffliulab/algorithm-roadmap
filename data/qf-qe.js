// data/qf-qe-data.js
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.qf_qe = {
    nodes: [
        { id: 'qf_foundations', label: 'Quant Foundations', type: 'basic', details: {
            description: "An introduction to Quantitative Finance (QF) and Quantitative Economics (QE). This field applies mathematical and statistical methods to analyze financial markets and economic data.",
            exercises: [{ title: "QuantStart: Successful Algorithmic Trading", url: "https://www.quantstart.com/articles/Successful-Algorithmic-Trading-Comprehensive-Guide/" }]
        }},
        { id: 'financial_instruments', label: 'Financial Instruments', type: 'intermediate', details: {
            description: "Understanding the building blocks of financial markets: Equities (stocks), Fixed Income (bonds), and Derivatives (options, futures).",
        }},
        { id: 'stochastic_calculus', label: 'Stochastic Calculus', type: 'intermediate', details: {
            description: "The mathematics of random processes over time. This is essential for modeling asset prices. Key concepts include Brownian Motion, Random Walks, and Itô's Lemma.",
            exercises: [{ title: "StatQuest: Brownian Motion and Random Walks", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" }]
        }},
        { id: 'option_pricing', label: 'Option Pricing Models', type: 'advanced', details: {
            description: "The Nobel-prize winning Black-Scholes-Merton model is the most famous example of using stochastic calculus to price financial derivatives, forming the bedrock of modern quantitative finance.",
            exercises: [{ title: "Black-Scholes Model Explained", url: "https://www.investopedia.com/terms/b/blackscholes.asp" }]
        }},
        { id: 'algo_trading', label: 'Algorithmic Trading & Backtesting', type: 'advanced', details: {
            description: "The practical application of quantitative models. This involves designing, implementing, and rigorously backtesting automated trading strategies to identify and exploit market inefficiencies.",
            exercises: [{ title: "Quantopian Lecture Series (Archived)", url: "https://github.com/shakti-g/quantopian-archive" }]
        }},
    ],
    edges: [
        { from: 'qf_foundations', to: 'financial_instruments' },
        { from: 'qf_foundations', to: 'stochastic_calculus' },
        { from: 'stochastic_calculus', to: 'option_pricing' },
        { from: 'option_pricing', to: 'algo_trading' }
    ]
};