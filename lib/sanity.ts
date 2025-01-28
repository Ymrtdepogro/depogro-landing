import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "projectID",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-03-15",
  token:
    "skhVvbaTApWYWpERa0Z9SIO3ha46HLv8bS8At1fCpgGFKxKd8F08FCwrsQWTVags1nQwCdQfJuHa6U4ypzCi6XIw31mY3HXrIBwREbWPlunoIIb2gIHwfETbnsX6Pie1R9bWMUsv0ateuJEOwLnYXKxFuQvuDCAJUmz2r8Io5PdKht7f9yhQ", // Required for writing data
});

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const submitContact = async (data: ContactFormData) => {
  try {
    const result = await client.create({
      _type: "contact",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
      createdAt: new Date().toISOString(),
      status: "new",
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Error submitting contact:", error);
    return { success: false, error };
  }
};
