import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';


describe('VoterComponent', () => {
let component: VoterComponent;
let fixture: ComponentFixture<VoterComponent>;

beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count')); // de: for debugging
    const el: HTMLElement = de.nativeElement;                     // el: element

    expect(el.innerText).toContain('21');
  });

it('should highlighted upvote button if upvoted', () => {
  component.myVote = 1;
  fixture.detectChanges();

  const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

  expect(de.classes.highlighted).toBeTruthy();
 });

it('should increase total votes when clicked upvote button', () => {
  let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
  button.triggerEventHandler('click', null);

  expect(component.totalVotes).toBe(1);
});
});
