import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(AppController.name);
  }

  @Get()
  getHello(): string {
    console.log(this.getHello.name);
    return this.appService.getHello();
  }
}
