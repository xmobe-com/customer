import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public constructor() {
    console.log(AppService.name);
  }
  getHello(): string {
    console.log(this.getHello.name);
    return 'Hello World!';
  }
}
