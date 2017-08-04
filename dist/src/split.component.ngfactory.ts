/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../src/splitGutter.directive';
import * as i2 from '@angular/common';
import * as i3 from '../../src/split.component';
const styles_SplitComponent:any[] = ['[_nghost-%COMP%] {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: flex-start;\n            align-items: stretch;\n            flex-direction: row;\n        }\n\n        .vertical[_nghost-%COMP%] {\n            flex-direction: column;\n        }\n\n        split-gutter[_ngcontent-%COMP%] {\n            flex-grow: 0;\n            flex-shrink: 0;\n            background-color: #eeeeee;\n            background-position: center center;\n            background-repeat: no-repeat;\n        }\n\n        .vertical[_nghost-%COMP%]   split-gutter[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n\n        [_nghost-%COMP%]     split-area {\n            transition: flex-basis 0.3s;\n        }  \n\n        .notransition[_nghost-%COMP%]     split-area {\n            transition: none !important;\n        }      \n\n        [_nghost-%COMP%]     split-area.hided {\n            flex-basis: 0 !important;\n            overflow: hidden !important;\n        }      \n\n        .vertical[_nghost-%COMP%]     split-area.hided {\n            max-width: 0;\n        }'];
export const RenderType_SplitComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_SplitComponent,data:{}});
function View_SplitComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'split-gutter',
      ([] as any[]),(null as any),[[(null as any),'mousedown'],[(null as any),'touchstart']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('mousedown' === en)) {
          const pd_0:any = ((<any>_co.startDragging($event,(((<any>_v.parent).context.index * 2) + 1))) !== false);
          ad = (pd_0 && ad);
        }
        if (('touchstart' === en)) {
          const pd_1:any = ((<any>_co.startDragging($event,(((<any>_v.parent).context.index * 2) + 1))) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.SplitGutterDirective,
      [i0.ElementRef,i0.Renderer],{order:[0,'order'],direction:[1,'direction'],size:[2,
          'size'],disabled:[3,'disabled']},(null as any))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (((<any>_v.parent).context.index * 2) + 1);
    const currVal_1:any = _co.direction;
    const currVal_2:any = _co.gutterSize;
    const currVal_3:any = _co.disabled;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3);
  },(null as any));
}
function View_SplitComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_SplitComponent_2)),i0.ɵdid(16384,
      (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (((_v.context.last === false) && (_v.context.$implicit.component.visible === true)) && !_co.isLastVisibleArea(_v.context.$implicit));
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
export function View_SplitComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(2,[(_l()(),i0.ɵted((null as any),['\n        '])),i0.ɵncd((null as any),
      0),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
      (null as any),1,(null as any),View_SplitComponent_1)),i0.ɵdid(802816,(null as any),
      0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
          'ngForOf']},(null as any))],(_ck,_v) => {
    var _co:i3.SplitComponent = _v.component;
    const currVal_0:any = _co.areas;
    _ck(_v,4,0,currVal_0);
  },(null as any));
}
export function View_SplitComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'split',([] as any[]),
      [[2,'vertical',(null as any)],[4,'flex-direction',(null as any)],[2,'notransition',
          (null as any)],[4,'width',(null as any)],[4,'height',(null as any)]],(null as any),
      (null as any),View_SplitComponent_0,RenderType_SplitComponent)),i0.ɵdid(704512,
      (null as any),0,i3.SplitComponent,[i0.ChangeDetectorRef,i0.ElementRef,i0.Renderer],
      (null as any),(null as any))],(null as any),(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,1).styleFlexDirection;
    const currVal_1:any = i0.ɵnov(_v,1).styleFlexDirectionStyle;
    const currVal_2:any = i0.ɵnov(_v,1).dragging;
    const currVal_3:any = i0.ɵnov(_v,1).styleWidth;
    const currVal_4:any = i0.ɵnov(_v,1).styleHeight;
    _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4);
  });
}
export const SplitComponentNgFactory:i0.ComponentFactory<i3.SplitComponent> = i0.ɵccf('split',
    i3.SplitComponent,View_SplitComponent_Host_0,{direction:'direction',width:'width',
        height:'height',gutterSize:'gutterSize',disabled:'disabled',visibleTransition:'visibleTransition'},
    {dragStart:'dragStart',dragProgress:'dragProgress',dragEnd:'dragEnd',visibleTransitionEnd:'visibleTransitionEnd'},
    ['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovV1dXL2FuZ3VsYXItc3BsaXQvc3JjL3NwbGl0LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9XV1cvYW5ndWxhci1zcGxpdC9zcmMvc3BsaXQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovV1dXL2FuZ3VsYXItc3BsaXQvc3JjL3NwbGl0LmNvbXBvbmVudC50cy5TcGxpdENvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovV1dXL2FuZ3VsYXItc3BsaXQvc3JjL3NwbGl0LmNvbXBvbmVudC50cy5TcGxpdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYXJlYSBbbmdGb3JPZl09XCJhcmVhc1wiIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWxhc3Q9XCJsYXN0XCI+XG4gICAgICAgICAgICA8c3BsaXQtZ3V0dGVyICpuZ0lmPVwibGFzdCA9PT0gZmFsc2UgJiYgYXJlYS5jb21wb25lbnQudmlzaWJsZSA9PT0gdHJ1ZSAmJiAhaXNMYXN0VmlzaWJsZUFyZWEoYXJlYSlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW29yZGVyXT1cImluZGV4KjIrMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3NpemVdPVwiZ3V0dGVyU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwic3RhcnREcmFnZ2luZygkZXZlbnQsIGluZGV4KjIrMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJzdGFydERyYWdnaW5nKCRldmVudCwgaW5kZXgqMisxKVwiPjwvc3BsaXQtZ3V0dGVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPiIsIjxzcGxpdD48L3NwbGl0PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDR1k7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUtjO1VBQUE7VUFBQTtRQUFBO1FBQ0E7VUFBQTtVQUFBO1FBQUE7UUFOZDtNQUFBLHVDQUFBO01BQUE7VUFBQTs7SUFDYztJQUNBO0lBQ0E7SUFDQTtJQUpkLFdBQ2MsVUFDQSxVQUNBLFVBQ0EsU0FKZDs7OztvQkFENEUsbURBQzVFO01BQUEsMkVBQUE7TUFBQTtNQUFBLGVBTTZFOztJQU4vRDtJQUFkLFdBQWMsU0FBZDs7OztvQkFIWixzREFDUTtNQUFBLEdBQXlCLCtDQUN6QjtNQUFBLDZEQUFBO01BQUE7VUFBQTs7SUFBNEI7SUFBNUIsV0FBNEIsU0FBNUI7Ozs7b0JDRlI7TUFBQTtVQUFBO01BQUEsdUVBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUEsaURBQUE7Ozs7Ozs7In0=
