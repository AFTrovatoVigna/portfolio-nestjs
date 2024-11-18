import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'Welcome to my portfolio API, built with NestJS! This project showcases my skills, projects, and experience in software development. Explore the endpoints to learn more about my journey and work.';
  }
}
