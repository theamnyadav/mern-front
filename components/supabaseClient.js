import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hsijwtooavgmpumiaeae.supabase.co";
const supabaseKey =
  
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaWp3dG9vYXZnbXB1bWlhZWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5MDQyNjksImV4cCI6MTk5MTQ4MDI2OX0.EgYaI8ZVo3Rm9b9FPcwSKU-UVwlTcU7E80GYaYCMEf8"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase