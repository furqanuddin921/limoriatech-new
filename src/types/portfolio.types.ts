export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web Application" | "Mobile App" | "Enterprise System" | "API & Integration";
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  image: string;
}

export interface ClientItem {
  name: string;
  logo: string;
  industry: string;
  testimonial?: {
    quote: string;
    person: string;
    role: string;
  };
}
