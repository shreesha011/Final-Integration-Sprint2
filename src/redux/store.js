import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import { ReadingReducer } from "./ReadingReducer";
import { BillReducer } from "./BillReducer";
import { PaymentsReducer } from "./PaymentsReducer";
import { UserReducer } from "./UserReducer";
import { CustomerReducer } from "./CustomerReducer";
import { ConnectionReducer } from "./ConnectionReducer";

const rootReducer = combineReducers({
  reading: ReadingReducer,
  bill: BillReducer,
  payments: PaymentsReducer,
  user: UserReducer,
  customer: CustomerReducer,
  connection: ConnectionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
