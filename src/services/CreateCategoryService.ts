import { CategoryRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}


//  [] Definir o tipo de retorno
//  [x] Alterar o retorno de error
//  [] Acessar o repositorio
//  [] Retornar algo


class CreateCategoryService {
    
    
    constructor(private categoriesRepository: CategoryRepository) {
        
    }

   execute({name, description}: IRequest): void {


    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists) {
            throw new Error("A Categoria já existe")
        }

        this.categoriesRepository.create({name, description})
   }

}

export {CreateCategoryService}