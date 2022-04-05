# Hello world javascript action

This action takes inputs and produces results as log in runner

## Inputs

## `GITHUB_TOKEN`
## `USERNAME`
## `OPERATION`

OPERATION CAN ONLY BE query_pr or query_issue


## Example usage

uses: demotcsorg/gh_graphql_action@v1.11
with:
  GITHUB_TOKEN: ${{ secrets.GRAPHTOKEN }}
  USERNAME: saurabhrai19
  OPERATION: query_pr
