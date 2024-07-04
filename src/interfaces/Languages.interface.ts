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

interface LanguageOptions {
  title: string;
  pt: string;
  en: string;
  es: string;
  de: string;
  fr: string;
  it: string;
}

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

interface Job {
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
  languages: Language[];
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

interface Language {
  en: string;
  level: string;
}

interface Book {
  title: string;
  description: string;
}

interface CurrentlyStudying {
  title: string;
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
}

interface Project {
  title: string;
  description1: string;
  description2: string;
}

interface Contact {
  menuTitle: string;
  pageTitle: string;
  fields: ContactFields;
}

interface ContactFields {
  nameField: string;
  emailField: string;
  phoneField: string;
  messageField: string;
  messageLabel: string;
  optional: string;
  sendButton: string;
  loading: string;
  error: string;
  old: string;
  whats: string;
}
