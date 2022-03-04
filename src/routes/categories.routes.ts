import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory'

const categoriesRoutes = Router();
const specificationRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
   return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
   return listCategoriesController.handle(request, response);
})

specificationRoutes.post("/specification", (request, response) => {
    const { name, description } = request.body;


    
})




export { categoriesRoutes};