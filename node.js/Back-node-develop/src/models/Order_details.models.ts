import { Table, Column, Model, DataType, ForeignKey, AllowNull, BelongsTo } from "sequelize-typescript";
import Orders from "./Orders.models";
import Productos from "./Productos.models";



@Table({
    tableName: 'orders_details',
    timestamps: true,
})
class Orders_details extends Model {
    
    @ForeignKey(() => Orders)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    order_id!: number;

    @ForeignKey(() => Productos)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    product_id!: number;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    quantity!: number;

    @AllowNull(false)
    @Column({
        type: DataType.DOUBLE,
    })
    finalprice!: number;
    
    @BelongsTo(() => Productos)
    producto!: Productos;
}



export default Orders_details;