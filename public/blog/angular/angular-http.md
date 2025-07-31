---
title: "angular http"
description: "Angular http API calls"
pubDate: 2025-07-31
featured: false
---

app.config.ts:

```ts
//app.config.ts
...
export const appConfig: ApplicaitonConfig = {
    providers: [
        provideHttpClient(), // to use Http client service
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        ]
};
```
Service:

```ts
// some.service.ts
...
export class SomeService {
    http = inject(HttpClient); // Now we have access to http api requests
    getFromApiFunction() {
        const url = 'https://jsonplaceholder.typicode.com/todos' // creates a url variable
        return this.http.get<Array<Todo>>(); // returns data from the api call
    }
}
```

Component:

```ts
// some.component.ts
export class SomeComponent implements OnInit {
     someService = inject(someServcie);
    serviceObjects = signal<Array<string>>([]); // Optional. To create a signal instead of using a variable

    ngOnInit(): void {
        this.someService.getFromApiFunction()
        .pipe(
            catchError((err) => { // in case url doesnt work or request couldnt be sent
                console.log(err);
                throw err;
            })
        ).subscribe((todos) => {
            this.serviceObjects.set(todos); // updates serviceObjects signal with values obrained from api = todos
        })
    }
}
```