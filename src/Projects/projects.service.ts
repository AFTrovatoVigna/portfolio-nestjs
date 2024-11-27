import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projects } from "./projects.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjectsService{

    constructor(
        @InjectRepository(Projects)
        private projectsRepository: Repository<Projects>
    ){}

    async getProjects(page: number, limit: number){
        let project = await this.projectsRepository.find()
        const start = (page - 1) * limit;
        const end = start + +limit;
        project = project.slice(start, end)
        return project
    }
}