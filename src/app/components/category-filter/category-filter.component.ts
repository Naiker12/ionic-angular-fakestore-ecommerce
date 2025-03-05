import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class CategoryFilterComponent implements OnInit {
  categories: string[] = [];
  order: 'asc' | 'desc' = 'asc'; // Estado del orden

  @Output() categorySelected = new EventEmitter<string>();
  @Output() orderChanged = new EventEmitter<'asc' | 'desc'>(); // Nuevo evento para emitir el orden

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onCategoryChange(event: any) {
    const selectedCategory = event.detail.value;
    console.log('Categoría seleccionada desde el componente:', selectedCategory);
    this.categorySelected.emit(selectedCategory);
  }

  changeOrder(order: 'asc' | 'desc') {
    this.order = order;
    console.log('Orden cambiado a:', order);
    this.orderChanged.emit(order);
  }
}
