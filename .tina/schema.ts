import { defineSchema } from "@tinacms/cli";

const iconSchema = {
  type: "object",
  label: "Icon",
  name: "icon",
  fields: [
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        {
          label: "Primary",
          value: "primary",
        },
        {
          label: "Blue",
          value: "blue",
        },
        {
          label: "Teal",
          value: "teal",
        },
        {
          label: "Green",
          value: "green",
        },
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Pink",
          value: "pink",
        },
        {
          label: "Purple",
          value: "purple",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "Yellow",
          value: "yellow",
        },
      ],
    },
    {
      name: "style",
      label: "Style",
      type: "string",
      options: [
        {
          label: "Circle",
          value: "circle",
        },
        {
          label: "Float",
          value: "float",
        },
      ],
    },
    {
      type: "string",
      label: "Icon",
      name: "name",
      options: [
        {
          label: "Random",
          value: "",
        },
        {
          label: "Aperture",
          value: "aperture",
        },
        {
          label: "Code Block",
          value: "code",
        },
        {
          label: "Like",
          value: "like",
        },
        {
          label: "Map",
          value: "map",
        },
        {
          label: "Palette",
          value: "palette",
        },
        {
          label: "Pie Chart",
          value: "chart",
        },
        {
          label: "Pin",
          value: "pin",
        },
        {
          label: "Shield",
          value: "shield",
        },
        {
          label: "Setting Sliders",
          value: "settings",
        },
        {
          label: "Store",
          value: "store",
        },
        {
          label: "Tennis Ball",
          value: "ball",
        },
        {
          label: "Test Tube",
          value: "tube",
        },
        {
          label: "Trophy",
          value: "trophy",
        },
        {
          label: "User",
          value: "user",
        },
        {
          label: "Beer",
          value: "beer",
        },
        {
          label: "Chat",
          value: "chat",
        },
        {
          label: "Cloud",
          value: "cloud",
        },
        {
          label: "Coffee",
          value: "coffee",
        },
        {
          label: "World",
          value: "world",
        },
        {
          label: "Tina",
          value: "tina",
        },
      ],
    },
  ],
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

const featureBlockShema = {
  name: "features",
  label: "Features",
  ui: {
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

const contentBlockSchema = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "markdown",
      },
      label: "Body",
      name: "body",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

const testimonialBlockSchema = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
      color: "primary",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

const heroBlockSchema = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "markdown",
      },
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          collections: ["authors"],
        },
        {
          type: "image",
          name: "heroImg",
          label: "Hero Image",
        },
        {
          type: "string",
          label: "Excerpt",
          ui: {
            component: "textarea",
          },
          name: "excerpt",
        },
        {
          type: "string",
          label: "Body",
          ui: {
            component: "markdown",
          },
          name: "_body",
          isBody: true,
        },
      ],
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      fields: [
        {
          type: "object",
          label: "Header",
          name: "header",
          fields: [
            iconSchema,
            {
              type: "string",
              label: "Color",
              name: "color",
              options: [
                { label: "Default", value: "default" },
                { label: "Primary", value: "primary" },
              ],
            },
            {
              type: "object",
              label: "Nav Links",
              name: "nav",
              list: true,
              ui: {
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Footer",
          name: "footer",
          fields: [
            {
              type: "string",
              label: "Color",
              name: "color",
              options: [
                { label: "Default", value: "default" },
                { label: "Primary", value: "primary" },
              ],
            },
            {
              type: "object",
              label: "Social Links",
              name: "social",
              fields: [
                {
                  type: "string",
                  label: "Facebook",
                  name: "facebook",
                },
                {
                  type: "string",
                  label: "Twitter",
                  name: "twitter",
                },
                {
                  type: "string",
                  label: "Instagram",
                  name: "instagram",
                },
                {
                  type: "string",
                  label: "Github",
                  name: "github",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Theme",
          name: "theme",
          fields: [
            {
              type: "string",
              label: "Primary Color",
              name: "color",
              options: [
                {
                  label: "Blue",
                  value: "blue",
                },
                {
                  label: "Teal",
                  value: "teal",
                },
                {
                  label: "Green",
                  value: "green",
                },
                {
                  label: "Red",
                  value: "red",
                },
                {
                  label: "Pink",
                  value: "pink",
                },
                {
                  label: "Purple",
                  value: "purple",
                },
                {
                  label: "Orange",
                  value: "orange",
                },
                {
                  label: "Yellow",
                  value: "yellow",
                },
              ],
            },
            {
              type: "string",
              name: "font",
              label: "Font Family",
              options: [
                {
                  label: "System Sans",
                  value: "sans",
                },
                {
                  label: "Nunito",
                  value: "nunito",
                },
                {
                  label: "Lato",
                  value: "lato",
                },
              ],
            },
            {
              type: "string",
              name: "icon",
              label: "Icon Set",
              options: [
                {
                  label: "Boxicons",
                  value: "boxicon",
                },
                {
                  label: "Heroicons",
                  value: "heroicon",
                },
              ],
            },
            {
              type: "string",
              name: "darkMode",
              label: "Dark Mode",
              options: [
                {
                  label: "System",
                  value: "system",
                },
                {
                  label: "Light",
                  value: "light",
                },
                {
                  label: "Dark",
                  value: "dark",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Authors",
      name: "authors",
      path: "content/authors",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            heroBlockSchema,
            featureBlockShema,
            contentBlockSchema,
            testimonialBlockSchema,
          ],
        },
      ],
    },
  ],
});
