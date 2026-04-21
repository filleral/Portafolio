import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('cursorGlow') cursorGlow!: ElementRef<HTMLDivElement>;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
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
    // Lerp for smooth lag effect
    this.currentX += (this.targetX - this.currentX) * 0.08;
    this.currentY += (this.targetY - this.currentY) * 0.08;

    if (this.cursorGlow) {
      const el = this.cursorGlow.nativeElement;
      el.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }
}
