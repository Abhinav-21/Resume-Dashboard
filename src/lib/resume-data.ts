export const resumeData = {
  name: 'Abhinav Tiwari',
  summary: `A highly motivated Chemical Engineering student from MNNIT Allahabad with a strong passion for Data Science, Machine Learning, and Software Development. Possesses hands-on experience in building AI-driven solutions, including RAG pipelines and OCR models, and is proficient in Python, SQL, and various data analytics tools. A proven problem-solver with strong communication and collaboration skills, seeking to leverage technical expertise in a challenging role.`,
  contact: {
    phone: '+91-7054425113',
    email: 'abhiitiwarii0@gmail.com',
  },
  socials: {
    github: 'Abhinav-21',
    linkedin: 'abhinav-tiwari-mnnit',
  },
  education: [
    {
      institution: 'Motilal Nehru National Institute of Technology Allahabad',
      degree: 'Chemical Engineering, Bachelor of Technology',
      duration: '2021-2025',
      detail: 'CPI: 8.04',
    },
    {
      institution: 'S.K.D. Academy',
      degree: 'Intermediate | Central Board of Secondary Education',
      duration: '2020-2021',
      detail: 'Percentage: 95.6',
    },
    {
      institution: 'S.K.D. Academy',
      degree: 'Matriculation | Central Board of Secondary Education',
      duration: '2018-2019',
      detail: 'Percentage: 94.4',
    },
  ],
  experience: [
    {
      company: 'Shorthills AI',
      role: 'SDE Intern (Training Phase)',
      duration: 'March 2025 - April 2025',
      location: 'Gurugram, Haryana',
      points: [
        'Underwent rigorous hands-on training in Python, SQL, Advanced Excel, and Linux CLI & scripting, focusing on enterprise data workflows.',
        'Built familiarity with Git version control, team-based branching strategies, and collaborative development best practices.',
        'Learned and implemented Prompt Engineering techniques to fine-tune LLM responses for specific use cases (e.g., document processing, classification).',
        'Gained foundational knowledge of testing methodologies, including sanity and unit testing principles.',
        'Completed a capstone project on a Retrieval-Augmented Generation (RAG) pipeline, integrating LLMs with vector databases (Pinecone/Faiss) and using LangChain and Tesseract OCR.',
      ],
    },
    {
      company: 'Shorthills AI',
      role: 'SDE Intern (Pedigree Project – OCR & QA Automation)',
      duration: 'April 2025 - July 2025',
      location: 'Gurugram, Haryana',
      points: [
        'Worked as part of a cross-functional team to build an end-to-end OCR-based pipeline for document ingestion and data extraction for Pedigree brand packaging.',
        'Created training data for OCR models by preprocessing PDFs/images, annotating text regions, and curating a diverse dataset.',
        'Wrote sanity test scripts and unit test cases in Python to validate OCR accuracy and backend API behavior.',
        'Used SQL queries to inspect and validate data stored in post-OCR databases; worked on data cleanup scripts to fix inconsistent entries.',
        'Conducted performance benchmarking of OCR models, measuring inference time and accuracy on varied document types.',
        'Debugged and fixed bugs in both frontend (React) and backend (Python/Node.js) components of the internal QA portal.',
        'Worked with DBeaver for database navigation and Postman to test API endpoints during integration testing.',
        'Used Git to manage feature branches, raised pull requests, and participated in code reviews.',
      ],
    },
  ],
  projects: [
    {
      title: 'Multimodal Learning for Hinglish Meme Classification',
      github: 'https://github.com/Abhinav-21/Internet-Hinglish-Memes-Classification-using-Multimodal-Learning',
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        'Pandas',
        'NumPy',
        'Matplotlib',
      ],
      description:
        'Built a sentiment analyzer using the Memotion 3.0 dataset, leveraging both text and image features.',
      points: [
        'Combined DistilBERT-Multilingual for text and VGG16 for image processing in a multimodal model.',
        'Performed sentiment and emotion classification, achieving an F1-weighted score of 78.82%.',
        'Greatly improved over unimodal models in Humor (90.04%) and Motivational (95.62%) categories.',
      ],
    },
    {
      title: 'Healthcare Record Management System',
      github: 'https://github.com/Abhinav-21/Healthcare-Record-Management',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Express',
        'Python',
        'MongoDB',
        'Web3.storage',
      ],
      description:
        'Developed a web-based system with secure document storage and health data analytics.',
      points: [
        'Implemented distributed document storage with access control and token-based retrieval.',
        'Enabled hospital-only uploads and patient-level analytics: vaccination rates, chronic disease spread, BMI trends.',
      ],
    },
    {
      title: 'Handwritten Digit Recognition Model',
      github: 'https://github.com/Abhinav-21/Digit_Classification-Neural_Network',
      technologies: ['Python', 'NumPy', 'Pickle', 'Matplotlib', 'Keras'],
      description:
        'Implemented and trained a fully-connected neural network from scratch to classify handwritten digits (MNIST dataset).',
      points: [
        'Implemented core components including ReLU activation and Softmax output layer for multi-class classification.',
        'Achieved 93% accuracy by optimizing weights using backpropagation and gradient descent (GD).',
      ],
    },
    {
      title: 'Financial Insights Dashboard',
      github: null,
      technologies: ['MS Excel', 'Power BI', 'Pivot Tables', 'Data Validation'],
      description:
        'Built a semi-automated financial tracker with visual analytics for expense management and reporting.',
      points: [
        'Automated income/expense tracking with category tagging, month-end carry-forward, and data validation.',
        'Created Pivot Tables, Pie Charts, and Power BI dashboards to visualize financial trends.',
        'Applied dynamic formatting and summaries to highlight spending patterns and financial health.',
      ],
    },
    {
      title: 'Document Processing Automation using OCR and RAG',
      github: 'https://github.com/Abhinav-21/Document-Processing-Atomation',
      technologies: ['Python', 'Transformers', 'Tesseract OCR', 'LangChain'],
      description:
        'Developed an AI-powered system to extract, process, and retrieve document information for business automation.',
      points: [
        'Automated document data extraction and intelligent retrieval using OCR with Retrieval-Augmented Generation (RAG).',
        'Reduced manual document review effort, enabling faster access to key information.',
      ],
    },
  ],
  skills: {
    languages: ['Python (LinkedIn Certified Top 5%)', 'SQL', 'C++', 'C'],
    technologies: [
      'Data Warehousing',
      'ETL Pipelines',
      'Transformer Models',
      'LLMs',
      'Generative AI',
      'RAG',
    ],
    tools: [
      'VSCode',
      'Power BI',
      'MS Excel',
      'Jupyter Notebook',
      'Spyder',
      'MySQL',
      'Git',
      'pip',
      'npm',
    ],
    frameworks: ['ExpressJS'],
    cloud: ['AWS (Basics)', 'Apache Spark (Basics)'],
    softSkills: [
      'Communication',
      'Time-Management',
      'Problem-Solving',
      'Collaboration',
      'Creativity',
      'Adaptability',
      'Empathy',
      'Critical Thinking',
      'Data-driven Decision Making',
      'Troubleshooting',
    ],
    coursework: [
      'Data Structures and Algorithms',
      'Web Development',
      'Machine Learning',
    ],
  },
  interests: [
    'Data Science and Analytics',
    'Puzzling and Quizzing',
    'Machine Learning',
    'Generative AI',
    'Mathematics',
    'Debating',
    'Competitive Programming',
    'Data Structures and Algorithms',
    'Artificial Intelligence',
  ],
  achievements: [
    'Got an LOR from Bharat Petroleum CRDC and TPO MNNIT.',
    'Winner of Chemathlon under Rasayan in Avishkar (August, 2024)',
    'Winner of Just in Case under Nirmaan in Avishkar (August, 2024)',
    'Winner (team) of Gnosis India Quiz (March, 2024)',
    '2-year consecutive gold medal winner in Annual Athletics Meet in Shot-put (August, 2022)',
    'Winner Chemathlon under Rasayan (Mock Placement Drive) (August, 2022)',
  ],
  positions: [
    'Training and Placement Representative of the batch 2025',
    'Member of Expanding Horizons 5.0 (under Student Mentorship Program).',
    'Member of Hospitality Team in gnoTalks 2024',
  ],
  fullText: `Abhinav Tiwari
+91-7054425113 | abhiitiwarii0@gmail.com | Abhinav-21 | abhinav-tiwari-mnnit
A highly motivated Chemical Engineering student from MNNIT Allahabad with a strong passion for Data Science, Machine Learning, and Software Development. Possesses hands-on experience in building AI-driven solutions, including RAG pipelines and OCR models, and is proficient in Python, SQL, and various data analytics tools. A proven problem-solver with strong communication and collaboration skills, seeking to leverage technical expertise in a challenging role.
Education:
- Motilal Nehru National Institute of Technology Allahabad, B.Tech Chemical Engineering (2021-2025), CPI: 8.04
- S.K.D. Academy, Intermediate (2020-2021), 95.6%
- S.K.D. Academy, Matriculation (2018-2019), 94.4%
Experience:
- Shorthills AI, SDE Intern (Training Phase) (March 2025 - April 2025): Underwent rigorous hands-on training in Python, SQL, Advanced Excel, and Linux CLI & scripting. Built familiarity with Git, prompt engineering, and testing methodologies. Completed a capstone project on a RAG pipeline using LangChain, OpenAI API, and Pinecone/Faiss.
- Shorthills AI, SDE Intern (Pedigree Project – OCR & QA Automation) (April 2025 - July 2025): Worked on an end-to-end OCR pipeline for Pedigree brand packaging. Created training data, wrote test scripts in Python, and used SQL for data validation. Conducted performance benchmarking and fixed bugs in React and Node.js components.
Projects:
- Multimodal Learning for Hinglish Meme Classification: Sentiment analyzer using the Memotion 3.0 dataset. Combined DistilBERT-Multilingual and VGG16. Achieved 78.82% F1-score.
- Healthcare Record Management System: Web system with secure document storage (Web3.storage) and health data analytics using MERN stack and Python.
- Handwritten Digit Recognition Model: Neural network from scratch in Python, NumPy. Achieved 93% accuracy on MNIST. Implemented ReLU, Softmax, and backpropagation.
- Financial Insights Dashboard: Semi-automated financial tracker using MS Excel and Power BI for visual analytics.
- Document Processing Automation using OCR and RAG: AI system to extract, process, and retrieve document info using Python, Transformers, Tesseract OCR, LangChain.
Technical Skills:
- Languages: Python (LinkedIn Certified Top 5%), SQL, C++, C
- Technologies: Data Warehousing, ETL Pipelines, Transformer Models, LLMs, Generative AI, RAG
- Frameworks: ExpressJS
- Tools: VSCode, Power BI, MS Excel, Jupyter, Spyder, MySQL, Git, pip, npm
- Cloud/Big Data: AWS (Basics), Apache Spark (Basics)
- Soft Skills: Communication, Time-Management, Problem-Solving, Collaboration, Creativity, Adaptability, Empathy, Critical Thinking, Data-driven Decision Making, Troubleshooting
- Coursework: Data Structures and Algorithms, Web Development, Machine Learning
Interests: Data Science, Analytics, Puzzling, Quizzing, Machine Learning, Generative AI, Mathematics, Debating, Competitive Programming, Data Structures and Algorithms, Artificial Intelligence
Achievements: Received a LOR at BPCL CRDC for performance during the internship. Got an LOR from Bharat Petroleum CRDC and TPO MNNIT. Winner of Chemathlon under Rasayan in Avishkar (August, 2024). Winner of Just in Case under Nirmaan in Avishkar (August, 2024). Winner (team) of Gnosis India Quiz (March, 2024). 2-year consecutive gold medal winner in Annual Athletics Meet in Shot-put (August, 2022). Winner Chemathlon under Rasayan (Mock Placement Drive) (August, 2022).
Positions of Responsibility: Training and Placement Representative of the batch 2025. Member of Expanding Horizons 5.0 (under Student Mentorship Program). Member of Hospitality Team in gnoTalks 2024.`,
};
