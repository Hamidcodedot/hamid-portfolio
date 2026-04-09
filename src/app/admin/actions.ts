"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";

// ==========================================
// Career Journey Server Actions
// ==========================================
export async function addCareer(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    company: formData.get("company") as string,
    date: formData.get("date") as string,
    description: formData.get("description") as string,
    status: formData.get("status") as string,
  };

  const { error } = await supabaseAdmin.from("career_journey").insert([data]);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/career");
}

export async function updateCareer(formData: FormData) {
  const id = formData.get("id") as string;
  const data = {
    title: formData.get("title") as string,
    company: formData.get("company") as string,
    date: formData.get("date") as string,
    description: formData.get("description") as string,
    status: formData.get("status") as string,
  };

  const { error } = await supabaseAdmin.from("career_journey").update(data).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/career");
}

export async function deleteCareer(id: string) {
  const { error } = await supabaseAdmin.from("career_journey").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/career");
}

// ==========================================
// Learning Server Actions
// ==========================================
export async function addLearning(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    status: formData.get("status") as string,
    progress_percent: parseInt(formData.get("progress_percent") as string, 10) || 0,
    resource_url: formData.get("resource_url") as string,
    description: formData.get("description") as string,
  };

  const { error } = await supabaseAdmin.from("learning").insert([data]);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/learning");
}

export async function updateLearning(formData: FormData) {
  const id = formData.get("id") as string;
  const data = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    status: formData.get("status") as string,
    progress_percent: parseInt(formData.get("progress_percent") as string, 10) || 0,
    resource_url: formData.get("resource_url") as string,
    description: formData.get("description") as string,
  };

  const { error } = await supabaseAdmin.from("learning").update(data).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/learning");
}

export async function deleteLearning(id: string) {
  const { error } = await supabaseAdmin.from("learning").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/learning");
}

// ==========================================
// Resume / Files Actions
// ==========================================
export async function addFile(formData: FormData) {
  const data = {
    type: formData.get("type") as string,
    file_url: formData.get("file_url") as string,
    label: formData.get("label") as string,
  };

  const { error } = await supabaseAdmin.from("files").insert([data]);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/resume");
}

export async function updateFile(formData: FormData) {
  const id = formData.get("id") as string;
  const data = {
    type: formData.get("type") as string,
    file_url: formData.get("file_url") as string,
    label: formData.get("label") as string,
  };

  const { error } = await supabaseAdmin.from("files").update(data).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/resume");
}

export async function deleteFile(id: string) {
  const { error } = await supabaseAdmin.from("files").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/resume");
}

// ==========================================
// Projects Server Actions
// ==========================================
export async function addProject(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    image_url: formData.get("image_url") as string,
    demo_url: formData.get("demo_url") as string,
    repo_url: formData.get("repo_url") as string,
    tech_stack: (formData.get("tech_stack") as string).split(",").map(i => i.trim()),
    review_text: formData.get("review_text") as string,
    review_author: formData.get("review_author") as string,
  };

  const { error } = await supabaseAdmin.from("projects").insert([data]);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function updateProject(formData: FormData) {
  const id = formData.get("id") as string;
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    image_url: formData.get("image_url") as string,
    demo_url: formData.get("demo_url") as string,
    repo_url: formData.get("repo_url") as string,
    tech_stack: (formData.get("tech_stack") as string).split(",").map(i => i.trim()),
    review_text: formData.get("review_text") as string,
    review_author: formData.get("review_author") as string,
  };

  const { error } = await supabaseAdmin.from("projects").update(data).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
  const { error } = await supabaseAdmin.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/projects");
}

// ==========================================
// About Server Actions
// ==========================================
export async function updateAbout(formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "Hamid",
    bio: formData.get("bio") as string,
    location: formData.get("location") as string,
    focus: formData.get("focus") as string,
    photo_url: formData.get("photo_url") as string,
  };

  const { data: existing } = await supabaseAdmin.from("about").select("id").limit(1);

  if (existing && existing.length > 0) {
    const { error } = await supabaseAdmin.from("about").update(data).eq("id", existing[0].id);
    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabaseAdmin.from("about").insert([data]);
    if (error) throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/admin/about");
}

// ==========================================
// Contacts Server Actions
// ==========================================
export async function deleteContact(id: string) {
  const { error } = await supabaseAdmin.from("contacts").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/contacts");
}
