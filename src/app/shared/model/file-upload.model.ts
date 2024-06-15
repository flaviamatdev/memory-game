const IMAGE_BASE_64_REGEX = new RegExp('data\:image\/(png|jpeg)\;base64,([^\"]+)');

export class FileUpload {

    constructor(
        public src: string, /* base64 or url */
        public filename: string
    ) { }

    isValid(): boolean {
        return FileUpload.isValidImgSrc(this.src) && !!(this.filename?.trim());
    }

    isValidAudio(): boolean {
        return FileUpload.isValidSrc(this.src) && !!(this.filename?.trim());
    }

    static isValidImgSrc(src: any) {
        return typeof src == 'string' && (this._isValidUrl(src) || IMAGE_BASE_64_REGEX.test(src));
    }

    static isValidSrc(src: any) {
        return typeof src == 'string' && (this._isValidUrl(src) || IMAGE_BASE_64_REGEX.test(src));
    }

    private static _isValidUrl(url: string) {
        return (new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i') // validate fragment locator
        ).test(url);
    }

}
