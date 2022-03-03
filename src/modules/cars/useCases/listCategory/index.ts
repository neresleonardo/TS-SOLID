import { CategoryRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./listCategoryController";

const categoriesRepository = new CategoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController}