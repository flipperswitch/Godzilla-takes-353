import { Injectable } from '@angular/core';

@Injectable()

export class Constants {
    private key: string = "?key=7222722-e51a9c17b623c12bf3f542428";
    private url: string = "https://pixabay.com/api/";

    public getKeyString(): string { return this.key; }
    public getUrlString(): string { return this.url; }
}