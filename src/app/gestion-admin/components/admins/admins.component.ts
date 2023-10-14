import { Component,Input } from '@angular/core';
import { Admin } from '../../model/admin.model';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent {

  @Input() admins!:Admin[];
}
