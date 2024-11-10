import {  Table,  Column,  Model,  DataType,  ForeignKey,  AllowNull,  HasOne,} from "sequelize-typescript";
import Orders from "./Orders.models";

@Table({
  tableName: "router",
  timestamps: true,
})
class Router extends Model {
  @Column({
    type: DataType.STRING(50),
  })
  origin!: string;

  @Column({
    type: DataType.STRING(50),
  })
  destination!: string;

  @Column({
    type: DataType.DOUBLE,
  })
  distance!: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status!: boolean;

  @HasOne(() => Orders)
  orders: Orders;

}

export default Router;
