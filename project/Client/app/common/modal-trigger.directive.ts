import { Directive,Input, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

@Directive(
{
        selector:'[modal-trigger]'  
    })

export class ModalTriggerDirective implements OnInit{
    @Input("modal-trigger") elementId:string

    private el: HTMLElement // this will hold the actual html element, not a wrapper to the element

    //el is the wrapper to the dom element that was used to trigger the event
    //Inject is used to inject the actual jquery implementation and we references it using $
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement
    }

    ngOnInit() {
        //we do not want to show the modal right away, but only after the button has been clicked
        this.el.addEventListener('click', e => {
            this.$('#' + this.elementId).modal({})
        })
    }
}