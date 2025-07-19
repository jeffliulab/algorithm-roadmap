// data/data-science-data.js
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.data_science = {
    nodes: [
        { id: 'ds_lifecycle', label: 'Data Science Lifecycle', type: 'basic', details: {
            description: "The end-to-end process of a data science project: from understanding the business problem and collecting data, to exploratory analysis (EDA), modeling, and finally deployment and monitoring.",
        }},
        { id: 'eda_viz', label: 'EDA & Visualization', type: 'intermediate', details: {
            description: "Exploratory Data Analysis is the art of understanding your data. It involves statistical summaries and creating powerful visualizations (using libraries like Matplotlib, Seaborn, Plotly) to uncover patterns and insights.",
            exercises: [{ title: "Kaggle: Data Visualization Course", url: "https://www.kaggle.com/learn/data-visualization" }]
        }},
        { id: 'stats_testing', label: 'Statistical Inference & A/B Testing', type: 'intermediate', details: {
            description: "The foundation for making data-driven decisions. This includes hypothesis testing, understanding p-values, and designing/analyzing controlled experiments (A/B tests) to determine the impact of a change.",
            exercises: [{ title: "Coursera: A/B Testing", url: "https://www.coursera.org/learn/analytics-business-metrics" }]
        }},
        { id: 'causal_inference', label: 'Causal Inference', type: 'advanced', details: {
            description: "Moving beyond correlation to understand causation ('what if?'). This is a critical field for assessing the true impact of interventions. It involves concepts like counterfactuals, confounding variables, and methods like instrumental variables and Do-calculus.",
            exercises: [
                { title: "The Book of Why by Judea Pearl", url: "https://www.amazon.com/Book-Why-Science-Cause-Effect/dp/046509760X" },
                { title: "Causal Inference: The Mixtape (Book)", url: "https://mixtape.scunning.com/" }
            ]
        }},
    ],
    edges: [
        { from: 'ds_lifecycle', to: 'eda_viz' },
        { from: 'ds_lifecycle', to: 'stats_testing' },
        { from: 'stats_testing', to: 'causal_inference' }
    ]
};