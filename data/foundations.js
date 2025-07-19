// data/foundations-data.js
if (typeof ROADMAP_DATA === 'undefined') { var ROADMAP_DATA = {}; }

ROADMAP_DATA.foundations = {
    nodes: [
        { id: 'cs_foundations', label: 'Core CS Foundations', type: 'basic', details: {
            description: "An overview of the essential systems that underpin all of modern computing. This roadmap provides a high-level tour of Networks, Operating Systems, Security, and Distributed Systems.",
        }},
        { id: 'networks_branch', label: 'Computer Networks', type: 'intermediate', details: {
            description: "How computers communicate across the globe. Key concepts include the TCP/IP stack, routing, and core application protocols like HTTP and DNS.",
            exercises: [{ title: "An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }]
        }},
        { id: 'os_branch', label: 'Operating Systems', type: 'intermediate', details: {
            description: "The software that manages computer hardware and software resources. Core topics are processes & threads, concurrency, scheduling, and memory management.",
            exercises: [{ title: "Operating Systems: Three Easy Pieces (Book)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" }]
        }},
        { id: 'security_branch', label: 'Computer Security', type: 'intermediate', details: {
            description: "The principles and practices of protecting computer systems and networks. This includes cryptography (the art of secret communication) and web security (protecting against common attacks).",
            exercises: [{ title: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" }]
        }},
        { id: 'distributed_branch', label: 'Distributed Systems', type: 'intermediate', details: {
            description: "The study of systems composed of multiple autonomous computers that communicate through a network. Key challenges include fault tolerance and achieving consensus.",
            exercises: [{ title: "The Raft Consensus Algorithm", url: "https://raft.github.io/" }]
        }},
    ],
    edges: [
        { from: 'cs_foundations', to: 'networks_branch' },
        { from: 'cs_foundations', to: 'os_branch' },
        { from: 'cs_foundations', to: 'security_branch' },
        { from: 'cs_foundations', to: 'distributed_branch' }
    ]
};