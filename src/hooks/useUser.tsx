import { supabase } from "../libs/supabase";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setUser(data.user);
      setLoading(false);
    };
    fetchUser();
  }, []);
  return { user, loading, error };
};
