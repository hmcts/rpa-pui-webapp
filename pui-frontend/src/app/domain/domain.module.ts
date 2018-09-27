import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'

// import { SearchResultComponent } from './components/search-result/search-result.component';
import { SharedModule } from '../shared/shared.module'
// import { CaseViewerModule } from './case-viewer/case-viewer.module';

import { HeaderComponent } from './components/header/header.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

// import {GovukModule} from '../govuk/govuk.module';

import { HmctsModule } from '../hmcts/hmcts.module'
import { CaseService } from './services/case.service'
import { SearchResultComponent } from './components/search-result/search-result.component'

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, HmctsModule, SharedModule],
    exports: [HeaderComponent, SearchResultComponent],
    declarations: [HeaderComponent, SearchResultComponent],
    providers: [CaseService]
})
export class DomainModule {}
