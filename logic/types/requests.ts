export type Requests = {
  request_id?: number;
  client_email: string;
  project_type_id: number;
  message: string | null;
  appointment: Date;
  status: string;
  client_id: number;
  created_at: Date;
  updated_at: Date;
};
