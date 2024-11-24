// src/index.js
import { createClient } from '@supabase/supabase-js';

// Hier deine Supabase-URL und API-Schlüssel
const SUPABASE_URL = 'https://rvbsonrrxknabzjqlcze.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2YnNvbnJyeGtuYWJ6anFsY3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDE2MzQsImV4cCI6MjA0ODAxNzYzNH0.vrdxcbEQTUO668Ws2aimIfs1HhydpAz6qXwZcUvzwiw';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Funktion zum Verarbeiten des Logins
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Login mit Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username, // Hier wird der Benutzername als E-Mail verwendet
    password: password,
  });

  if (error) {
    alert('Fehler beim Einloggen: ' + error.message);
  } else {
    alert('Erfolgreich eingeloggt!');
    // Weiterleitung oder andere Aktionen nach erfolgreichem Login
  }
});
