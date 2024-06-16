import { FileUpload } from "./file-upload.model";

export class Card {
    id: string;
    icon?: any;

    constructor(
        public code: string,
        public img: FileUpload,
        public audio?: FileUpload
    ) {}

    get hasValidFiles() {
        return this.img.isValid() && (!this.audio || this.audio.isValidAudio());
    }

}
