// data/sde-mlops-data.js
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.sde_mlops = {
    nodes: [
        { id: 'test_exception', label: 'Learn Test and Exception', type: 'basic', details: {
            description: `
            In python, you can use assert to write a simple assertion.
            <br>assertion bool_equation , "FALSE INFORMATION"
            `,
            exercises: [{ title: "...", url: "https://www.example.com" }]
        }},
        { id: 'swe_foundations', label: 'Software Engineering', type: 'basic', details: {
            description: "The fundamentals of building robust and maintainable software. This includes version control with Git, agile methodologies, code reviews, and a strong testing culture (unit, integration, end-to-end).",
            exercises: [{ title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" }]
        }},
        { id: 'databases', label: 'Databases', type: 'intermediate', details: {
            description: "How data is stored, retrieved, and managed. Understand the tradeoffs between SQL (relational) and NoSQL (non-relational) databases, the importance of indexing, and ACID transaction guarantees.",
            exercises: [{ title: "SQL vs. NoSQL: What's the difference?", url: "https://www.mongodb.com/sql-vs-nosql" }]
        }},
        { id: 'data_engineering', label: 'Data Engineering', type: 'intermediate', details: {
            description: "Building the pipelines that collect, transform, and transport data. Core concepts include ETL/ELT processes, data warehousing, and working with big data tools like Apache Spark and workflow orchestrators like Airflow.",
            exercises: [{ title: "The Fundamentals of Data Engineering (Book)", url: "https://www.oreilly.com/library/view/fundamentals-of-data/9781098108308/" }]
        }},
        { id: 'data_centric_ai', label: 'Data-Centric AI', type: 'advanced', details: {
            description: "A paradigm shift championed by Andrew Ng, which argues that for many problems, systematically improving data quality is more effective than tweaking the model architecture. It involves techniques for data labeling, augmentation, and cleaning.",
            exercises: [{ title: "From Model-centric to Data-centric AI", url: "https://www.deeplearning.ai/the-batch/issue-101/" }]
        }},
        { id: 'mlops', label: 'MLOps', type: 'advanced', details: {
            description: "The application of DevOps principles to machine learning systems. This field covers the entire lifecycle of a model, including CI/CD for ML, model versioning (MLflow), automated training, deployment, and monitoring.",
            exercises: [{ title: "MLOps Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" }]
        }},
    ],
    edges: [
        { from: 'swe_foundations', to: 'databases' },
        { from: 'databases', to: 'data_engineering' },
        { from: 'data_engineering', to: 'data_centric_ai' },
        { from: 'data_centric_ai', to: 'mlops' }
    ]
};