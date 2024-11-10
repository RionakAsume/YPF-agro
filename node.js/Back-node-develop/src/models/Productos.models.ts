import { Table, Column, Model, DataType, ForeignKey, AllowNull, HasMany } from "sequelize-typescript";
import Rubro from "./Rubros.models";
import Orders_details from "./Order_details.models";


@Table({
    tableName: 'productos',
    timestamps: true,
})
class Productos extends Model {
    
    @Column({
        type: DataType.STRING(50),
    })
    name!: string;

    
    @Column({
        type: DataType.STRING(100),
    })
    description!: string;

    @ForeignKey(() => Rubro)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    rubrosId!: number;


    @Column({
        type: DataType.DOUBLE,
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
    })
    stock_quantity!: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    status!: boolean;

    @HasMany(() => Orders_details)
    orders_details: Orders_details;
}



export default Productos;