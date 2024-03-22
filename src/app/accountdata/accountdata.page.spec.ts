import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountdataPage } from './accountdata.page';

describe('AccountdataPage', () => {
  let component: AccountdataPage;
  let fixture: ComponentFixture<AccountdataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
