import { Module } from '@nestjs/common';
import { Information2Controller } from './information2.controller';

@Module({
  controllers: [Information2Controller]
})
export class Information2Module {}
