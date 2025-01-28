import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'projectID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-15',
  token: process.env.SANITY_API_TOKEN // Required for writing data
})

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

export const submitContact = async (data: ContactFormData) => {
  try {
    const result = await client.create({
      _type: 'contact',
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
      createdAt: new Date().toISOString(),
      status: 'new'
    })
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact:', error)
    return { success: false, error }
  }
}