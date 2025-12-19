import { Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ _id: false, versionKey: false })
export class BaseEntity {
  _id?: Types.ObjectId;
}