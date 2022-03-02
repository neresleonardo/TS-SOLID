import { Router } from 'express'

import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRoutes = Router();
const specificationRoutes = Router()

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
   
});

categoriesRoutes.get("/", (request, response) => {
   const all = categoryRepository.list();

   return response.json(all);
})

specificationRoutes.post("/specification", (request, response) => {
    const { name, description } = request.body;


    
})




export { categoriesRoutes};