export default {
  name: "social",
  title: "social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title for social media",
      type: "string",
    },
    {
      name: "url",
      title: "url",
      type: "url",
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
