import { Table, Column, Model, DataType, HasOne } from "sequelize-typescript";
import Status from "./Status.models";


@Table({
    tableName: 'shipment_status',
    timestamps: false,
})
class Shipment_status extends Model {
    
    @Column({
        type: DataType.STRING(50),
    })
    description!: string;
    
    @HasOne(() => Status)
  status: Status;
   
}



export default Shipment_status;