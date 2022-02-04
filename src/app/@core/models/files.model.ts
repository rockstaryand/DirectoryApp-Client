
  export interface FileDetails {
      path: string;
      name: string;
      size: number;
      type: string;
      extension: string;
      mtime: Date;
      children: FileDetails[];
  }

  // export interface FileDetails {
  //     path: string;
  //     name: string;
  //     children: Children[];
  // }




