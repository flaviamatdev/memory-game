import { Injectable } from '@angular/core';
import { AudioEnum } from '../shared/enums/audio.enum';

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

    private _audioMap: { [key: number]: HTMLAudioElement };
    private _allLoaded: boolean = false;

    get defaultCardAudioSrc(): string {
        return `${AUDIO_DIR_PATH}/${AUDIO_SRC[AudioEnum.TURN_CARD]}`;
    }

    load() {
        if (this._allLoaded) {
            return;
        }
        this._audioMap = {};
        Object.entries(AUDIO_SRC).forEach(([key,src]) => {
            this._audioMap[key] = this._load(src);
        });
        this._allLoaded = true;
    }

    private _load(src: string) {
        let audio = new Audio(`${AUDIO_DIR_PATH}/${src}`);
        audio.load();
        return audio;
    }

    play(audioKey: AudioEnum) {
        (this._audioMap[audioKey]).play();
    }

}
