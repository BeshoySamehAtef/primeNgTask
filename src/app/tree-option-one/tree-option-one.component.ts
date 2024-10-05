import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-option-one',
  templateUrl: './tree-option-one.component.html',
  styleUrls: ['./tree-option-one.component.css']
})
export class TreeOptionOneComponent {

  // employeers from api1 for exp.
  employees = [
    { id: 1, name: "Mahmoud", managerId: 101 },
    { id: 2, name: "Amr", managerId: 101 },
    { id: 3, name: "Mostafa", managerId: 102 },
    { id: 4, name: "Ahmed", managerId: 102 },
    { id: 5, name: "Tarek", managerId: 103 }
  ];

  // managers from api2 for exp.
  managers = [
    { id: 101, name: "Yasser" },
    { id: 102, name: "Omar" },
    { id: 103, name: "Mohamed" }
  ];

  treeData: any[] = [];

  ngOnInit() {
    this.treeData = this.mapEmployeesToManagers(this.employees, this.managers);
  }

  mapEmployeesToManagers(employees: any[], managers: any[]): any[] {
    const managerMap = new Map<number, any>();

    // create a map of managers
    managers.forEach(manager => {
      managerMap.set(manager.id, {
        label: manager.name,
        expanded: true,
        children: []
      });
    });

    // assign employees to their managers
    employees.forEach(employee => {
      const managerNode = managerMap.get(employee.managerId);
      if (managerNode) {
        managerNode.children.push({
          label: employee.name 
        });
      }
    });
    return Array.from(managerMap.values());
  }
}
