import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'movies-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSuscription?: Subscription;

  @Output("OutputSearchbox-debounce")
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  public onKeyPress(movieSearchTerm: string): void {
    this.debouncer.next(movieSearchTerm);
  }

}
