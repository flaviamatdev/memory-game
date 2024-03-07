import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GAME_BUILDER_TRANSLATION } from '../game-builder-values';

@Component({
    selector: 'app-game-builder',
    templateUrl: './game-builder.component.html',
    styleUrls: ['./game-builder.component.scss']
})
export class GameBuilderComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION;

    pageTitleTranslation: any = {};
    flag: { [key: string]: boolean } = {};
    uploadConfigFile: boolean = false;

    private _isDemo: boolean;
    
    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.data?.subscribe(data => {
            this._isDemo = data.demo ?? false;
            this.pageTitleTranslation = (this._isDemo ? 
                this.TRANSLATION.pageTitle.demoBuilder :
                this.TRANSLATION.pageTitle.gameBuilder
            );
            this._initFlags();
        });
    }

    private _initFlags() {
        this.flag = {
            isDemo: this._isDemo,
            uploadConfigFile: false,
            showForm: true
        }
    }

    get isDemo() {
        return this._isDemo;
    }

    onChangeUploadConfigFile($doUpload: boolean) {
        this.flag.uploadConfigFile = $doUpload;
        this.flag.showForm = !$doUpload;
    }
    
}