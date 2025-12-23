
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}
