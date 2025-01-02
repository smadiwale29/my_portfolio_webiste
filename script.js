document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const roles = ["Artificial Intelligence Developer", "Data Scientist"];
    let roleIndex = 0;
    let charIndex = 0;

    // Typewriter Effect
    function typeWriter() {
        if (charIndex < roles[roleIndex].length) {
            typewriterElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typewriterElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();

    const projects = [
        {
            id: 1,
            title: "Jarvis - The Next-Generation AI Personal Assistant",
            description: "Jarvis is an AI-powered personalized voice assistant designed to revolutionize daily life with its advanced capabilities. It seamlessly performs tasks like opening applications such as YouTube or Google and searching information on Wikipedia. With human-like conversational abilities, Jarvis provides knowledge in areas like basic medical aid, first aid, numerology, Hindu Vedic insights, and cooking recipes. Equipped with up-to-date intelligence till 2023, it ensures accurate and reliable responses. Jarvis combines speed, security, and versatility to deliver an extraordinary user experience, making it one of the most advanced and dependable AI assistants for simplifying tasks and enriching everyday interactions.",
            video: "static/Jarvis Ai Assistance.mp4"
        },
        {
            id: 2,
            title: "Retrieval-Augmented Generation (RAG)",
            description: "This innovative Retrieval-Augmented Generation (RAG) application is designed to transform static PDF documents into dynamic, interactive knowledge sources. By leveraging uploaded PDFs as an added layer of intelligence, the application enables precise and context-aware responses, making document-based interactions seamless and efficient. Built with cost-effective techniques, it empowers organizations to maximize the utility of their documents and enhance accessibility. A powerful Q&A bot was developed using advanced Python libraries and cutting-edge LLMs like Google Gemini. Integrated with Streamlit, it features an intuitive and visually appealing frontend, delivering a user-friendly experience for document exploration and interaction",
            video: "static/Rag.mp4"
        },
        {
            id: 3,
            title: "AI-Based Blog Generation Model",
            description: "This project features an advanced AI-driven blog generation model powered by Meta LLAMA 2, later upgraded to Meta LLAMA 3.1 for enhanced performance. The model takes input parameters such as topic, target audience, and desired word count to efficiently generate high-quality blogs with precise, up-to-date information until 2023. The application ensures a seamless user experience by delivering accurate and engaging content tailored to user needs. Initially developed with Streamlit for a user-friendly interface, the application was further enhanced using Flask APIs to provide greater flexibility and scalability. It stands as a cutting-edge solution for automated content creation",
            video: "static/Blog.mp4"
        }
    ];

    const experiences = [
        { title: "AI Developer", company: "Adactin", duration: "current", description: "Developed an AI B2B product..." },
        { title: "Sr. Software Engineer", company: "LTIMindtree", duration: "2 years", description: "Developed ML models..." },
        { title: "Engineer", company: "GlobalStep", duration: "1.5 years", description: "Designed and implemented ML models..." }
    ];

    const skills = [
        { name: "Python", proficiency: 90 },
        { name: "Machine Learning", proficiency: 85 },
        { name: "Deep Learning", proficiency: 80 },
        { name: "Generative AI", proficiency: 85 },
        { name: "SQL", proficiency: 90 },
        { name: "Microsoft Copilot Studio", proficiency: 60 },
        { name: "Hugging Face, Groq, and Ollama", proficiency: 75 },
        { name: "Deployment (Streamlit, Flask, FastAPI)", proficiency: 80 }
    ];

    const reviews = [
        { text: "Great work on the AI project!", author: "Vivek Nikam", designation: "CEO - CodeSpyder" },
        { text: "Delivered exceptional results.", author: "Samir Nashikkar", designation: "AI Developer - Bio" },
        { text: "Highly recommended for AI solutions.", author: "Priya Sharma", designation: "CTO" },
        { text: "Excellent quality and timely delivery.", author: "Arjun Mehta", designation: "Product Manager" }
    ];

    // Populate Experiences
    const experienceList = document.getElementById('experience-list');
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.classList.add('experience-card');
        expElement.innerHTML = `
            <h2>${exp.title}</h2>
            <h3>${exp.company}<h3>
            <p>${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        experienceList.appendChild(expElement);
    });

    // Populate Projects
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-card');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <video src="${project.video}" controls></video>
            <p class="project-description">${project.description.substring(0, 150)}...</p>
            <button class="read-more-button" data-id="${project.id}">Read More</button>
            <p id="full-description-${project.id}" class="full-description hidden">${project.description}</p>
        `;
        projectList.appendChild(projectElement);
    });

    projectList.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('read-more-button')) {
            const projectId = event.target.getAttribute('data-id');
            const fullDescription = document.getElementById(`full-description-${projectId}`);
            fullDescription.classList.toggle('hidden');
            event.target.textContent = event.target.textContent === 'Read More' ? 'Read Less' : 'Read More';
        }
    });

    // Populate Skills
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.proficiency}%">${skill.proficiency}%</div>
            </div>
        `;
        skillsList.appendChild(skillElement);
    });

    // Populate Reviews
    const reviewList = document.getElementById('review-list');
    const addReviewBtn = document.getElementById('add-review-btn');
    const reviewModal = document.getElementById('review-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const saveReviewBtn = document.getElementById('save-review-btn');
    const reviewText = document.getElementById('review-text');
    const reviewAuthor = document.getElementById('review-author');
    const reviewDesignation = document.getElementById('review-designation');

    function addReviewToDOM(review) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-card');
        reviewElement.innerHTML = `
            <p>"${review.text}"</p>
            <p><strong>${review.author}</strong> - <span class="designation">${review.designation}</span></p>
        `;
        reviewList.appendChild(reviewElement);
    }

    reviews.forEach(review => addReviewToDOM(review));

    // Open Modal
    addReviewBtn.addEventListener('click', () => {
        reviewModal.classList.remove('hidden');
    });

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        reviewModal.classList.add('hidden');
    });

    // Save Review
    saveReviewBtn.addEventListener('click', () => {
        const text = reviewText.value.trim();
        const author = reviewAuthor.value.trim();
        const designation = reviewDesignation.value.trim();

        if (text && author && designation) {
            const newReview = { text, author, designation };
            reviews.push(newReview);
            addReviewToDOM(newReview);

            reviewText.value = '';
            reviewAuthor.value = '';
            reviewDesignation.value = '';
            reviewModal.classList.add('hidden');
        } else {
            alert('Please fill out all fields.');
        }
    });
});