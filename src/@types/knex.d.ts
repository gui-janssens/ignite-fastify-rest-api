// eslint-disable-next-line
import { Knex } from 'knex';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  created_at: string;
  session_id?: string;
}

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: Transaction;
  }
}
