import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment = ['item1', 'item2', 'item3']
  equipmentBeingEdited: string=null
  constructor() { }

  ngOnInit() {
  }
add(equipmentName: string) {
     this.equipment.push(equipmentName);
  }

remove(equipmentName: string ) {
  let index = this.equipment.indexOf(equipmentName);
  this.equipment.splice(index, 1);
}

}
