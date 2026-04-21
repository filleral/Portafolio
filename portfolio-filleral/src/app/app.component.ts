import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('cursorGlow') cursorGlow!: ElementRef<HTMLDivElement>;

  private targetX = -999;
  private targetY = -999;
  private currentX = -999;
  private currentY = -999;
  private rafId = 0;

  ngAfterViewInit() {
    this.animate();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
  }

  private animate() {
    this.currentX += (this.targetX - this.currentX) * 0.12;
    this.currentY += (this.targetY - this.currentY) * 0.12;

    if (this.cursorGlow) {
      const el = this.cursorGlow.nativeElement;
      el.style.left = `${this.currentX}px`;
      el.style.top  = `${this.currentY}px`;
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }
}
