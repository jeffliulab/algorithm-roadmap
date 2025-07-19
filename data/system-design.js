// data/system-design-data.js
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.system_design = {
    nodes: [
        { id: 'sd_interview_foundations', label: 'System Design Interview Principles', type: 'basic', details: {
            description: "The non-functional requirements that form the basis of any system design discussion: Scalability, Latency, Availability, and Consistency. You must be able to discuss these tradeoffs.",
            exercises: [{ title: "System Design Primer by Donne Martin", url: "https://github.com/donnemartin/system-design-primer" }]
        }},
        { id: 'sd_building_blocks', label: 'Core Building Blocks', type: 'intermediate', details: {
            description: "The toolbox for system designers: Load Balancers, Caching (CDNs, Redis), Databases (SQL vs. NoSQL), Message Queues (Kafka), and Search (Elasticsearch). Knowing when to use each is key.",
            exercises: [{ title: "Grokking the System Design Interview (Course)", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }]
        }},
        { id: 'sd_case_tinyurl', label: 'Interview Intro: Design TinyURL', type: 'intermediate', details: {
            description: "The 'Hello, World!' of system design interviews. A great starting point to practice discussing APIs, hashing, data models, and handling read/write traffic.",
            exercises: [{ title: "System Design Interview - A step by step guide", url: "https://github.com/checkcheckzz/system-design-interview" }]
        }},
        { id: 'sd_case_feed', label: 'Interview Staple: Design a News Feed', type: 'advanced', details: {
            description: "Designing a system like Twitter or Facebook's feed. This requires tackling the 'fan-out' problem and designing for a read-heavy system. A very common interview question.",
            exercises: [{ title: "Alexey's System Design Interview Cheatsheet", url: "https://github.com/aalhour/awesome-compilers" }]
        }},
        { id: 'sd_case_geospatial', label: 'Interview Advanced: Design Uber', type: 'advanced', details: {
            description: "Designing a real-time geospatial system. Challenges include efficient location updates (quadtrees, geohashing), matching riders to drivers, and ensuring reliability.",
            exercises: [{ title: "System Design Interview Cheatsheets & Prep", url: "https://github.com/jwasham/coding-interview-university#system-design" }]
        }},
    ],
    edges: [
        { from: 'sd_interview_foundations', to: 'sd_building_blocks' },
        { from: 'sd_building_blocks', to: 'sd_case_tinyurl' },
        { from: 'sd_case_tinyurl', to: 'sd_case_feed' },
        { from: 'sd_case_feed', to: 'sd_case_geospatial' }
    ]
};