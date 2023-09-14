export interface IPublicacao {
    user: string;
    comment: string;
    categories: string[];
    dados: Uint8Array | Blob | File;
  }