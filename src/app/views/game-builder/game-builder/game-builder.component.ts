import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { UploadComponent } from 'src/app/shared/components/input/upload/upload.component';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
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

    private _isDemo: boolean;
    
    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
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

    onUploadConfigFile(uploadFiles: FileUpload[], uploadChild: UploadComponent) {
        try {
            this.gameService.createGameFromUploadedConfigFile(uploadFiles[0]);
        } catch (error) {
            uploadChild.reset();
        }
    }
    
}