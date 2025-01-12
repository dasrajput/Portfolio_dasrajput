const expertise = [
    {
        id: 0,
        title: 'React and React Native Development',
        desc: 'I am a skilled React and React Native developer with experience in building high-performance mobile applications. My expertise includes creating responsive user interfaces, integrating APIs, and implementing state management using React and React Native.',
    },
    {
        id: 1,
        title: 'Python ML',
        desc: 'I am a skilled Python developer with experience in machine learning. I have worked on projects using scikit-learn, TensorFlow, and Keras. My expertise includes data preprocessing, model training, and deployment using Python libraries like NumPy, Pandas, and Matplotlib.',
    },
    {
        id: 2,
        title: 'Github',
        desc: "GitHub is essential for version control, Project management and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 3,
        title: 'Open Source',
        desc: "I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
