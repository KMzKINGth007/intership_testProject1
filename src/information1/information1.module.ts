import { Module } from '@nestjs/common';
import { Information1Controller } from './information1.controller';

@Module({
  controllers: [Information1Controller]
})
export class Information1Module {}
