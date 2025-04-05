import { supabase } from "../libs/supabase";
export const useUser = async () => {
    const user = await supabase.auth.getUser();
    if (!user) {
        return null;
    }
  return user.data.user;
};
