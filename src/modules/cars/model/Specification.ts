import { v4 as uuidV4 } from 'uuid' // Subescrevendo

class Specifcation {

    id?: string; // Opicional 

    name: string;

    description: string;

    created_at: Date;

    constructor() {
        //Se não tiver id
        if(!this.id){
            
            this.id = uuidV4(); // Responsabilidade na class
             // Identificador único universal | uuid uuidV4
        }
    }
}

export { Specifcation };