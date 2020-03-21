import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import{MatToolbarModule}from '@angular/material'
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import {ShoppingCartModule} from 'ng-shopping-cart';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartsComponent } from './carts/carts.component';
import { FooterComponent } from './footer/footer.component';
import {CarouselModule}from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RouterModule, Routes }from "@angular/router";
import { Router } from '@angular/router';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { HeadPhonesComponent } from './head-phones/head-phones.component';
import { LabTopComponent } from './lab-top/lab-top.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { CameraComponent } from './camera/camera.component';
import { PhonesComponent } from './phones/phones.component';
import { ServicenodeService } from './services/servicenode.service';
import { UserService } from './services/user.service';



const routes:Routes = 
[
  { path:'headphonescards', component: HeadPhonesComponent },
  { path:'camera', component: CameraComponent },
  { path:'phones', component: PhonesComponent },
  { path:'purchase', component: PurchaseComponent },
  { path:'checkout', component: CheckoutComponent },
  {  path:'home',  component : HomeComponent  },
  {  path:'laptop',  component : LabTopComponent  },
  {  path:'checkout',  component : CheckoutComponent },
   {  path:'carts',  component : CartsComponent },
   {  path:'signup',  component : SignupComponent},
   {  path:'login',  component : LoginAndRegisterComponent},
  // {component:UserComponent,path:'users/:id'},
  // {path:'',redirectTo:'users',pathMatch:'full'},
  { path:'head', component: HeadPhonesComponent },
  // { path:'**', component : PurchaseComponent}
  {  path:'**',  component : HomeComponent  },
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartsComponent,
    FooterComponent,
    CheckoutComponent,
    PurchaseComponent,
    HomeComponent,
    LoginAndRegisterComponent,
    HeadPhonesComponent,
    LabTopComponent,
    SignupComponent,
    IndexComponent,
    NavIndexComponent,
    CameraComponent,
    PhonesComponent,
   
 
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    // AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule, 
    MatToolbarModule,
    BrowserModule,
    ShoppingCartModule,
    // import HttpClientModule after BrowserModule.
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
      // ClipboardModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      DragDropModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      PortalModule,
      ScrollingModule,
      MDBBootstrapModule,
      CommonModule,
      CarouselModule,
     
   ],
  providers: [ServicenodeService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
