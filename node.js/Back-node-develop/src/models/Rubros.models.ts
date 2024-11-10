import {  Table,  Column,  Model,  DataType,  AllowNull,  HasMany,} from "sequelize-typescript";
import Productos from "./Productos.models";

@Table({
  tableName: "rubros",
  timestamps: false,
})
class Rubro extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
  })
  descripcion!: string;

  @HasMany(() => Productos)
  producto: Productos;
}

export default Rubro;
