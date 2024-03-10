import { Buffer } from 'buffer';

export class FileUtil {

    static downloadJson(data: any, filenameNoExtension: string) {
        let link = document.createElement('a');
        link.href = URL.createObjectURL(
            new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' })
        );
        link.download = `${filenameNoExtension}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    static uploadJson(base64: string): any {
        const base64SubStr = ';base64,';
        let base64Index = base64.indexOf(base64SubStr) + base64SubStr.length;
        return JSON.parse(
            Buffer.from(base64.substring(base64Index), 'base64').toString()
        );
    }
    
}
