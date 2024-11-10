import { Table, Column, Model, DataType, ForeignKey, AllowNull, HasOne, HasMany , BelongsTo } from "sequelize-typescript";
import Cliente from "./Cliente.models";
import Router from "./Router.models";
import User from "./User.models";
import Status from "./Status.models";
import Orders_details from "./Order_details.models";



@Table({
    tableName: 'orders',
    timestamps: true,
})
class Orders extends Model {

    @ForeignKey(() => Cliente)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    cliente_id!: number;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    vendedor_id!: number;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    transpotista_id!: number;

    @ForeignKey(() => Router)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    router_id!: number;


    @Column({
        type: DataType.STRING(),
    })
    comments!: string;

    @HasOne(() => Status)
    status: Status;

    // @HasOne(() => Orders_details)
    // orders_details: Orders_details;

    @HasMany(() => Orders_details)
    orders_details!: Orders_details[];

    @BelongsTo(() => Cliente) 
    cliente!: Cliente;

    @BelongsTo(() => User, { as: 'vendedor', foreignKey: 'vendedor_id' }) 
    vendedor!: User;

    @BelongsTo(() => User, { as: 'transportista', foreignKey: 'transpotista_id' }) 
    transportista!: User;

    @BelongsTo(() => Router)
    router!: Router;
}



export default Orders;