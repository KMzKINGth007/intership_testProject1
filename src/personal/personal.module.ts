import { Module } from '@nestjs/common';

import { PersonalService } from './services/personal.service';
import { PersonalController } from './controllers/personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalInfoEntity } from './modules/personal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalInfoEntity])],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {}
