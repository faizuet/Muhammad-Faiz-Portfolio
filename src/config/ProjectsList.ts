export function getProjectSlug(name: string) {
    return name.replaceAll(" ", "-").toLowerCase();
}

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
        shortDescription: "A cloud-deployed image generation platform with asynchronous job processing.",
        description: "A FastAPI platform for image generation. Background workers handle long-running jobs without blocking API responses. It is deployed on AWS with EC2, RDS, S3, and CloudFront, behind Nginx, and uses JWT and OAuth2 for authentication. PostgreSQL stores application data, with Redis, Celery, and Docker supporting processing and deployment. The platform maintained 99% uptime in production.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "AWS", "Nginx"],
        features: [
            { title: "Asynchronous processing", description: "Background workers handle long-running generation jobs without blocking API responses." },
            { title: "Cloud deployment", description: "The platform runs on AWS EC2, RDS, S3, and CloudFront, behind Nginx, and maintained 99% uptime in production." },
            { title: "Authentication", description: "JWT and OAuth2 protect access to the platform." },
        ],
    },
    {
        isHidden: false,
        name: "Sports Platform API",
        shortDescription: "A real-time backend on AWS for match creation, invitations, joining, and moderation.",
        description: "A FastAPI and PostgreSQL backend deployed on AWS. WebSockets support the match lifecycle from creation and invitations through joining and moderation. The API is rate-limited, integrates AWS S3, and sits behind Nginx. A role-based admin panel supports operational moderation.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "AWS S3", "Nginx"],
        features: [
            { title: "Real-time lifecycle", description: "WebSockets cover match creation, invitations, joining, and moderation." },
            { title: "API delivery", description: "Rate-limited, S3-integrated APIs are served behind Nginx." },
            { title: "Operational moderation", description: "A role-based admin panel supports moderation of the platform." },
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
