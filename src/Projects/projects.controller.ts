import { Controller, Get, Query } from "@nestjs/common";
import { ProjectsService } from "./projects.service";

@Controller("projects")
export class ProjectsController{
    constructor(
        private readonly projectsService: ProjectsService
    ){}

    @Get()
    getProjects(@Query('page') page: number, @Query('limit') limit: number){
        if (page && limit){
            return this.projectsService.getProjects(page, limit)
        }
        return this.projectsService.getProjects(1, 5)
    }
}