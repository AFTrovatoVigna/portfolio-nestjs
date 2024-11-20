import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'PROJECTS'
})
export class Projects {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ 
        type: 'varchar', 
        length: 100 
    })
    title: string;

    @Column({ 
        type: 'text' 
    })
    description: string;

    @Column({ 
        type: 'varchar', 
        length: 200, 
        nullable: true 
    })
    repositoryUrl?: string;

    @Column({ 
        type: 'varchar', 
        length: 200, 
        nullable: true 
    })
    liveDemoUrl?: string;

    @Column({ 
        type: 'simple-array', 
        length: 50, 
        nullable: true 
    })
    technologyStack: string[];

    @Column({ 
        type: 'boolean', 
        default: false 
    })
    isFeatured: boolean;

    @Column()
    createdAt: Date; 

    @Column()
    updatedAt: Date;

    @Column()
    members: string
}