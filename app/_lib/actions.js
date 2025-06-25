"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function createPost(formData) {
  const session = await auth();
  if (!session || !session.user.isAuthoried) return;

  const newPost = {
    postTitle: formData.get("postTitle").slice(0, 50),
    postDescription: formData.get("postDescription").slice(0, 1000),
    postCreatedBy: formData.get("postCreatedBy"),
  };

  const { data, error } = await supabase
    .from("posts")
    .insert([newPost])
    .select();

  if (error) console.error(error.message);

  revalidatePath("/application/posts");
}

export async function deletePost(postData) {
  const session = await auth();
  if (!session || !session.user.isAuthoried) return;

  const { id, postCreatedBy } = postData;

  if (Number(postCreatedBy) !== session.user.userId) return;

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) console.error(error.message);

  revalidatePath("/application/posts");
}

export async function editPost(formData) {
  const session = await auth();
  if (!session || !session.user.isAuthoried) return;

  const editedPost = {
    postTitle: formData.get("postTitle").slice(0, 50),
    postDescription: formData.get("postDescription").slice(0, 1000),
  };

  if (session.user.userId !== Number(formData.get("postCreatedBy"))) return;

  const { error } = await supabase
    .from("posts")
    .update(editedPost)
    .eq("id", formData.get("id"))
    .select();

  if (error) console.error(error.message);

  revalidatePath("/application/posts");
}

export async function createCalendarEvent(formData) {
  const session = await auth();
  if (!session || !session.user.isAuthoried) return;

  const correctedData = {
    eventTime: `${formData.get("timeHours")}:${formData.get("timeMinutes")}`,
    eventDescription: formData.get("eventDescription"),
    eventCreatedBy: session.user.userId,
    eventDate: formData.get("eventDate"),
  };

  if (formData.get("eventDate") === "01/01/1970") return;

  const { error } = await supabase
    .from("calendarEvents")
    .insert([correctedData])
    .select();

  if (error) console.error(error.message);

  revalidatePath("/application/calendar");
}

export async function editCalendarEvent(formData) {
  const session = await auth();
  if (!session || !session.user.isAuthoried) return;

  const editedEvent = {
    eventTime: `${formData.get("timeHours")}:${formData.get("timeMinutes")}`,
    eventDescription: formData.get("eventDescription").slice(0, 1000),
  };

  if (session.user.userId !== Number(formData.get("eventCreatedBy"))) return;

  const { error } = await supabase
    .from("calendarEvents")
    .update(editedEvent)
    .eq("id", formData.get("id"))
    .select();

  if (error) console.error(error.message);

  revalidatePath("/application/calendar");
}

export async function deleteCalendarEvent(eventId) {
  const { error } = await supabase
    .from("calendarEvents")
    .delete()
    .eq("id", eventId);

  revalidatePath("/application/calendar");
}

export async function downloadBucketItem(fileName) {
  const { data, error } = await supabase.storage
    .from("files")
    .createSignedUrl(fileName, 3600, { download: fileName });

  if (error) console.error(error.message);

  return data.signedUrl;
}

export async function uploadBucketItem(formData) {
  if (formData.get("file").name === "undefined") return;

  const fileName = formData.get("file").name;

  const { error } = await supabase.storage
    .from("files")
    .upload(fileName, formData.get("file"));

  if (error) console.error(error);

  revalidatePath("/application/files");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/application/dashboard",
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
