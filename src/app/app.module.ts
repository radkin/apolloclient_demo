import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// custom
import { AppComponent } from './app.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalErrorHandler } from './global-error.handler';

// const apolloServer = 'http://localhost:9000/api/graphql';
const apolloServer = 'https://apolloserver-demo.herokuapp.com/graphql';

@NgModule({
  declarations: [
    AppComponent,
    SearchCustomersComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs:9200',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.INFO,
      disableConsoleLogging: false
    }),
    GraphQLModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: apolloServer
          })
        };
      },
      deps: [HttpLink]
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
