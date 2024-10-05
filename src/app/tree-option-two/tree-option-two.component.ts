import { Component } from '@angular/core';

interface TreeNode {
  label: string;
  data: { ID: number; Name: string; Manager: number | null };
  children?: TreeNode[];
}

@Component({
  selector: 'app-tree-option-two',
  templateUrl: './tree-option-two.component.html',
  styleUrls: ['./tree-option-two.component.css']
})
export class TreeOptionTwoComponent {

  employees: TreeNode[] = [];
  cols: any[] = [];

  ngOnInit() {

    // columns of the table 
    this.cols = [
      { field: 'Name', header: 'Employee Name' },
      { field: 'ID', header: 'Employee ID' },
      { field: 'Manager', header: 'Manager ID' }
    ];

    // data to be displayed
    this.employees = [
      {
        label: 'Yasser',
        data: { ID: 1, Name: 'Yasser', Manager: null },
        children: [
          {
            label: 'Mohamed',
            data: { ID: 2, Name: 'Mohamed', Manager: 1 },
            children: [
              {
                label: 'Mostafa',
                data: { ID: 4, Name: 'Mostafa', Manager: 2 },
                children: []
              },
              {
                label: 'Ahmed',
                data: { ID: 8, Name: 'Ahmed', Manager: 2 },
                children: []
              }
            ]
          },
          {
            label: 'Ibrahim',
            data: { ID: 3, Name: 'Ibrahim', Manager: 1 },
            children: [
              {
                label: 'Omar',
                data: { ID: 6, Name: 'Omar', Manager: 3 },
                children: [
                  {
                    label: 'Salem',
                    data: { ID: 9, Name: 'Salem', Manager: 6 },
                    children: []
                  }
                ]
              },
              {
                label: 'Ali',
                data: { ID: 5, Name: 'Ali', Manager: 3 },
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Khaled',
        data: { ID: 7, Name: 'Khaled', Manager: 4 },
        children: [
          {
            label: 'Hassan',
            data: { ID: 10, Name: 'Hassan', Manager: 7 },
            children: []
          }
        ]
      }
    ];
  }
}