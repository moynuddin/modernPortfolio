export default {
  name: "skill",
  title: "skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "progress",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
