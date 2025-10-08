import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[highlighted]",
	exportAs: "hl"
})
export class HighlightedDirective {
  constructor() {}

  @Input("highlighted")
  isHighlighted = false;

	@Output()
	toggleHighlight = new EventEmitter();

  // @HostBinding('className')
  // get cssClasses(){
  // 	return "highlighted";
  // }

  // @HostBinding('style.border')
  // 	get cssClasses(){
  // 		return "solid 1px red";
  // 	}

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding("attr.disabled")
  get disabled() {
    return true;
  }

	@HostListener('mouseover', ['$event'])
	mouseOver($event) {
		console.log($event);
		 this.isHighlighted = true;
		 this.toggleHighlight.emit(this.isHighlighted);
	}

		@HostListener('mouseleave')
	mouseLeave() {
		this.isHighlighted = false;
		this.toggleHighlight.emit(this.isHighlighted);
	}

toggle() {
  this.isHighlighted = !this.isHighlighted;
  this.toggleHighlight.emit(this.isHighlighted);
}


}
