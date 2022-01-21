import {MigrationInterface, QueryRunner} from "typeorm";

import {Table } from "typeorm";
export class User1642578299397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "phoneNumber",
                    type: "int",
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()'
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
