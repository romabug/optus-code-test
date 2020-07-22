import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BarComponent } from './components/bar/bar.component';
import { ProgressBarComponent } from './components/progress-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [ButtonComponent, BarComponent, ProgressBarComponent],
    imports: [
        CommonModule, FormsModule
    ],
    exports: [ProgressBarComponent],

})

export class ProgressBarModule {
}
