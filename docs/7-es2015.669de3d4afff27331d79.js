(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DMmz:function(t,n,e){"use strict";e.r(n),e.d(n,"GameModule",function(){return I});var o=e("ofXK"),i=e("tyNb"),r=e("6NWb"),a=e("vvyD"),c=e("sYmb"),s=e("fXoL");let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({imports:[[o.c,a.a,c.b]]}),t})();var l=e("nAIU");const g={btn:{sound:{turnOnTooltip:{pt:"Desligar sons",en:"Turn off sounds"},turnOffTooltip:{pt:"Ligar sons",en:"Turn on sounds"}},newGame:{pt:"Novo jogo",en:"New game"}},startNewGameConfirmation:{pt:"Tem certeza que deseja iniciar novo jogo?",en:"Are you sure you want to start a new game?"},finishGame:{congratulations:{pt:"Parab\xe9ns!",en:"Congratulations!"},playAgain:{pt:"Deseja jogar novamente?",en:"Do you want to play again?"}}};var u=e("VdwR"),b=e("CzQJ"),m=e("AgV0"),f=e("bTqV"),h=e("Qu3c"),p=e("NFeN"),v=e("YzOW");function w(t,n){if(1&t&&s.Pb(0,"img",7),2&t){const t=s.fc();s.lc("src",t.card.img.base64,s.yc)}}function O(t,n){if(1&t&&s.Pb(0,"fa-icon",8),2&t){const t=s.fc();s.lc("icon",t.card.icon)}}function S(t,n){if(1&t&&(s.Ub(0,"div",9),s.Gc(1),s.Tb()),2&t){const t=s.fc();s.Db(1),s.Hc(t.card.id)}}const C=function(t){return{rotated:t}};let _=(()=>{class t{constructor(t){this.gameService=t,this.onSelect=new s.o}get isRotated(){return this._isRotated}ngOnInit(){this.showFrontAsIcon=this.gameService.config.cardIdType===v.a.ICONS,this.gameService.getCoveredCards().subscribe(t=>t.map(t=>this._isRotated=t.id!=this.card.id&&this._isRotated))}onClick(){this._isRotated=!0,this.onSelect.emit(this.card)}}return t.\u0275fac=function(n){return new(n||t)(s.Ob(u.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-memory-card"]],inputs:{card:"card"},outputs:{onSelect:"onSelect"},decls:8,vars:6,consts:[[1,"card",3,"ngClass","click"],[1,"card-inner"],[1,"front"],["alt","card",3,"src",4,"ngIf"],[1,"back","bg-primary"],["size","3x",3,"icon",4,"ngIf","ngIfElse"],["showCardId",""],["alt","card",3,"src"],["size","3x",3,"icon"],[1,"card-id-number","quicksand"]],template:function(t,n){if(1&t&&(s.Ub(0,"div",0),s.bc("click",function(){return n.onClick()}),s.Ub(1,"div",1),s.Ub(2,"div",2),s.Ec(3,w,1,1,"img",3),s.Tb(),s.Ub(4,"div",4),s.Ec(5,O,1,1,"fa-icon",5),s.Ec(6,S,2,1,"ng-template",null,6,s.Fc),s.Tb(),s.Tb(),s.Tb()),2&t){const t=s.tc(7);s.lc("ngClass",s.qc(4,C,n.isRotated)),s.Db(3),s.lc("ngIf",n.card.img),s.Db(2),s.lc("ngIf",n.showFrontAsIcon)("ngIfElse",t)}},directives:[o.i,o.k,r.a],styles:[".card-id-number[_ngcontent-%COMP%]{font-size:var(--card-id-font-size);font-weight:700}.card[_ngcontent-%COMP%]{height:var(--card-width);display:flex;align-items:center;justify-content:center;position:relative;margin:var(--card-margin);cursor:pointer}.card[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:var(--card-width)}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;border-radius:4px}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{border-radius:4px;position:absolute;height:100%;width:100%;left:0;top:0;display:flex;justify-content:center;align-items:center;backface-visibility:hidden}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{color:#fff}.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{transform:rotateY(180deg);background-color:#fff}.card-inner[_ngcontent-%COMP%]{height:100%;width:100%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:transform .6s;transform-style:preserve-3d}.rotated[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}"]}),t})();function y(t,n){if(1&t){const t=s.Vb();s.Ub(0,"app-memory-card",7),s.bc("onSelect",function(n){return s.wc(t),s.fc().onChooseCard(n)}),s.Tb()}2&t&&s.lc("card",n.$implicit)}const T=[{path:"",component:(()=>{class t{constructor(t,n,e,o){var i,r,a,c;this.router=t,this.gameService=n,this.dialogService=e,this.translationService=o,this.TRANSLATION=g,this.backgroundImgSrc="",this.boardStyle={},this.soundIcon={},this._cards=[],this._cards=null!==(c=null===(a=null===(r=null===(i=this.router.getCurrentNavigation())||void 0===i?void 0:i.extras)||void 0===r?void 0:r.state)||void 0===a?void 0:a.cards)&&void 0!==c?c:[]}get cards(){return this._cards}ngOnInit(){var t;let n=this.gameService.config;n&&(null===(t=this._cards)||void 0===t?void 0:t.length)?(n.backgroundImgSrc&&(this.backgroundImgSrc=`url(${n.backgroundImgSrc})`),this._setWidth(window.screen.width),this._setSoundIcon()):this.gameService.goHome()}_setWidth(t){if(t<768)return void(this.boardStyle={board:{},card:{}});let n=2*this.gameService.config.numPairs,e=[5,4,3].filter(t=>n%t==0)[0];this.boardStyle={width:120*e+16*(e-1)+"px"}}onResize(t){this._setWidth(t.target.innerWidth)}_setSoundIcon(){this.soundIcon=this.gameService.playSound?{icon:"volume_up",tooltip:this.TRANSLATION.btn.sound.turnOnTooltip}:{icon:"volume_off",tooltip:this.TRANSLATION.btn.sound.turnOffTooltip}}swapPlaySound(){this.gameService.swapPlaySound(),this._setSoundIcon()}newGame(){const t=()=>this._startNewGame();if(!this.gameService.isGameFinished)return this.dialogService.openLiveGameConfirmationDialog(t,this.translationService.getTranslationObj(this.TRANSLATION.startNewGameConfirmation));t()}_startNewGame(){let t=this._cards;this._cards=[],setTimeout(()=>{this._cards=this.gameService.restartGame(t)},1)}onChooseCard(t){this.gameService.onChooseCard(t)&&setTimeout(()=>{this._openNewGameDialog()},l.a.winNotificationTimeout)}_openNewGameDialog(){this.dialogService.openConfirmationDialog({header:{icon:"mood",iconColor:"limegreen",title:this.translationService.getTranslationObj(this.TRANSLATION.finishGame.congratulations)},bodyText:this.translationService.getTranslationObj(this.TRANSLATION.finishGame.playAgain),okCallback:()=>this._startNewGame()})}}return t.\u0275fac=function(n){return new(n||t)(s.Ob(i.b),s.Ob(u.a),s.Ob(b.a),s.Ob(m.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-game"]],hostBindings:function(t,n){1&t&&s.bc("resize",function(t){return n.onResize(t)},!1,s.vc)},decls:14,vars:13,consts:[[1,"board-background"],[1,"buttons"],["mat-icon-button","","color","primary",3,"matTooltip","click"],["mat-stroked-button","","color","primary",3,"click"],[1,"board",3,"ngStyle"],[1,"cards"],[3,"card","onSelect",4,"ngFor","ngForOf"],[3,"card","onSelect"]],template:function(t,n){1&t&&(s.Ub(0,"div",0),s.Ub(1,"div",1),s.Ub(2,"button",2),s.bc("click",function(){return n.swapPlaySound()}),s.gc(3,"translate"),s.Ub(4,"mat-icon"),s.Gc(5),s.Tb(),s.Tb(),s.Ub(6,"button",3),s.bc("click",function(){return n.newGame()}),s.Ub(7,"mat-icon"),s.Gc(8,"refresh"),s.Tb(),s.Gc(9),s.gc(10,"translate"),s.Tb(),s.Tb(),s.Ub(11,"div",4),s.Ub(12,"div",5),s.Ec(13,y,1,1,"app-memory-card",6),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Bc("background-image",n.backgroundImgSrc),s.Db(2),s.mc("matTooltip",s.ic(3,7,"TRANSLATION",n.soundIcon.tooltip)),s.Db(3),s.Hc(n.soundIcon.icon),s.Db(4),s.Ic(" ",s.ic(10,10,"TRANSLATION",n.TRANSLATION.btn.newGame)," "),s.Db(2),s.lc("ngStyle",n.boardStyle),s.Db(2),s.lc("ngForOf",n.cards))},directives:[f.a,h.a,p.a,o.l,o.j,_],pipes:[c.c],styles:['.control-panel[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;min-height:50px}.control-panel.card-count[_ngcontent-%COMP%]{margin-right:10px}.control-panel.btn-new-game[_ngcontent-%COMP%]{margin-left:10px}.board-background[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:1rem;background-position:50%;background-repeat:no-repeat;background-size:cover}.board-background[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-color:hsla(0,0%,100%,.4)}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 1rem}.board[_ngcontent-%COMP%]{--card-width:100px;--card-margin:10px;--card-id-font-size:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto;opacity:1!important}@media screen and (max-width:767px){.board[_ngcontent-%COMP%]{--card-width:80px;--card-id-font-size:40px}}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1rem;justify-content:center}']}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({imports:[[o.c,i.c.forChild(T),r.c,a.a,c.b,d]]}),t})()}}]);