import { Category } from "../model/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoriesRespository"

class PostgresCategoriesRepository implements ICategoryRepository {
  
    findByName(name: string): Category {        
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name,description);
    }

}

export { PostgresCategoriesRepository}