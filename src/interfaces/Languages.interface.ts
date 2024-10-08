export interface WebsiteContent {
  global: Global;
  home: Home;
  career: Career;
  academic: Academic;
  personal: Personal;
  projects: Projects;
  contact: Contact;
}

interface Global {
  next: string;
  prev: string;
  home: string;
  language: LanguageOptions;
}

export interface LanguageOptions {
  title: string;
  description: string;
  warning: string;
  ar: string;
  be: string;
  ch: string;
  cz: string;
  de: string;
  di: string;
  en: string;
  es: string;
  et: string;
  fi: string;
  fr: string;
  gr: string;
  he: string;
  hi: string;
  hu: string;
  ind: string;
  it: string;
  ja: string;
  ko: string;
  la: string;
  ne: string;
  no: string;
  po: string;
  ptbr: string;
  ptpt: string;
  ru: string;
  sw: string;
  ta: string;
  tu: string;
  zu: string;
}

export type Language = Exclude<
  keyof Omit<LanguageOptions, "title" | "warning" | "description">,
  keyof Object
>;

interface Home {
  menuTitle: string;
  imageAlt: string;
  header: Header;
  shortcuts: Shortcuts;
  location: Location;
  phones: Phones;
}

interface Header {
  header1: string;
  header2: string;
  header3: string;
}

interface Shortcuts {
  title: string;
  whatsApp: string;
  email: string;
  github: string;
  linkedin: string;
}

interface Location {
  title: string;
  where: string;
}

interface Phones {
  title: string;
  phone1: string;
  phone2: string;
}

interface Career {
  menuTitle: string;
  imageAlt: string;
  experiences: {
    title: string;
    jobs: Job[];
  };
  download: Download;
}

export interface Job {
  title: string;
  role: string;
  modality: string;
  start: string;
  end: string;
  elapsed: string;
  description: string;
}

interface Download {
  title: string;
  pt: string;
  en: string;
}

interface Academic {
  menuTitle: string;
  imageAlt: string;
  education: Education;
  languages: LanguageItem[];
  books: Book[];
  softskills: string[];
  currentlyStudying: CurrentlyStudying;
}

interface Education {
  title: string;
  where: string;
  course: string;
  conclusion: string;
}

export interface LanguageItem {
  en: string;
  level: string;
}

interface Book {
  title: string;
  description: string;
}

interface CurrentlyStudying {
  title: string;
  item: string;
  description: string;
}

interface Personal {
  menuTitle: string;
  imageAlt: string;
  button: Button;
  about: About;
  quote: Quote;
}

interface Button {
  title: string;
  description: string;
}

interface About {
  title: string;
  description: string;
}

interface Quote {
  sentence: string;
  author: string;
}

interface Projects {
  menuTitle: string;
  buttons: {
    deploy: string;
    repo: string;
  };
  projects: Project[];
  technologies: string[];
}

export interface Project {
  title: string;
  description1: string;
  description2: string;
}

interface Contact {
  menuTitle: string;
  pageTitle: string;
  nameField: string;
  emailField: string;
  phoneField: string;
  subjectField: string;
  messageField: string;
  messageLabel: string;
  optional: string;
  required: string;
  sendButton: string;
  loading: string;
  error: string;
  success: string;
  old: string;
  whats: string;
}
