import { Specification } from "../model/Specification";

interface ICreateSpeficationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
        findByName(name: string): Specification;
        create({name, description}: ICreateSpeficationDTO ): void;
}

export { ISpecificationsRepository, ICreateSpeficationDTO }