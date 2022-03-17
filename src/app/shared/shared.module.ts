import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent
  ]

})
export class SharedModule { }
