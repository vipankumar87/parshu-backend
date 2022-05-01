import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    mobile: string;

    @Column()
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async hashPassword() {
        // this.password = await bcrypt.hash(this.password, 8);
        this.password = this.password;
    }

    async validatePassword(password: string): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            resolve(this.password == password);
        });
        // return bcrypt.compare(password, this.password);
    }
}
