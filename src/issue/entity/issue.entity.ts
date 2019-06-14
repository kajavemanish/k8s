import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Issue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    Subject: string;

    @Column()
    description: string;

    @Column()
    createdBy: string;

    @Column()
    createdById: string;

    @Column()
    createdOn: string;

    @Column()
    status: string;

    @Column()
    comment: string;

    @Column()
    total: number;

}