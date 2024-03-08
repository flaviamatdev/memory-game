export class UploadFile {
    constructor(
        public src: string, /* base64 or url */
        public filename?: string
    ) {}
}
