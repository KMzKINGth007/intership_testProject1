import { Controller, Get } from '@nestjs/common';
import DataInfo from 'src/data/data_info';

@Controller('information2')
export class Information2Controller {
    @Get()
    getinfo2() : DataInfo[] {
        return [
                {
                        id : 1,
                        name : "ไม่บอกกกกกก",
                        lastName : "ไปหาสืบเอาเองงงง",
                        age : 27
                }
        ]
    }
}
