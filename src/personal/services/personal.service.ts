import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalInfoEntity } from '../modules/personal.entity';
import { CreatePersonalDto } from '../dto/createPersonal';
import { UpdatePersonalDto } from '../dto/updatePersonal';
import { DateUtils } from '../utils/date-utils';
import { promises } from 'dns';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(PersonalInfoEntity)
    private readonly personalRepository: Repository<PersonalInfoEntity>,
  ) {}

  async create(
    createPersonalDto: CreatePersonalDto,
  ): Promise<PersonalInfoEntity> {
    const personal = this.personalRepository.create({
      ...createPersonalDto,
      createdAt: DateUtils.dateToString2(new Date()),
    });
    return this.personalRepository.save(personal);
  }

  async findAll(): Promise<PersonalInfoEntity[]> {
    return this.personalRepository.find();
  }

  async getById(id: number): Promise<PersonalInfoEntity | null> {
    return this.personalRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.personalRepository.delete(id);
  }

  //   async update(id: number, updateData: Partial<UpdatePersonalDto>): Promise<PersonalInfoEntity> {
  //     const personal = await this.personalRepository.findOne({ where: { id } });
  //     if (!personal) {
  //       throw new Error('Personal not found');
  //     }
  //     personal.updatedAt = DateUtils.dateToString2(new Date());
  //     return this.personalRepository.save({ ...personal, ...updateData });
  //   }


  async update(id: number, updatePersonalDto: UpdatePersonalDto): Promise<PersonalInfoEntity> {
    const personal = await this.personalRepository.findOne({ where: { id } });
    
    // if (!personal) {
    //   throw new Error('บ่พบข้อมูลจร้า ไอมั่ว ไม่รุเรื่อง!');
    // }
    
    Object.assign(personal, updatePersonalDto);
    personal.updatedAt = DateUtils.dateToString2(new Date()); 
    
    return this.personalRepository.save(personal);
  }
}
