export enum CategoryType {
  POINT = 'POINT',
  LINE = 'LINE',
  ANGLE = 'ANGLE',
  FACE = 'FACE',
  ELEMENT = 'ELEMENT',
  POSITION = 'POSITION',
  STROKE = 'STROKE',
  CLASSIC = 'CLASSIC'
}

export interface ExampleShape {
  type: string; // Identifying string for the SVG renderer
  label?: string;
  description?: string;
}

export interface RealQuestion {
  imageType: string;
  year: string; // e.g., "2023 国考"
  analysis: string; // Detailed analysis of the real question
}

export interface RulePoint {
  group?: string; // Secondary title for grouping related rules
  title: string;
  content: string;
  tips?: string[]; // "Tips" or "Refined Methods" (细化考法)
  examples: ExampleShape[];
  realQuestions?: RealQuestion[]; // New field for real exam demonstrations
}

export interface Section {
  id: CategoryType;
  title: string;
  subtitle: string;
  description: string;
  priorityRule?: string; // e.g., "优先规律：面—笔画—点—线"
  rules: RulePoint[];
}