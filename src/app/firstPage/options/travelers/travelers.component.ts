import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelers',
  template: `
    <div class="form-group travelers">
      <label for="travelers">Travelers</label>
      <input type="number" class="form-control" id="travelers" min="1" value="1">
    </div>
  `,
  styles: [`
    .travelers {
      margin-top: 5px;
    }
  `]
})
export class TravelersComponent {

}
