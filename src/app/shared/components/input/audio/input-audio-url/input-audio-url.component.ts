import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-audio-url',
    templateUrl: './input-audio-url.component.html',
    styleUrls: ['./input-audio-url.component.scss']
})
export class InputAudioUrlComponent implements OnInit {

    @Input() labelTranslate: any;
    @Input() label: string;
    @Input() form: FormGroup;
    @Input() controlName: string;

    flag: { [key: string]: boolean } = {};

    private _audio: HTMLAudioElement;

    ngOnInit(): void {
        this.flag = {
            hasValue: false,
            isPlaying: false,
        }

        this._audio = new Audio();

        this.form.get(this.controlName).valueChanges.subscribe(value => {
            this.flag.hasValue = !!value;
            this._audio.src = value;
            if (value) {
                this._audio.load();
            }
        });
    }

    playPause() {
        this.flag.isPlaying = !this.flag.isPlaying;
        if (this.flag.isPlaying) {
            this._audio.play();
        } else {
            this._audio.pause();
        }
    }

    delete() {
        this.flag.isPlaying = false;
        this.form.get(this.controlName).setValue(null);
    }

}
