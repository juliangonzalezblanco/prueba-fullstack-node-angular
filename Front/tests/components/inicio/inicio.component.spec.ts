import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InicioComponent } from '../../../src/app/components/inicio/inicio.component';
import { ApiService } from '../../../src/app/services/api.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ],
      providers: [ ApiService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
