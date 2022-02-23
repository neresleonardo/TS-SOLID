import { Category } from "../model/Category"

interface iCateloriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create(name: string, description: string): void;

}

export { iCateloriesRepository };