import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RippleModule } from "primeng/ripple";
import { ToastModule } from "primeng/toast";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { StyleClassModule } from "primeng/styleclass";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { DropdownModule } from "primeng/dropdown";
import { ChipModule } from "primeng/chip";
import { FieldsetModule } from "primeng/fieldset";
import { DividerModule } from "primeng/divider";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { InputNumberModule } from "primeng/inputnumber";
import { BlockUIModule } from "primeng/blockui";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { InputMaskModule } from "primeng/inputmask";
import { ToolbarModule } from "primeng/toolbar";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "primeng/tooltip";
import { KeyFilterModule } from "primeng/keyfilter";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { CalendarModule } from "primeng/calendar";
import { MenubarModule } from "primeng/menubar";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { TabMenuModule } from "primeng/tabmenu";
import { FileUploadModule } from "primeng/fileupload";
import { PanelMenuModule } from "primeng/panelmenu";
import { SlideMenuModule } from "primeng/slidemenu";
import { CheckboxModule } from "primeng/checkbox";
import { MenuModule } from "primeng/menu";
import { SkeletonModule } from "primeng/skeleton";
import { MultiSelectModule } from "primeng/multiselect";
import { ChipsModule } from "primeng/chips";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { AutoCompleteModule } from "primeng/autocomplete";

const myModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RippleModule,
  ToastModule,
  InputTextModule,
  PasswordModule,
  ButtonModule,
  StyleClassModule,
  MessageModule,
  MessagesModule,
  DropdownModule,
  ChipModule,
  FieldsetModule,
  DividerModule,
  ConfirmDialogModule,
  TableModule,
  TagModule,
  InputNumberModule,
  BlockUIModule,
  ProgressSpinnerModule,
  ConfirmPopupModule,
  InputMaskModule,
  ToolbarModule,
  DialogModule,
  TooltipModule,
  KeyFilterModule,
  RadioButtonModule,
  InputTextareaModule,
  ScrollPanelModule,
  CalendarModule,
  MenubarModule,
  BreadcrumbModule,
  TabMenuModule,
  FileUploadModule,
  PanelMenuModule,
  SlideMenuModule,
  CheckboxModule,
  MenuModule,
  SkeletonModule,
  MultiSelectModule,
  ChipsModule,
  OverlayPanelModule,
  AutoCompleteModule,
];

@NgModule({
  imports: [...myModules],
  exports: [...myModules],
})
export class PrimeModule {}
