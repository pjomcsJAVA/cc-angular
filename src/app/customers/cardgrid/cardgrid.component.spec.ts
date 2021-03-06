import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardgridComponent } from "./cardgrid.component";

describe("CardgridComponent", () => {
  let component: CardgridComponent;
  let fixture: ComponentFixture<CardgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardgridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
