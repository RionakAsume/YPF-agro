import { Table, Column, Model, DataType, ForeignKey, AllowNull, HasOne, HasMany } from "sequelize-typescript";
import Role from "./Role.models";
import Cliente from "./Cliente.models"
import Orders from "./Orders.models";

@Table({
    tableName: 'users',
    timestamps: false,
})
class User extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(),
    })
    full_name!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(),
    })
    surname!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    password!: string;

    @Column({
        type: DataType.TEXT,
    })
    address!: string;

    @Column({
        type: DataType.STRING(15),
    })
    phone!: string;

    @Column({
        type: DataType.INTEGER,
    })
    dni!: number;


    @Column({
        type: DataType.STRING,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    status!: boolean;


    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    roleId!: number;

    @HasOne(() => Cliente)
    cliente: Cliente;

    @HasOne(() => Orders)
  orders: Orders;
}

export default User;
