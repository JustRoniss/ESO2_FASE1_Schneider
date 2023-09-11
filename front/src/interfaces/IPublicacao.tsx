export interface IPublicacao {
    user: string;
    comment: string;
    categories: string[];
    fileName: string;
    midiaType: string;
    dados: Uint8Array | Blob | File;
  }