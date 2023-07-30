import { Injectable } from '@angular/core';
import valuesData from '../../../assets/values-data.json';
import {Value} from "../../models/values/value.model";

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  constructor() { }

  getValuesData(): Value[] {
    return valuesData as Value[];
  }
}
