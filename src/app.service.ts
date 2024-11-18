import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getInfo(): string {
    return 'Welcome to my portfolio API, built with NestJS! This project showcases my skills, projects, and experience in software development. Explore the endpoints to learn more about my journey and work.';
  }

  getAbout() {
    return {
      name: 'Arian Federico Trovato Vigna',
      role: 'Junior Software Developer',
      description: 'Passionate about creating scalable web applications and continuously learning new technologies. Skilled in JavaScript, Node.js, and React, with a strong interest in backend development.',
      contact: {
        email: 'fedetrovato21@gmail.com',
        github: 'https://github.com/AFTrovatoVigna',
        linkedin: 'https://www.linkedin.com/in/arian-trovato-490a61274/'
      }
    };
  }
}
