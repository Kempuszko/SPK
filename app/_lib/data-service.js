import { supabase } from "./supabase";

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) console.error(error);

  return data;
}

export async function getLatestPost() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  return data;
}

export async function getTodayEvents(today, tomorrow) {
  const { data, error } = await supabase
    .from("calendarEvents")
    .select("*")
    .in("eventDate", [today, tomorrow]);

  if (error) console.error(error);

  return data;
}

export async function getCalendarEvents() {
  const { data, error } = await supabase.from("calendarEvents").select("*");

  if (error) console.error(error);

  return data;
}

export async function getUserById(id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) console.error(error);

  return data;
}

export async function getUserByEmail(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getBucketItems() {
  const { data, error } = await supabase.storage.from("files").list();

  if (error) console.error(error.message);

  return data;
}
