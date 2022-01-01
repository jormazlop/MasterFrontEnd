import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Provider } from '../models/provider.model';

@Injectable({ providedIn: 'root' })
export class ProvidersService {

  private currentProviderSubject: BehaviorSubject<Provider[]> = new BehaviorSubject([
    {
      code: 'GIHT4515V',
      name: 'Vodafone España',
      telephone: 948843164,
      email: 'vodafone@email.es',
    },
    {
      code: 'JRYY5855L',
      name: 'Telefónica España',
      telephone: 921892254,
      email: 'telefonica@email.es',
    },
    {
      code: 'POMQ4483Ñ',
      name: 'Gas Natural',
      telephone: 921892254,
      email: 'gas@email.es',
    },
    {
      code: 'YHDO0255S',
      name: 'Iberdrola',
      telephone: 927616913,
      email: 'luz@email.es',
    },
    {
      code: 'IUZW1992H',
      name: 'Hierro Fuerte',
      telephone: 983685706,
      email: 'hierrofuerte@email.es',
    },
    {
      code: 'JKRT1222O',
      name: 'Maderas Pepito',
      telephone: 987663718,
      email: 'maderas@email.es',
    },
    {
      code: 'WWLL5288J',
      name: 'Pinturas Color',
      telephone: 973545625,
      email: 'pinturas@email.es',
    },
    {
      code: 'QJGN1108T',
      name: 'Rise and Shine',
      telephone: 964009239,
      email: 'riseandshine@email.es',
    }
  ]);

  constructor() { }

  public get currentProvidersValue(): BehaviorSubject<Provider[]> {
    return this.currentProviderSubject;
  }

  public addProvider(provider: Provider): void {
    let newProvidersList = this.currentProviderSubject.value;
    newProvidersList.push(provider);
    this.currentProviderSubject.next(newProvidersList);
  }

  public modifyProvider(provider: Provider, index: number): void {
    let newProvidersList = this.currentProviderSubject.value;
    newProvidersList[index] = provider;
    this.currentProviderSubject.next(newProvidersList);
  }

  public deleteProvider(index: number): void {
    let newProvidersList = this.currentProviderSubject.value;
    newProvidersList.splice(index, 1);
    this.currentProviderSubject.next(newProvidersList);
  }

}
