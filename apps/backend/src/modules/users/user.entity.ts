import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ paranoid: true, underscored: true, modelName: 'user' })
export class User extends Model<User> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id!: number;

  @CreatedAt createdAt!: Date;

  @UpdatedAt updatedAt!: Date;

  @DeletedAt deletedAt!: Date;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
  })
  accessToken!: string;

  @Column({
    type: DataType.STRING,
  })
  refreshToken!: string;
}
