import { Task } from "./model/task";
import { User } from "./model/user";

const schema = [Task.schema, User.schema]; // Combine all schema in an array

export { Task, User, schema }; // Export schema and individual classes for flexibility
