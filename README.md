# Trip Counselor

> Our Front-End Capstone (FEC) project replicates sections of the Trip Advisor website

![screenshot](https://github.com/motunui/gary-proxy/blob/master/2019-02-23%2017.03.58.gif)

## Related Projects

  - https://github.com/motunui/gary-service
  - https://github.com/motunui/grahn-service
  - https://github.com/motunui/sidebar-service
  - https://github.com/motunui/grahn-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To run proxy server

Open terminal and go to root directory of this project

Run `npm start` in production mode, or `npm run server-dev` in development mode.

In browser, visit 'localhost:3016/ID' where 'ID' is a number representating an ID for a mock event or destination on Trip Counselor. Ex. 'localhost:3016/55'

> To load all components, clone these repos and run their servers as well:

  - https://github.com/motunui/gary-service

  - https://github.com/motunui/grahn-service

  - https://github.com/motunui/sidebar-service

The proxy server at https://github.com/motunui/grahn-proxy is similar to this repo's proxy server. Use one or the other.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
