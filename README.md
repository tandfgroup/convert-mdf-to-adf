# Action Markdown To Atlassian Document Format

This action is using [md-to-adf](https://github.com/b-yond-infinite-network/md-to-adf)


# Usage

```
name: "Convert md to ADF"
on:
  pull_request:
  push:
    branches:
      - master
      - "releases/*"

jobs:
  test:
    name: converting md-to-adf
    runs-on: ubuntu-latest
    steps:
      - uses: tandfgroup/convert-md-to-adf@1.0.0
        id: convert
        with:
          md-text: "# DiscoveryClientWebsites"
      - run: |
          echo "app=${{ steps.convert.outputs.adf-output}}"
```


# License

This project is released under the MIT License
