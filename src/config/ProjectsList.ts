export interface IProject {
    isHidden: boolean;
    name: string;
    shortDescription: string;
    description: string;
    sourceUrl?: string;
    liveUrl?: string;
    technologies: string[];
    features: { title: string; description: string }[];
}

export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "ImagifyAI",
        shortDescription: "An AI image generation backend with authentication, usage limits, and asynchronous job processing.",
        description: "A FastAPI backend for AI image generation. The service handles authenticated requests and usage limits, queues generation work with Celery and Redis, and stores application data in PostgreSQL. The deployment uses Docker and AWS services including EC2, RDS, S3, and CloudFront.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker", "AWS"],
        features: [
            { title: "Asynchronous jobs", description: "Celery and Redis handle image generation work outside the request cycle." },
            { title: "Request controls", description: "Authentication and usage limits protect access to generation endpoints." },
            { title: "Cloud deployment", description: "The application uses AWS compute, database, object storage, and content delivery services." },
        ],
    },
    {
        isHidden: false,
        name: "Sports Platform API",
        shortDescription: "A backend API supporting match discovery, invitations, messaging, and real-time chat.",
        description: "A FastAPI and PostgreSQL backend for a sports community platform. It supports match discovery, invitations, chat, message history, pagination, uploads, typing indicators, read receipts, and moderation. The deployment uses AWS S3, Docker, and Nginx.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "AWS S3", "Docker", "Nginx"],
        features: [
            { title: "Real-time communication", description: "WebSockets support chat, typing indicators, and read receipts." },
            { title: "Match discovery", description: "Users can discover matches and exchange invitations." },
            { title: "Messaging and moderation", description: "Message history, pagination, uploads, and moderation are supported by the API." },
        ],
    },
    {
        isHidden: false,
        name: "Looks Lab",
        shortDescription: "An AI wellness application backend integrating Gemini, payments, and cloud file storage.",
        description: "An AI wellness backend built with FastAPI, asynchronous SQLAlchemy, and PostgreSQL. It integrates Gemini for AI features, Stripe for payments, and AWS S3 for file storage.",
        sourceUrl: "https://github.com/faizuet/looks-lab-backend",
        technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Gemini", "Stripe", "AWS S3"],
        features: [
            { title: "AI integration", description: "Gemini capabilities are integrated into the backend application." },
            { title: "Payments", description: "Stripe is integrated for payment workflows." },
            { title: "Cloud storage", description: "AWS S3 stores application files." },
        ],
    },
    {
        isHidden: false,
        name: "Cartrack API",
        shortDescription: "A containerized FastAPI backend with PostgreSQL, JWT authentication, and role-based access control.",
        description: "A backend API built with FastAPI and PostgreSQL. The project uses Docker Compose and Nginx and includes JWT authentication and role-based access control.",
        sourceUrl: "https://github.com/faizuet/cartrack-api",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker Compose", "Nginx", "JWT", "RBAC"],
        features: [
            { title: "Authentication", description: "JWT-based authentication protects API access." },
            { title: "Access control", description: "Role-based authorization separates user permissions." },
            { title: "Containerized deployment", description: "Docker Compose and Nginx support the application environment." },
        ],
    },
    {
        isHidden: false,
        name: "LiverCare AI",
        shortDescription: "An ultrasound image analysis pipeline for liver steatosis using a CNN model and a FastAPI service.",
        description: "A machine learning project for liver steatosis analysis from ultrasound images. It combines a convolutional neural network pipeline with a FastAPI service and uses TensorFlow, NumPy, and Pandas.",
        sourceUrl: "https://github.com/faizuet/livercare-ai",
        technologies: ["Python", "FastAPI", "TensorFlow", "NumPy", "Pandas"],
        features: [
            { title: "Image analysis", description: "A CNN pipeline processes ultrasound images for liver steatosis analysis." },
            { title: "API service", description: "FastAPI exposes the project functionality through an HTTP API." },
            { title: "Data processing", description: "NumPy and Pandas support data handling in the model workflow." },
        ],
    },
];
