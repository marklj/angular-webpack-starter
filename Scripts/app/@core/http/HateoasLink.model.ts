export interface HateoasLink {
  href: string;
  method: 'DELETE' | 'PUT' | 'GET' | 'OPTIONS' | 'POST' | 'HEAD' | 'PATCH';
  rel: string;
}
