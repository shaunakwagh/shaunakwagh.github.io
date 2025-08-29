export const projects = [
  {
    name: 'AI Document Retrieval System (RAG) ',
    date: 'Aug 2025',
    tagline: 'Python, LangChain, FAISS, HuggingFace, Google Gemini[LLM], Gradio',
    description: [
      '- Developed an AI-powered web tool for municipal bond insurers that generates automated, source-cited due diligence PDF reports from uploaded official statements, using Google Gemini LLM, LangChain, and Gradio.',
      '- Streamlined bond underwriting analysis by enabling instant extraction of key risks, covenants, and financial details from complex bond documents, reducing manual review time by over 80%.',
      '- Enhanced transparency and auditability for bond insurers by including exact source page citations in all generated reports, supporting data-driven insurance decisions.',
      '- Designed a modular frontend in Gradio with intuitive upload features, result rendering, and error handling, ensuring a production-ready UX for insurance analysts.'
    ],
    link: 'https://github.com/shaunakwagh/BondInsights',
  },
  {
    name: 'Text-Based Game Reinforcement Learning (RL) Agent',
    date: 'May 2024',
    tagline: 'Python, PyTorch, NumPy',
    description: [
      '- Developed autonomous agents to complete quests in a multi-room text adventure game using tabular Q-learning, linear function approximation, and deep Q-networks.',
      '- Designed NLP feature pipelines (BoW, TF-IDF) for state representation and enabled agents to learn optimal strategies under reward shaping.'
    ],
    link: '',
  },
  {
    name: 'Neural Network Digit Classifier',
    date: 'Feb 2024',
    tagline: 'Python, PyTorch, NumPy',
    description: [
      '- Constructed multi-stage CNN layers with convolution, pooling, and fully connected classifiers, applying data augmentation and dropout regularization for performance robustness.',
      '- Tuned hyperparameters and added batch normalization to optimize inference speed and accuracy for grayscale image input, enabling batch-level evaluation with scalability.'
    ],
    link: 'https://github.com/shaunakwagh/Neural-Network-MNIST-digits',
  },
  {
    name: 'Capstone Research For National Science Foundation - Penn State',
    date: 'Dec 2022',
    tagline: 'ECG Risk Analysis app',
    description: [
      '- Developed iOS app in Swift with CoreML analyzing 5,000+ ECG data points to assess heart disease risk.',
      '- Tested with real ECG scans, validating accuracy using Xcode, Heroku Cloud, and MySQL data pipeline.',
      '- Automated data pipeline with Python scripts to normalize and label ECG data, reducing pre-processing time by 60%.',
      '- Deployed initial beta version to TestFlight with custom onboarding screens for trial participants.',
      '- Led 5-member team, coordinating development, testing, and documentation collaboratively.'
    ],
    link: 'https://github.com/shaunakwagh/Capstone_Project',
  },
  {
    name: 'Online Storage Simulator - C',
    tagline: 'Distributed Storage, Simulated',
    description: [
      '- Built a software simulation of cloud storage systems like OneDrive and Dropbox in C. Developed code for file management, system startup/shutdown, and moving data using serialization and deserialization.',
      '- Designed a system to split data into blocks and spread them across multiple nodes, with a caching mechanism that achieved 80% hit rate.',
      '- Created a device driver to connect the application to virtual hardware smoothly.'
    ],
    link: 'https://github.com/shaunakwagh/Online_Storage_Simulator',
  },
  {
    name: 'Developed a Computer Operating System and implemented it on ORACLE VM - C',
    tagline: 'Building an OS from Scratch',
    description: [
      '- Developed custom memory allocation functions using project-specific memlib functions, enhancing memory management efficiency.',
      '- Created and tested a checkheap function to ensure heap consistency, utilizing a driver and trace file for validation.',
      '- Built a small operating system from scratch, incorporating minimal system call support, an 800x600 video frame buffer, and a bootloader to load the OS kernel and user application into memory, providing a foundational OS experience.',
      '- Designed and implemented an OS kernel that operated in privileged mode, a simple user application running in unprivileged mode, and managed kernel-level and user-level page tables, ensuring robust and secure system operation.'
    ],
    link: 'https://github.com/shaunakwagh/Computer_Operating_System',
  },
  
  {
    name: 'Music Store - Java, SpringBoot, Gradle, H2 Database',
    tagline: 'Full-Stack Music Store',
    description: [
      '- Developed a robust SpringBoot Application using Java Spring Framework and H2 database to create Music Store website.',
      '- Implemented an admin page with secure login functionality, allowing store owners to seamlessly manage album information, including adding, deleting, and editing albums, artists, and songs.',
      '- Optimized user experience and accessibility by incorporating intuitive navigation, efficient search capabilities, and modern JavaScript and CSS features, enhancing the overall usability of the Music Store website.'
    ],

    link: 'https://github.com/shaunakwagh/MusicStore',
  },
  {
    name: 'BlackJack - C',
    tagline: 'Classic Casino Game in C',
    description: [
      '- Interactive blackjack game in C',
      '- Plays 100 rounds or until the player runs out of money.'
    ],
    link: 'https://github.com/shaunakwagh/Blackjack',
  },
  {
    name: 'Calculator GUI - JAVA',
    tagline: 'Simple Calculator',
    description: 'A user-friendly Calculator GUI built with Java.',
    link: 'https://github.com/shaunakwagh/Calculator-GUI',
  }
  
];

