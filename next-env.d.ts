/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Global declarations for css side-effect imports and environment
declare module '*.css';

interface ImportMeta {
  env?: Record<string, any>;
}
