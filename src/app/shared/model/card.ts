import { FileUpload } from "./file-upload.model";

export class Card {
    id: string;
    icon?: any;

    constructor(
        public code: string,
        public image: FileUpload,
        public audio?: FileUpload
    ) {}

    static hasValidFiles(card: Card) {
        return FileUpload.isValidImage(card.image) && (!card.audio || FileUpload.isValidAudio(card.audio));
    }

}
