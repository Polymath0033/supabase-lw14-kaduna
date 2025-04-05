import { redirect } from "react-router-dom";
import { supabase } from "./libs/supabase";
export const AuthLoader = async () => {
    const user = await supabase.auth.getUser();
    if (!user) {
        return redirect("/login");
    }
 }