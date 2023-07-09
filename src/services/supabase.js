import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hgqmwthzwrrcqishvpih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncW13dGh6d3JyY3Fpc2h2cGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MTk1NTgsImV4cCI6MjAwNDQ5NTU1OH0.td61cnrGIQ7W5NGjKbI-jKZQKQjmfn3dhh_Xr_NalfM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
