import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommerceComponent } from "./commerce.component";

@NgModule({
    declarations: [
        CommerceComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommerceComponent
    ]
})
export class CommerceModule { }