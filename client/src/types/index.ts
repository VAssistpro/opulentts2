export interface Feature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

export interface Service extends Feature {}

export interface Vehicle {
  name: string;
  image: string;
  capacity: string;
  description: string;
}

export interface ContactInfo {
  icon: React.FC<{ className?: string }>;
  title: string;
  content: string | React.ReactNode;
}