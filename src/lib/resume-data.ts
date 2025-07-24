
export const resumeData = {
  name: 'Abhinav Tiwari',
  summary: `A highly motivated Engineering graduate from MNNIT Allahabad with a strong passion for Data Science, Machine Learning, and Software Development. Possesses hands-on experience in building AI-driven solutions, including RAG pipelines and OCR models, and is proficient in Python, SQL, and various data analytics tools. A proven problem-solver with strong communication and collaboration skills, seeking to leverage technical expertise in a challenging role.`,
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
      role: 'SDE Intern',
      duration: 'March 2025 - Ongoing',
      location: 'Gurugram, Haryana',
      points: [
        'Developed and tested an end-to-end OCR pipeline for document ingestion and data extraction using Tesseract, LangChain, and vector databases.',
        'Engineered a RAG pipeline for intelligent, context-aware Q&A over document collections.',
        'Wrote sanity and unit tests to validate OCR accuracy and backend API behavior.',
        'Utilized SQL for data validation and cleanup in post-OCR databases, fixing inconsistencies.',
        'Debugged frontend (React) and backend (Python/Node.js) components of an internal QA portal.',
      ],
    },
  ],
  projects: [
    {
      title: 'Multimodal Learning for Hinglish Meme Classification',
      github:
        'https://github.com/Abhinav-21/Internet-Hinglish-Memes-Classification-using-Multimodal-Learning',
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        'Pandas',
        'NumPy',
        'Matplotlib',
      ],
      description:
        'This project focuses on classifying Internet Hinglish memes by leveraging both textual and visual information. The primary goal was to address sentiment analysis (positive, negative, neutral) and emotion classification (humor, sarcasm, etc.) as part of the Memotion 3.0 competition. The project addresses two primary tasks: Task A - Sentiment Analysis (classifying memes into positive, negative, or neutral categories) and Task B - Emotion Classification (identifying humor, sarcasm, offensiveness, and motivational content). The dataset is sourced from the Memotion 3.0 competition and includes 10,000 internet memes, with a subset featuring Hinglish. The project utilizes DistilBERTMulti for text analysis, VGG16 for image analysis and a Multimodal Model combining both to leverage both text and image features for classification.',
      points: [
        'Utilized the Memotion 3.0 dataset of 10,000 memes, including Hinglish text and OCR-extracted content.',
        'Constructed a multimodal architecture combining DistilBERT-Multilingual for text analysis and a pre-trained VGG16 for image feature extraction.',
        'Fused text and image features to create a joint representation, enabling the model to learn from both modalities simultaneously.',
        'Achieved a competitive F1-weighted score of 78.82% in sentiment and emotion classification tasks.',
        'The multimodal approach significantly outperformed unimodal models, especially in classifying Humor (90.04% F1-score) and Motivational (95.62% F1-score) content.',
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
        'Developed a full-stack, web-based platform to securely manage healthcare records and provide data-driven public health insights. The system was designed with a focus on data integrity, patient privacy, and scalability, using modern web technologies to create a robust solution for healthcare data management. The platform aimed to solve the problem of fragmented and insecure health records by providing a centralized, secure, and analyzable repository for patient data.',
      points: [
        'Built with a MERN stack (MongoDB, Express, React, Node.js) for a robust and scalable architecture.',
        'Implemented decentralized, secure document storage using IPFS via Web3.storage, with token-based access control for patient privacy.',
        'Designed a system allowing hospitals to upload patient records securely while restricting access to authorized personnel.',
        'Created a patient-level analytics dashboard using Python to visualize key health metrics like vaccination rates, chronic disease prevalence, and community BMI trends.',
        'The system successfully demonstrated a secure and efficient way to manage healthcare records, providing valuable insights for public health initiatives.',
      ],
    },
    {
      title: 'Handwritten Digit Recognition Model',
      github:
        'https://github.com/Abhinav-21/Digit_Classification-Neural_Network',
      technologies: ['Python', 'NumPy', 'Pickle', 'Matplotlib', 'Keras'],
      description:
        'Implemented and trained a fully-connected neural network from scratch to classify handwritten digits from the MNIST dataset. The project goal was to build a deep understanding of fundamental neural network components, including layers, activation functions, forward propagation, and backpropagation, without relying on high-level deep learning libraries for the core logic. The model was designed to serve as a foundational exercise in understanding the mechanics of neural networks.',
      points: [
        'Constructed the network using only Python and NumPy to handle core matrix operations and computations.',
        'Implemented the ReLU activation function for hidden layers and a Softmax output layer for multi-class probability distribution.',
        'Engineered the backpropagation algorithm from scratch to calculate gradients and update network weights.',
        'Optimized the model using mini-batch gradient descent (GD) to efficiently train on the 60,000-image dataset.',
        'Achieved a 93% classification accuracy on the test set, demonstrating a solid implementation of core deep learning concepts.',
      ],
    },
    {
      title: 'Financial Insights Dashboard',
      github: null,
      technologies: ['MS Excel', 'Power BI', 'Pivot Tables', 'Data Validation'],
      description:
        'Built a semi-automated financial tracker in MS Excel with an integrated Power BI dashboard. The goal was to create a user-friendly system for personal expense management, budgeting, and visual reporting without manual data aggregation. The project aimed to solve the common problem of manual and tedious expense tracking by leveraging the capabilities of Excel for data management and Power BI for interactive visualization, providing a clear and actionable overview of personal finances.',
      points: [
        'Automated income and expense tracking using Excel tables with built-in formulas for category tagging and month-end balance carry-forward.',
        'Implemented data validation rules to ensure data integrity and prevent incorrect entries.',
        'Created interactive Pivot Tables and Pie Charts in Excel to summarize spending by category and time.',
        'Connected the Excel workbook to Power BI to build a dynamic dashboard visualizing financial trends, spending patterns, and progress against budget goals.',
        'The resulting dashboard provided a clear, at-a-glance view of financial health, enabling better budgeting and financial planning.',
      ],
    },
    {
      title: 'Document Processing Automation using OCR and RAG',
      github: 'https://github.com/Abhinav-21/Document-Processing-Atomation',
      technologies: ['Python', 'Transformers', 'Tesseract OCR', 'LangChain'],
      description:
        'Developed an AI-powered system to automate the extraction, processing, and retrieval of information from unstructured documents. The solution integrates Optical Character Recognition (OCR) with a Retrieval-Augmented Generation (RAG) pipeline to enable intelligent search and question-answering capabilities. The project aimed to tackle the challenge of manually sifting through large volumes of documents by creating an intelligent system that can understand and retrieve information based on natural language queries.',
      points: [
        'Utilized Tesseract OCR to accurately extract raw text from scanned documents and images.',
        'Built a RAG pipeline using LangChain that chunks the extracted text, generates embeddings, and stores them in a vector database.',
        'Integrated a large language model (LLM) to understand natural language queries and retrieve contextually relevant information from the document corpus.',
        'The system significantly reduces manual document review time and enables users to find key information with simple questions.',
        'This solution provides a scalable way to manage and query large document repositories, making information more accessible and actionable.',
      ],
    },
  ],
  skills: {
    languages: ['Python (LinkedIn Top 5%)', 'SQL', 'C++', 'C', 'Bash'],
    technologies: [
      'Data Warehousing',
      'ETL Pipelines',
      'Transformer Models',
      'LLMs',
      'RAG',
      'OCR',
      'Generative AI',
      'Prompt Engineering',
      'Scripting',
      'Model Evaluation',
    ],
    testing: [
      'Unit Testing',
      'Sanity Testing',
      'Frontend/Backend Testing',
      'Bug Tracking',
      'Performance Benchmarking',
    ],
    tools: [
      'VSCode',
      'Power BI',
      'MS Excel',
      'Jupyter Notebook',
      'Spyder',
      'MySQL',
      'Postman',
      'Git',
      'pip',
      'npm',
      'DBeaver',
    ],
    frameworks: ['ExpressJS', 'LangChain', 'Tesseract OCR'],
    cloud: [
      'AWS (Basics)',
      'Apache Spark (Basics)',
      'Vector Databases (Pinecone/Faiss)',
    ],
    softSkills: [
      'Communication',
      'Problem-Solving',
      'Debugging',
      'Collaboration',
      'Adaptability',
      'Critical Thinking',
      'Data-driven Decision Making',
      'Troubleshooting',
      'Time Management',
      'Empathy',
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
A highly motivated Chemical Engineering graduate from MNNIT Allahabad with a strong passion for Data Science, Machine Learning, and Software Development. Possesses hands-on experience in building AI-driven solutions, including RAG pipelines and OCR models, and is proficient in Python, SQL, and various data analytics tools. A proven problem-solver with strong communication and collaboration skills, seeking to leverage technical expertise in a challenging role.
Education:
- Motilal Nehru National Institute of Technology Allahabad, B.Tech Chemical Engineering (2021-2025), CPI: 8.04
- S.K.D. Academy, Intermediate (2020-2021), 95.6%
- S.K.D. Academy, Matriculation (2018-2019), 94.4%
Experience:
- Shorthills AI, SDE Intern (March 2024 - Ongoing): Developed and tested an end-to-end OCR pipeline for document ingestion and data extraction using Tesseract, LangChain, and vector databases. Engineered a RAG pipeline for intelligent, context-aware Q&A over document collections. Wrote sanity and unit tests to validate OCR accuracy and backend API behavior. Utilized SQL for data validation and cleanup in post-OCR databases, fixing inconsistencies. Debugged frontend (React) and backend (Python/Node.js) components of an internal QA portal.
Projects:
- Multimodal Learning for Hinglish Meme Classification: This project focuses on classifying Internet Hinglish memes by leveraging both textual and visual information. The primary goal was to address sentiment analysis (positive, negative, neutral) and emotion classification (humor, sarcasm, etc.) as part of the Memotion 3.0 competition. The project addresses two primary tasks: Task A - Sentiment Analysis (classifying memes into positive, negative, or neutral categories) and Task B - Emotion Classification (identifying humor, sarcasm, offensiveness, and motivational content). The dataset is sourced from the Memotion 3.0 competition and includes 10,000 internet memes, with a subset featuring Hinglish. The project utilizes DistilBERTMulti for text analysis, VGG16 for image analysis and a Multimodal Model combining both to leverage both text and image features for classification. Utilized the Memotion 3.0 dataset of 10,000 memes, including Hinglish text and OCR-extracted content. Constructed a multimodal architecture combining DistilBERT-Multilingual for text analysis and a pre-trained VGG16 for image feature extraction. Fused text and image features to create a joint representation, enabling the model to learn from both modalities simultaneously. Achieved a competitive F1-weighted score of 78.82% in sentiment and emotion classification tasks. The multimodal approach significantly outperformed unimodal models, especially in classifying Humor (90.04% F1-score) and Motivational (95.62% F1-score) content.
- Healthcare Record Management System: Developed a full-stack, web-based platform to securely manage healthcare records and provide data-driven public health insights. The system was designed with a focus on data integrity, patient privacy, and scalability, using modern web technologies to create a robust solution for healthcare data management. The platform aimed to solve the problem of fragmented and insecure health records by providing a centralized, secure, and analyzable repository for patient data. Built with a MERN stack (MongoDB, Express, React, Node.js) for a robust and scalable architecture. Implemented decentralized, secure document storage using IPFS via Web3.storage, with token-based access control for patient privacy. Designed a system allowing hospitals to upload patient records securely while restricting access to authorized personnel. Created a patient-level analytics dashboard using Python to visualize key health metrics like vaccination rates, chronic disease prevalence, and community BMI trends. The system successfully demonstrated a secure and efficient way to manage healthcare records, providing valuable insights for public health initiatives.
- Handwritten Digit Recognition Model: Implemented and trained a fully-connected neural network from scratch to classify handwritten digits from the MNIST dataset. The project goal was to build a deep understanding of fundamental neural network components, including layers, activation functions, forward propagation, and backpropagation, without relying on high-level deep learning libraries for the core logic. The model was designed to serve as a foundational exercise in understanding the mechanics of neural networks. Constructed the network using only Python and NumPy to handle core matrix operations and computations. Implemented the ReLU activation function for hidden layers and a Softmax output layer for multi-class probability distribution. Engineered the backpropagation algorithm from scratch to calculate gradients and update network weights. Optimized the model using mini-batch gradient descent (GD) to efficiently train on the 60,000-image dataset. Achieved a 93% classification accuracy on the test set, demonstrating a solid implementation of core deep learning concepts.
- Financial Insights Dashboard: Built a semi-automated financial tracker in MS Excel with an integrated Power BI dashboard. The goal was to create a user-friendly system for personal expense management, budgeting, and visual reporting without manual data aggregation. The project aimed to solve the common problem of manual and tedious expense tracking by leveraging the capabilities of Excel for data management and Power BI for interactive visualization, providing a clear and actionable overview of personal finances. Automated income and expense tracking using Excel tables with built-in formulas for category tagging and month-end balance carry-forward. Implemented data validation rules to ensure data integrity and prevent incorrect entries. Created interactive Pivot Tables and Pie Charts in Excel to summarize spending by category and time. Connected the Excel workbook to Power BI to build a dynamic dashboard visualizing financial trends, spending patterns, and progress against budget goals. The resulting dashboard provided a clear, at-a-glance view of financial health, enabling better budgeting and financial planning.
- Document Processing Automation using OCR and RAG: Developed an AI-powered system to automate the extraction, processing, and retrieval of information from unstructured documents. The solution integrates Optical Character Recognition (OCR) with a Retrieval-Augmented Generation (RAG) pipeline to enable intelligent search and question-answering capabilities. The project aimed to tackle the challenge of manually sifting through large volumes of documents by creating an intelligent system that can understand and retrieve information based on natural language queries. Utilized Tesseract OCR to accurately extract raw text from scanned documents and images. Built a RAG pipeline using LangChain that chunks the extracted text, generates embeddings, and stores them in a vector database. Integrated a large language model (LLM) to understand natural language queries and retrieve contextually relevant information from the document corpus. The system significantly reduces manual document review time and enables users to find key information with simple questions. This solution provides a scalable way to manage and query large document repositories, making information more accessible and actionable.
Technical Skills:
- Languages: Python (LinkedIn Top 5%), SQL, C++, C, Bash
- Technologies: Data Warehousing, ETL Pipelines, Transformer Models, LLMs, RAG, OCR, Generative AI, Prompt Engineering, Scripting, Model Evaluation
- Testing & QA: Unit Testing, Sanity Testing, Frontend/Backend Testing, Bug Tracking, Performance Benchmarking
- Frameworks: ExpressJS, LangChain, Tesseract OCR
- Developer & Analytics Tools: VSCode, Power BI, MS Excel, Jupyter, Spyder, MySQL, Postman, Git, pip, npm, DBeaver
- Cloud & Big Data: AWS (Basics), Apache Spark (Basics), Vector Databases (Pinecone/Faiss)
- Soft Skills: Communication, Problem-Solving, Debugging, Collaboration, Adaptability, Critical Thinking, Data-driven Decision Making, Troubleshooting, Time Management, Empathy
- Coursework: Data Structures and Algorithms, Web Development, Machine Learning
Interests: Data Science, Analytics, Puzzling, Quizzing, Machine Learning, Generative AI, Mathematics, Debating, Competitive
Programming, Data Structures and Algorithms, Artificial Intelligence
Achievements: Received a LOR at BPCL CRDC for performance during the internship. Got an LOR from Bharat Petroleum CRDC and TPO MNNIT. Winner of Chemathlon under Rasayan in Avishkar (August, 2024). Winner of Just in Case under Nirmaan in Avishkar (August, 2024). Winner (team) of Gnosis India Quiz (March, 2024). 2-year consecutive gold medal winner in Annual Athletics Meet in Shot-put (August, 2022). Winner Chemathlon under Rasayan (Mock Placement Drive) (August, 2022).
Positions of Responsibility: Training and Placement Representative of the batch 2025. Member of Expanding Horizons 5.0 (under Student Mentorship Program). Member of Hospitality Team in gnoTalks 2024.`,
};

    