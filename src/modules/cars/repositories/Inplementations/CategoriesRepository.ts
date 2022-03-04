import { Category } from '../model/Category'
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoriesRespository';

class CategoryRepository implements ICategoryRepository {

    private categories: Category[];

    private static INSTANCE: CategoryRepository;

    private constructor() { 
        this.categories = [];
    }

    public static getInstance(): CategoryRepository{
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }

    create({name, description}: ICreateCategoryDTO): void {


        const category = new Category();
    
        // Object.assign dar para passar um objeto para ele e seus
        // atributos.
    
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        })
    
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category{  
        const category = this.categories.find(category => category.name === name);
        return category;
    }

}

export { CategoryRepository }