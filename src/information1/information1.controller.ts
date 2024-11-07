import { Controller, Get } from '@nestjs/common';
import DataInfo from 'src/data/data_info';

@Controller('information1')
export class Information1Controller {

    @Get()
    getinfo1() : DataInfo[] {
        return [
            {
                id : 1,
                name : "Supavit",
                lastName : "Khamvichian",
                age : 27
            }
        ]
    }
}
