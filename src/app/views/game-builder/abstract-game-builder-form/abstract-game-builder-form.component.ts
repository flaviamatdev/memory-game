import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { CardIdTypeEnum, CardIdTypeNameTranslations } from 'src/app/shared/enums/card-id-type.enum';
import { GameConfig } from 'src/app/shared/model/game-config.model';
import { GAME_BUILDER_FORM_INPUT } from '../game-build-form-input.values';
import { GAME_BUILDER_TRANSLATION } from '../game-builder-values';
import { GameBuilderComponent } from '../game-builder/game-builder.component';

@Component({
    selector: 'app-abstract-game-builder-form',
    template: '',
    styleUrls: []
})
export class AbstractGameBuilderFormComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION;
    readonly FORM_INPUT = GAME_BUILDER_FORM_INPUT;
    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    @Input() parent: GameBuilderComponent;

    form: FormGroup;
    options: { [key: string]: any[] } = {};

    constructor(
        protected gameService: GameService,
        protected toastService: ToastService,
    ) { }

    ngOnInit(): void {
        this._initForm();
        this._setOptions();
    }

    protected _initForm() {
        throw new Error('Method not implemented'); // child components should implement it
    }

    protected _setOptions() {
        const cardIdTypeNameTranslations = CardIdTypeNameTranslations;
        this.options = {
            cardId: [
                { 
                    id: CardIdTypeEnum.NUMBERS, 
                    label: cardIdTypeNameTranslations[CardIdTypeEnum.NUMBERS] 
                },
                { 
                    id: CardIdTypeEnum.ROW_COLUMN, 
                    label: cardIdTypeNameTranslations[CardIdTypeEnum.ROW_COLUMN] 
                },
                { 
                    id: CardIdTypeEnum.ICONS, 
                    label: cardIdTypeNameTranslations[CardIdTypeEnum.ICONS]
                },
            ],
        }
    }

    submit() {
        if (this._isInvalidForm) {
            return this.toastService.showInvalidFormError();
        }

        this.gameService.create(this._buildGameConfig());
    }

    protected get _isInvalidForm() {
        this.form.markAllAsTouched();
        return this.form.invalid;
    }

    protected _buildGameConfig(): GameConfig {
        throw new Error('Method not implemented'); // child components should implement it
    }

}
