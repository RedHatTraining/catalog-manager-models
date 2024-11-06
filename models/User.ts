export interface User {
    user_id: number;           // Unique identifier for the user
    gh_id: string;             // GitHub ID of the user
    gh_user: string;           // GitHub username
    gh_name: string;           // Full name of the user
    gh_email: string;          // Email address of the user
    security_role: string;     // Role of the user (e.g., user, admin)
    theme: string;             // User's theme preference (e.g., dark or light)
    first_login?: Date;        // Timestamp of the user's first login
    last_login?: Date;         // Timestamp of the user's last login
  }
  