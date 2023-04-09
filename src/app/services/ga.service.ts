import { getHtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
declare const gtag:Function;
@Injectable({
  providedIn: 'root'
})
export class GaService {

  constructor() { }

  public sendEvent(eventName:string, eventAction:string):void{
    gtag('event',eventName,{'user_interaction':eventAction});
  }
}
