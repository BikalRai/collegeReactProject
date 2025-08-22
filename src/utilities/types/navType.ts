import type React from "react";

export interface NavLinkType {
  id: number;
  path: string;
  name: string;
}

export interface NavActionType {
  path: string;
  icon: React.ReactNode;
}

export interface AdminNavLinkType {
  id: number;
  path: string;
  name: string;
  icon: React.ReactNode;
}
