export default {
  name: "experience",
  title: "experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "jobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "companyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "company",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "dateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "dateEnded",
      type: "date",
    },
    {
      name: "isCurrentWorkingHere",
      title: "isCurrentWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
