import { bootstrap }    from '@angular/platform-browser-dynamic';
import { InventoryApp } from './app.component';
import { ProductService } from './services/product.service';
bootstrap(InventoryApp, [ProductService]);