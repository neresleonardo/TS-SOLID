import { Router } from 'express'

import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository()

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoryRepository.findByName(name);
    if(categoryAlreadyExists) {
        return response.status(400).json({error:"Está Categoria já existe!"})
    }

    categoryRepository.create({name, description})

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
   const all = categoryRepository.list();

   return response.json(all)
})


export { categoriesRoutes};