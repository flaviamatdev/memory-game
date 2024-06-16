import { FileUpload } from "./file-upload.model";

export class Card {
    id: string;
    icon?: any;

    constructor(
        public code: string,
        public image: FileUpload,
        public audio?: FileUpload
    ) {}

    get hasValidFiles() {
        return this.image.isValid() && (!this.audio || this.audio.isValidAudio());
    }

}
