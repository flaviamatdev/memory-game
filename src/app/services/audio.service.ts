import { Injectable } from '@angular/core';
import { AudioEnum } from '../shared/enums/audio.enum';
import { FileUpload } from '../shared/model/file-upload.model';

const AUDIO_DIR_PATH = 'assets/audio';
const AUDIO_SRC = {
    [AudioEnum.CORRECT]: 'correct.mp3',
    [AudioEnum.TURN_CARD]: 'page-turn.mp3',
    [AudioEnum.WIN]: 'tada.mp3',
}

@Injectable({
    providedIn: 'root'
})
export class AudioService {

    private _audioMap: { [key: string]: HTMLAudioElement };
    private _allLoaded: boolean = false;


    load(cardAudios?: FileUpload[]) {
        if (this._allLoaded) {
            return;
        }

        this._audioMap = {};
        Object.entries(AUDIO_SRC).forEach(([key,src]) => {
            this._audioMap[key] = this._load(`${AUDIO_DIR_PATH}/${src}`);
        });

        if (cardAudios) {
            delete this._audioMap[AudioEnum.TURN_CARD];
            cardAudios.forEach(cardAudio => {
                this._audioMap[cardAudio.filename] = this._load(cardAudio.src);
            });
        }

        this._allLoaded = true;
    }

    private _load(src: string) {
        let audio = new Audio(src);
        audio.load();
        return audio;
    }

    play(audioEnumOrFilename: AudioEnum | string) {
        (this._audioMap[audioEnumOrFilename])?.play();
    }

}
