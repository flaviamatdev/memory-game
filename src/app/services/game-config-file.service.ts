import { Injectable } from '@angular/core';
import { GameConfigError } from '../shared/error/game-config-error';
import { FileUpload } from '../shared/model/file-upload.model';
import { GameConfig } from '../shared/model/game-config.model';
import { FileUtil } from '../shared/util/file.util';
import { ERROR_MSG_TRANSLATION } from '../shared/constants/error-message.values';

const ERROR_TRANSLATION = ERROR_MSG_TRANSLATION.configFile;

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
            throw new GameConfigError(ERROR_TRANSLATION.invalid);
        }
        return gameConfig;
    }

    private _readUploadedFile(uploadFile: FileUpload): any {
        try {
            return FileUtil.uploadJson(uploadFile.src);
        } catch (error) {
            throw new GameConfigError(ERROR_TRANSLATION.upload);
        }
    }
}
