module.exports = {
  purge: [
    './Scripts/**/*.html',
    './Scripts/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        // '"Inter"', // MAKE SURE TO HAVE THE INTERNAL QUOTES FOR IE!
        'sarif',
        // 'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        // '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
