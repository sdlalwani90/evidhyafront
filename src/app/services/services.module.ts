import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { TokenService } from './core/token.service';
import { RestfullApiService } from './core/restfull-api.service';
import { AutocompleteService } from './core/autocomplete.service';
import { TestService } from './core/test.service';
import { FileUploadeService } from './core/file-uploade.service';

@NgModule({
  	imports: [
        HttpModule,
        HttpClientModule
  	],
  	declarations: [],
  	exports: []
})

export class ServiceModule {
    static forRoot(): ModuleWithProviders {
    return {
        ngModule: ServiceModule,
        providers: [
            TokenService,
            RestfullApiService,
            AutocompleteService,
            TestService,
            FileUploadeService
        ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: ServiceModule) {
    if (parentModule) {
        throw new Error(
            'ServiceModule is already loaded. Import it in the AppModule only');
        }
    }
}
