/** @format */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zyyfvemataocjnhttpid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5eWZ2ZW1hdGFvY2puaHR0cGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMjgzOTMsImV4cCI6MjA1MjYwNDM5M30.uyUA-W3Rxtlsw17ziethNrbaHvZ4IdmtynuwFs5tOFA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
