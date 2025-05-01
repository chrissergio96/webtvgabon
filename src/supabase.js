import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co'; // ton URL ici
const supabaseKey = 'public-anon-key'; // ta clé ici

export const supabase = createClient(supabaseUrl, supabaseKey);
