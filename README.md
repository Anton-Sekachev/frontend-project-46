### Hexlet tests and linter status:
[![Actions Status](https://github.com/Anton-Sekachev/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Anton-Sekachev/frontend-project-46/actions)

[![linter](https://github.com/Anton-Sekachev/frontend-project-46/actions/workflows/linter.yml/badge.svg)](https://github.com/Anton-Sekachev/frontend-project-46/actions/workflows/linter.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/05fe2d1d3c6f3f3637e5/maintainability)](https://codeclimate.com/github/Anton-Sekachev/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/05fe2d1d3c6f3f3637e5/test_coverage)](https://codeclimate.com/github/Anton-Sekachev/frontend-project-46/test_coverage)

## This is a CLI utility tool capable of finding difference between two files.
#### Requirements:
* Unix-like system
* Node.js v20+

#### Info:
* Supports .json, .yaml and .yml file formats
* Supports absolute and relative paths
* Can output difference in "stylish", "plain" or "json" formats

### Commands
#### Installation:
```
git clone https://github.com/Anton-Sekachev/frontend-project-46
cd frontend-project-46
make install
npm link
```
#### Instruction:
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
-V, --version         output the version number
-f, --format <type>   output format
-h, --help            display help for command
```

### Asciinema of gendiff for flat JSON files
[![asciicast](https://asciinema.org/a/goKuQXnnQ6oEAVG5yOvTCsDgw.svg)](https://asciinema.org/a/goKuQXnnQ6oEAVG5yOvTCsDgw)

### Asciinema of gendiff for flat YML files
[![asciicast](https://asciinema.org/a/qQ0r0IDnWmEh8xTqY1llx3kgf.svg)](https://asciinema.org/a/qQ0r0IDnWmEh8xTqY1llx3kgf)

### Asciinema of gendiff for nested JSON and YML files + test & test-coverage
[![asciicast](https://asciinema.org/a/sb2pzv0Tqoa6j90RvOgm9ExBR.svg)](https://asciinema.org/a/sb2pzv0Tqoa6j90RvOgm9ExBR)

### Asciinema of gendiff any format for nested JSON files
[![asciicast](https://asciinema.org/a/8xeWfuvjCj2g5BBbeaitjpcn1.svg)](https://asciinema.org/a/8xeWfuvjCj2g5BBbeaitjpcn1)