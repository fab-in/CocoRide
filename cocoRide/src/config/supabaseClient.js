import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ovagmwxsqilrpinunppk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92YWdtd3hzcWlscnBpbnVucHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MDQyMzAsImV4cCI6MjA3MTE4MDIzMH0.T9OVGTRoBeCh1q774qA70KckE7rZOqWowUNZq5EVfQc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase