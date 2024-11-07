import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BeforeUpdate } from 'typeorm';
import { DateUtils } from '../utils/date-utils';

@Entity('personal_info')
export class PersonalInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  firstName: string;

  @Column({ type: 'varchar', nullable: true })
  lastName: string;

  @Column({ type: 'varchar', nullable: true })
  nickName: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', nullable: true })
  birthday: string;

  @Column({ type: 'varchar', nullable: true })
  PhoneNumber: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  createdAt: string;

  @Column({ type: 'varchar', nullable: true })
  updatedAt: string;

  @BeforeUpdate()
  updateUpdatedAt() {
    this.updatedAt = DateUtils.dateToString2(new Date());
  }

  @Column({ type: 'varchar', nullable: true })
  deletedAt: string;
}
