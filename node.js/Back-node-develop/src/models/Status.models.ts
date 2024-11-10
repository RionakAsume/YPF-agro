import { Table, Column, Model, DataType, ForeignKey, AllowNull, BelongsTo } from "sequelize-typescript";
import Shipment_status from "./Shipment_status.models";
import Orders from "./Orders.models";

@Table({
    tableName: 'status',
    timestamps: true,
})
class Status extends Model {
    @AllowNull(false)
    
    @ForeignKey(() => Orders)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    orders_id!: number;

    
    @ForeignKey(() => Shipment_status)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    shipment_status_id!: number;


    @Column({
        type: DataType.STRING(50),
    })
    observacion!: string;

    @BelongsTo(() => Shipment_status)
    shipment_status!: Shipment_status;
}

export default Status;