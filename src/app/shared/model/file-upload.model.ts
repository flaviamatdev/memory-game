const IMAGE_BASE_64_REGEX = new RegExp('data\:image\/(png|jpeg)\;base64,([^\"]+)');
const AUDIO_BASE_64_REGEX = new RegExp('data\:audio\/(.+)\;base64,([^\"]+)');

export class FileUpload {

    constructor(
        public src: string, /* base64 or url */
        public filename: string
    ) { }

    isValid(): boolean {
        return FileUpload.isValidImgSrc(this.src) && !!(this.filename?.trim());
    }

    isValidAudio(): boolean {
        return FileUpload.isValidAudioSrc(this.src) && !!(this.filename?.trim());
    }

    hasSameName(fileUpload: FileUpload): boolean {
        let name = this.filename.split('.')[0];
        let name2 = fileUpload.filename.split('.')[0];
        return name === name2;
    }

    static isValidImgSrc(src: any) {
        return this._isValidSrc(src, IMAGE_BASE_64_REGEX);
    }

    static isValidAudioSrc(src: any) {
        return this._isValidSrc(src, AUDIO_BASE_64_REGEX);
    }

    private static _isValidSrc(src: any, base64Regex: RegExp) {
        return typeof src == 'string' && (this._isValidUrl(src) || base64Regex.test(src));
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
