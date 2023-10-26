# Dyson AEM Edge Delivery Services demo
This is just a demonstration of how a site page can be build out using AEM Edge Delivery Services.

## Environments
- Preview: https://main--dyson--cpilsworth.hlx.page/
- Live: https://main--dyson--cpilsworth.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## TODO

- [x] Asset selector
- [ ] Sidekick Library
- [ ] Video component
- [ ] Streaming video component
- [ ] Footer
  - [ ] Language selector
- [x] Reasons to buy
- [x] Contact us
- [ ] Header
  - [ ] Color
  - [ ] Font-weight
- [ ] Teaser buttons
  - [ ] primary 
  - [ ] secondary
- [x] Remove default content in carousel section 
      https://discord.com/channels/1131492224371277874/1144495462255185971/1166654707834572841