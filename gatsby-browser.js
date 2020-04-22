const ReactDOM = require("react-dom")
const { loadableReady } = require("@loadable/component")

exports.replaceHydrateFunction = () => (element, container, callback) =>
  loadableReady(() =>
    ReactDOM.createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element)
  )
