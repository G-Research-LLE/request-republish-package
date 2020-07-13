# request-republish-package

GitHub action which uploads a package as a GitHub Artifact, then requests that a workflow in another repository republishes the package as a GitHub Package. The workflow in
the other repository is expected to use [G-Research-LLE/check-and-republish-package](https://github.com/G-Research-LLE/check-and-republish-package).

## Why?

This action (combined with [G-Research-LLE/check-and-republish-package](https://github.com/G-Research-LLE/check-and-republish-package) and some carefully crafted permissions)
can be used to ensure that all of the GitHub packages on a GitHub org have been built from protected branches. This is useful where the packages are to be relied upon in a
secure environment. For further details see SDR-816 in G-Research internal JIRA.

## Example usage

See [action.yml](action.yml).

```yaml
- uses: G-Research-LLE/request-republish-package@v1
  with:
    dest-owner: G-Research-Packages
    dest-repo: example-dotnet-core-classlib
    package-path: GR.Example.DotNetCoreClassLib/bin/Release/GR.Example.DotNetCoreClassLib.*.nupkg
    source-token: ${{secrets.SOURCE_TOKEN}}
    repository-dispatch-token: ${{secrets.REPOSITORY_DISPATCH_TOKEN}}
```

## License

TBC.
