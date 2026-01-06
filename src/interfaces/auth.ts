export type UserRole = "designer" | "shop" | "admin";

export interface User {
  id: string;
  role: UserRole;
  email: string;
  email_verified: boolean;
}

export interface Admin {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface AdminUser extends User {
  admin: Admin;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AdminUser;
  api_token: string;
}

export interface ForgotPasswordFormValues {
  email: string;
}
