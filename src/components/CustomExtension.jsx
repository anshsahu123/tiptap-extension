import { Mark } from "@tiptap/core";

const HighlightText = Mark.create({
  name: "highlight",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      class: {
        default: "bg-yellow-300", 
        parseHTML: (element) => element.getAttribute("class"),
        renderHTML: (attributes) => {
          return { class: attributes.class };
        },
      },
    };
  },

  addCommands() {
    return {
      highlight: () => ({ commands }) => {
        return commands.setMark("highlight", { class: "bg-yellow-300" });
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[class='bg-yellow-300']",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", { ...HTMLAttributes }];
  },
});

export default HighlightText;
