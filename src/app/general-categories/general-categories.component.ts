import { Component, OnInit } from '@angular/core';

/*interface Category {
  name: string,
  image?: string
}*/

@Component({
  selector: 'app-general-categories',
  templateUrl: './general-categories.component.html',
  styleUrls: ['./general-categories.component.css'],
})
export class GeneralCategoriesComponent implements OnInit {

  constructor() { }

  categories: any[] = ["Gucci", "Saint Laurent", "Dita", "Masunaga", "Tom Brown"];

  ngOnInit(): void {
  }

}
