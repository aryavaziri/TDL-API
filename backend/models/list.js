import { Schema, model, models } from "mongoose";

const listSchema = new Schema(
  {
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    collaborators: [{ type: Schema.Types.ObjectId, ref: "User" }],
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps }
);

const itemSchema = new Schema(
  {
    name: String,
    done: { type: Boolean, default: false },
    quantity: { type: Number, default: 1 },
    source: { type: String },
    priority: { type: String },
  },
  { timestamps }
);

export const List = models.List || model("List", listSchema);
export const Item = models.Item || model("Item", itemSchema);
