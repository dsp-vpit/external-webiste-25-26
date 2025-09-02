export interface NavLink {
  to: string;
  label: string;
  external?: boolean;
}

export interface ECMember {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
  image?: string;
}

export interface Newsletter {
  title: string;
  date: string;
  link: string;
}

export interface AlumniSpotlight {
  name: string;
  graduationYear: string;
  currentRole: string;
  company: string;
  image?: string;
  bio?: string;
}
