const createServerScript = () => (`
  <script src="assets/bundle.js"></script>
`);

const createClientScript = (initialState) => (`
  <script>
    window.__STATE__ = ${JSON.stringify(initialState)}
  </script>
  <script src="assets/client.js"></script>
`);

const chooseScripts = (content, initialState) => {
  if (content) {
    return createClientScript(initialState);
  }

  return createServerScript();
};

const generateHtmlTemplate = (title, content, scripts) => {
  return (`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <link rel="stylesheet" href="assets/style.css">
    </head>

    <body>
      <div class="content">
        <div id="app" class="wrap-inner">
          ${content}
        </div>
      </div>

      ${scripts}
    </body>
  `);
};

/**
 * HTML skeleton provider.
 */
export const createPage = ({ title, content = "", initialState = {} }) => {
  const scripts = chooseScripts(content, initialState);
  const page = generateHtmlTemplate(title, content, scripts);
  return page;
};
