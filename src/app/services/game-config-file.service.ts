import { Injectable } from '@angular/core';
import { GameConfigError } from '../shared/error/game-config-error';
import { FileUpload } from '../shared/model/file-upload.model';
import { GameConfig } from '../shared/model/game-config.model';
import { FileUtil } from '../shared/util/file.util';

@Injectable({
    providedIn: 'root'
})
export class GameConfigFileService {

    downloadGameConfig(gameConfig: GameConfig) {
        FileUtil.downloadJson(gameConfig, gameConfig.title);
    }

    readUploadedConfigFile(uploadFile: FileUpload): GameConfig {
        let json = this._readUploadedFile(uploadFile);
        let gameConfig: GameConfig = Object.assign(new GameConfig(), json);
        if (!gameConfig.isValid()) {
            throw new GameConfigError('Arquivo de configuração enviado é inválido'); // TODO add traducao
        }
        return gameConfig;
    }

    private _readUploadedFile(uploadFile: FileUpload): any {
        try {
            return FileUtil.uploadJson(uploadFile.src);
        } catch (error) {
            console.error(error);//.
            throw new GameConfigError('Erro ao processar arquivo de configuração'); // TODO add traducao
        }
    }
}
