import { Schema, model } from 'mongoose';
import { IPackage } from '../interfaces/package.interface';

// Define the schema for the Package model
const packageSchema = new Schema<IPackage>(
  {
    packageName: {
      type: String,
      required: true,
    },
    packageDetails: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Package = model<IPackage>('Package', packageSchema);
