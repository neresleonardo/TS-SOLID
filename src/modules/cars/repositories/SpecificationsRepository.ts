import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ICreateSpeficationDTO } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    // Tabela Fake
    private specifications: Specification[];

    constructor(){
        this.specifications = [];
    }

    create({ description,name}: ICreateSpeficationDTO): void {
        const specification = new Specification();

        // O assign vai pegar todos as nossas informações e passar
        // para o specification
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    };

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }
}

export { SpecificationsRepository }