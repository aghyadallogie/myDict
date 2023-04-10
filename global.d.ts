declare namespace JSX {
    interface IntrinsicElements {
      // Define the missing HTML tag or component here
      // For example, if you are using a <my-component> tag
      // you can define it like this:
      "my-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }