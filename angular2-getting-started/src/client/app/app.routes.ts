import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import {SearchRoutes} from "./+search/search.routes";

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...SearchRoutes
];
