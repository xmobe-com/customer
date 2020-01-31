import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public constructor() {
    console.log(AppService.name);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
