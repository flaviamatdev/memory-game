(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{XWda:function(t,e,o){"use strict";o.r(e),o.d(e,"HomeModule",function(){return g});var n=o("ofXK"),a=o("tyNb"),c=o("sYmb"),i=o("vvyD"),r=o("YzOW");const s="assets/images/card-id/card_id_",d={texts:[{pt:"Este \xe9 um espa\xe7o para voc\xea criar um jogo da mem\xf3ria customizado para jogar coletivamente.",en:"This is a space for you to create a customized memory game to play collectively."},{pt:"As cartas possuem identificadores para facilitar a intera\xe7\xe3o entre o mediador e os jogadores.",en:"The cards have identifiers to facilitate interaction between the mediator and the players."},{pt:"Temos 3 tipos de identificadores para as cartas:",en:"We have 3 types of identifiers for cards:"}],cardIds:[{src:`${s}numbers.png`,text:{title:r.b[r.a.NUMBERS],bottom:{pt:"padr\xe3o",en:"standard"}}},{src:`${s}row_column.png`,text:{title:r.b[r.a.ROW_COLUMN],bottom:{pt:"explorar localiza\xe7\xe3o no plano",en:"to explore location on the plane"}}},{src:`${s}icons.png`,text:{title:r.b[r.a.ICONS],bottom:{pt:"para crian\xe7as ainda n\xe3o alfabetizadas",en:"for children who are not yet literate"}}}],btn:{buildGame:{pt:"Crie seu jogo",en:"Create your game"},playDemo:{pt:"Jogar Demo",en:"Play Demo"}}};var l=o("fXoL"),b=o("bTqV"),p=o("NFeN");function m(t,e){if(1&t&&(l.Ub(0,"span"),l.Gc(1),l.gc(2,"translate"),l.Tb()),2&t){const t=e.$implicit;l.Db(1),l.Hc(l.ic(2,1,"TRANSLATION",t))}}function f(t,e){if(1&t&&(l.Ub(0,"div",8),l.Ub(1,"div"),l.Gc(2),l.gc(3,"translate"),l.Tb(),l.Ub(4,"div"),l.Pb(5,"img",9),l.Tb(),l.Ub(6,"div",10),l.Gc(7),l.gc(8,"translate"),l.Tb(),l.Tb()),2&t){const t=e.$implicit;l.Db(2),l.Hc(l.ic(3,3,"TRANSLATION",t.text.title)),l.Db(3),l.lc("src",t.src,l.yc),l.Db(2),l.Hc(l.ic(8,6,"TRANSLATION",t.text.bottom))}}const u=[{path:"",component:(()=>{class t{constructor(t){this.router=t,this.TRANSLATIONS=d}buildGame(){this.router.navigateByUrl("game-builder")}playDemo(){this.router.navigateByUrl("game-builder/demo")}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(a.b))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-home"]],decls:19,vars:13,consts:[[1,"text-center"],[1,"d-flex-col"],[4,"ngFor","ngForOf"],[1,"card-id-info-box"],["class","card-id-info",4,"ngFor","ngForOf"],[1,"d-flex-col","mt-5"],["mat-raised-button","","color","primary",3,"click"],["mat-stroked-button","","color","primary",3,"click"],[1,"card-id-info"],["alt","Image",3,"src"],[1,"card-id-bottom-text"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"h1"),l.Gc(2),l.gc(3,"translate"),l.Tb(),l.Ub(4,"div",1),l.Ec(5,m,3,4,"span",2),l.Ub(6,"div",3),l.Ec(7,f,9,9,"div",4),l.Tb(),l.Tb(),l.Ub(8,"div",5),l.Ub(9,"button",6),l.bc("click",function(){return e.buildGame()}),l.Ub(10,"mat-icon"),l.Gc(11,"construction"),l.Tb(),l.Gc(12),l.gc(13,"translate"),l.Tb(),l.Ub(14,"button",7),l.bc("click",function(){return e.playDemo()}),l.Ub(15,"mat-icon"),l.Gc(16,"sports_esports"),l.Tb(),l.Gc(17),l.gc(18,"translate"),l.Tb(),l.Tb(),l.Tb()),2&t&&(l.Db(2),l.Hc(l.hc(3,5,"WELCOME")),l.Db(3),l.lc("ngForOf",e.TRANSLATIONS.texts),l.Db(2),l.lc("ngForOf",e.TRANSLATIONS.cardIds),l.Db(5),l.Ic(" ",l.ic(13,7,"TRANSLATION",e.TRANSLATIONS.btn.buildGame)," "),l.Db(5),l.Ic(" ",l.ic(18,10,"TRANSLATION",e.TRANSLATIONS.btn.playDemo)," "))},directives:[n.j,b.a,p.a],pipes:[c.c],styles:["h1[_ngcontent-%COMP%]{font-family:Quicksand}.d-flex-col[_ngcontent-%COMP%]{gap:1rem;align-items:center}.card-id-info-box[_ngcontent-%COMP%]{width:100%;flex-direction:row;justify-content:space-evenly}.card-id-info[_ngcontent-%COMP%], .card-id-info-box[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.card-id-info[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;gap:.5rem}.card-id-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px}.card-id-info[_ngcontent-%COMP%]   .card-id-bottom-text[_ngcontent-%COMP%]{width:205px;font-size:12px;color:grey}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({imports:[[n.c,a.c.forChild(u),i.a,c.b]]}),t})()}}]);