export class FileUtil {

    static downloadData(data: any, filenameNoExtension: string) {
        let link = document.createElement('a');
        link.href = URL.createObjectURL(
            new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' })
        );
        link.download = `${filenameNoExtension}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
}
