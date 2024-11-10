import { Table, Column, Model, DataType, ForeignKey, AllowNull,  BelongsTo, HasMany } from "sequelize-typescript";
import User from "./User.models";
import Orders from "./Orders.models";


@Table({
    tableName: 'cliente',
    timestamps: false,
})
class Cliente extends Model {
    @AllowNull(false)

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    userId!: number;


    @Column({
        type: DataType.BIGINT,
    })
    cuit!: number;


    @Column({
        type: DataType.STRING(20),
    })
    razonSocial!: string;

    @Column({
        type: DataType.STRING(20),
    })
    provincia!: string;

    @Column({
        type: DataType.STRING(20),
    })
    localidad!: string;


    @HasMany(() => Orders) 
    orders!: Orders[];
    
    @BelongsTo(() => User)
    user!: User;
}

export default Cliente;