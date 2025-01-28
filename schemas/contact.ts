import { Rule as ValidationRule } from "sanity";
export default {
  name: "contact",
  title: "Contact Submissions",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required().email(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "in-progress" },
          { title: "Completed", value: "completed" },
        ],
      },
      initialValue: "new",
    },
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "status",
      description: "message",
    },
  },
  orderings: [
    {
      title: "Created At",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],
};
