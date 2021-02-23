import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'title';
  constructor() {}
  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);
      const arrayRes = [];
      jsonData.Hoja1.map((obj) => {
        const road = obj.L;
        const stations = obj.G;
        const res = coverageGasStations(road, stations);
        arrayRes.push(res);
      });
      function coverageGasStations(road, stations) {
        const Diameter = Math.round(road / stations);
        const stationCounter = Diameter * stations;

        if (stationCounter > road) {
          return `No se pueden colocar ${stations} estaciones a lo largo de la carretera porque supera la longitud que es de: ${road}`;
        } else if (stationCounter === road) {
          return `Entre la carretera de longitud ${road} caben ${stations} sin interferencia`;
        } else {
          return '-1. Hay puntos sin cobertura a lo largo de la carretera.';
        }
      }

      document.getElementById('output').innerHTML = arrayRes.toString();
    };
    reader.readAsBinaryString(file);
  }
}