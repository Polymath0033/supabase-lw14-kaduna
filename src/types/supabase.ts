export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: number;
          title: string;
          content: string;
          last_updated: string;
          user_id: string;
        };
        Insert: {
          title: string;
          content: string;
          user_id: string;
        };
        Update: {
          title?: string;
          content?: string;
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
  };
}
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];
export type Notes = Database["public"]["Tables"]["notes"]["Row"];
