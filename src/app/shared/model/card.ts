import { UploadFile } from "./upload-file.model";

export class Card {
    id: string;
    icon?: any;

    constructor(
        public code: string,
        public img?: UploadFile
    ) {}
}
