export interface ModelSpecs {
  [key: string]: string;
}

export interface Model {
  name: string;
  type: string;
  status: string;
  features: string[];
  specs: ModelSpecs;
  suitability: string;
  url: string;
  github?: string;
}

export interface Vendor {
  id: string;
  name: string;
  origin: string;
  logo: string;
  logoColor: string;
  models: Model[];
}

export interface DeepDiveStep {
  title: string;
  desc: string;
  simple?: string;
}

export interface Scenario {
  icon: string;
  audience: string;
  task: string;
  desc: string;
  tools: string[];
}

export interface DeepDive {
  steps: DeepDiveStep[];
  comparison: {
    open: string;
    closed: string;
  };
}

export interface TechSpec {
  label: string;
  value: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  unit?: string;
  display?: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  desc: string;
}

export interface Domain {
  id: string;
  name: string;
  shortName: string;
  color: DomainColor;
  icon: string;
  principles: {
    title: string;
    content: string;
    simple?: string;
  };
  techSpecs: TechSpec[];
  stats: Stat[];
  scenarios?: Scenario[];
  vendors: Vendor[];
  history: HistoryItem[];
}

export interface ColorClass {
  bgLight: string;
  textMain: string;
  bgMain: string;
  bgBlur: string;
}

export type ColorClasses = Record<DomainColor, ColorClass>;

export interface FooterFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface GeneralTimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface SearchResult {
  domain: Domain;
  vendor: Vendor;
  matchedModels: Model[];
}

export type FilterTab = 'all' | 'open' | 'closed';

export type DomainColor = 'indigo' | 'cyan' | 'purple' | 'rose' | 'emerald' | 'amber';

export const MODEL_STATUS_OPEN = '开源';
export const MODEL_STATUS_CLOSED = '闭源';
