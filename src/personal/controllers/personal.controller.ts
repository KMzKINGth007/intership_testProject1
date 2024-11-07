import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import { PersonalService } from '../services/personal.service';
import { DateUtils } from '../utils/date-utils';
import { CreatePersonalDto } from '../dto/createPersonal';
import { UpdatePersonalDto } from '../dto/updatePersonal';
import { PersonalInfoEntity } from '../modules/personal.entity';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Post('insert')
  async create(@Body() CreatePersonalDto: CreatePersonalDto): Promise<any> {
    try {
      const personal = await this.personalService.create(CreatePersonalDto);
      return {
        message: 'เพิ่มสมาชิกสำเร็จ',
        data: personal,
      };
    } catch (error) {
      return {
        message: 'เกิดข้อผิดพลาด',
        error: error.message,
      };
    }
  }

  @Get('getAll')
  async findAll(): Promise<any> {
    try {
      const personal = await this.personalService.findAll();
      return {
        message: 'ดึงข้อมูลสมาชิกสำเร็จ',
        data: personal,
      };
    } catch (error) {
      return {
        message: 'เกิดข้อผิดพลาด',
        error: error.message,
      };
    }
  }

  @Get('getById')
  async getById(@Query('id') id: number): Promise<any> {
    try {
      const personal = await this.personalService.getById(id);
      if (!personal) {
        return {
          message: 'ไม่มีข้อมูล',
        };
      }
      return {
        message: 'ดึงข้อมูลสสำเร็จ',
        data: personal,
      };
    } catch (error) {
      return {
        message: 'เกิดข้อผิดพลาด',
        error: error.message,
      };
    }
  }

  @Delete('delete')
  async delete(@Query('id') id: number): Promise<any> {
    try {
      await this.personalService.delete(id);
      return {
        message: 'ลบข้อมูลสำเร็จ',
      };
    } catch (error) {
      return {
        message: 'เกิดข้อผิดพลาด',
        error: error.message,
      };
    }
  }

  // @Put('update')
  // async update(@Body() updatePersonalDto: UpdatePersonalDto): Promise<any> {
  //   try {
  //     const existingPersonal = await this.personalService.getById(
  //       updatePersonalDto.id,
  //     );
  //     if (!existingPersonal) {
  //       return {
  //         message: 'ข้อมูลไม่พบ',
  //       };
  //     }

  //     const updatedPersonal = await this.personalService.update(
  //       updatePersonalDto.id,
  //       updatePersonalDto,
  //     );

  //     return {
  //       message: 'แก้ไขข้อมูลสำเร็จ',
  //       data: {
  //         beforeUpdate: existingPersonal,
  //         afterUpdate: updatedPersonal,
  //       },
  //     };
  //   } catch (error) {
  //     return {
  //       message: 'เกิดข้อผิดพลาด',
  //       error: error.message,
  //     };
  //   }
  // }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updatePersonalDto: UpdatePersonalDto,
  ): Promise<any> {
    try {
      const personal = await this.personalService.update(id, updatePersonalDto);
      return {
        message: 'แก้ไขข้อมูลสำเร็จจร่า',
        data: personal,
      };
    } catch (error) {
      return {
        message: 'เกิดข้อผิดพลาด',
        error: error.message,
      };
    }
  }

}