export const skills = [
  { name: 'C/C++', level: 95 },
  { name: 'Java', level: 90 },
  { name: 'Python', level: 95 },
  { name: 'MySQL', level: 90 },
  { name: 'MSSQL', level: 75 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 80 },
  { name: 'HTML', level: 90 },
  { name: 'Git', level: 100 },
  { name: 'Swift', level: 75 },
  { name: 'Probability & Statistics', level: 75 },
  { name: 'Scikit', level: 75 },
  { name: 'PyTorch', level: 75 },
  { name: 'NumPy', level: 75 },
];

export const certificates = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect – Associate',
    image: './AWS_SAA.png',
    link: 'https://www.credly.com/badges/b3b5f4db-1419-427c-83a8-33b9b49265de/linked_in_profile', // replace with your actual certificate link if available
    description: 'AWS Certified Solutions Architect – Associate demonstrating cloud architecture and deployment skills'
  },
  {
    id: 2,
    name: 'Verified Certificate for Fundamentals of Statistics',
    image: './Statistics.png',
    link: 'https://courses.edx.org/certificates/83a8922374874648bbd25553e8f5de29',
    description: 'Core course for MIT MicroMasters in Statistics and Data Science'
  },
  {
    id: 3,
    name: 'Verified Certificate for Probability',
    image: './Probability.png',
    link: 'https://courses.edx.org/certificates/d699f605ae764ceaadcde29ed061d7be',
    description: 'Core course for MIT MicroMasters in Statistics and Data Science'
  },
  {
    id: 3,
    name: '6.419x: Data Analysis: Statistical Modeling and Computation in Applications',
    image: './DataAnalysisStatModeling.png',
    link: 'https://courses.edx.org/certificates/da178ed96dbd4c1ab04b64efa14222c3',
    description: 'MITx course 6.419x on statistical modeling and computation in applications'
  },
  {
    id: 5,
    name: '6.86x: Machine Learning with Python-From Linear Models to Deep Learning',
    image: './MLwithPython.png',
    link: 'https://courses.edx.org/certificates/4afd7758f91c4ad29ca40346cd54e796',
    description: 'MITx course 6.86x on machine learning with Python, covering linear models to deep learning'
  }
  ,
  {
    id: 6,
    name: 'Software Engineering Job Simulation – J.P. Morgan',
    image: './JPMSoftwareEng.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_GCxS6TveGicJiPcKc_1719608543001_completion_certificate.pdf',
    description: 'Completed the J.P. Morgan Software Engineering Job Simulation via Forage virtual experience'
  }
];
