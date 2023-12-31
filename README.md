# KubeBrew
<div align="center">
<img src="./logo.png" width="200px">
</div>
<div align="center">

![GitHub](https://img.shields.io/github/license/sindhuinti/kubebrew) 
[![Version](https://img.shields.io/npm/v/kubebrew.svg)](https://npmjs.org/package/kubebrew)
[![Test 🧪](https://github.com/Sindhuinti/KubeBrew/actions/workflows/test.yml/badge.svg)](https://github.com/Sindhuinti/KubeBrew/actions/workflows/test.yml)
[![npm Package](https://github.com/Sindhuinti/KubeBrew/actions/workflows/publish.yml/badge.svg)](https://github.com/Sindhuinti/KubeBrew/actions/workflows/publish.yml)


</div>
KubeBrew is a command line tool that allows you to create and manage your DevOps configuration files. It's easy to create Dockerfiles and Kubernetes configuration files without any extra effort. 

To install the KubeBrew CLI, use the command `npm i -g kubebrew`. It will automatically installed in your system.

Once installed, you can use the KubeBrew CLI command.

> **Note** If you are getting an error like `command not found: kubebrew`, then you need to install latest node version.

## Features
- Easy to create config files.
- Supported languges for Dockerfile are Go, Java, node, Python
- Kubernetes supported config files like Pod, Deployment, Service. 
- npm package
- Options based CLI tool.
- No need to remember flags and arguments.
- More comming soon..

## Get started 

- Install [nodejs](https://nodejs.org/en) on your system.
- Install latest version of `npm` by the command `npm i -g npm`.
- Install [KubeBrew](https://www.npmjs.com/package/kubebrew) by using the command `npm i -g kubebrew`.

## Usage 
```bash
kubebrew
? Please select the DevOps platform (Use arrow keys)
> Docker
  Kubernetes
  Exit
```
### Select platform
```bash
kubebrew
? Please select the DevOps platform Docker
? Please select the language (Use arrow keys)
> Go
  Java
  Node
  Python
  Exit
```
Eg `GO` option will create a `Dockerfile` for golang

```bash
kubebrew
? Please select the DevOps platform Kubernetes
? Please select the configuartion file type (Use arrow keys)
> Pod
  Deployment
  Service
  Exit
```
Eg `Pod` option will create `Pod.yml` configuartion file

## 📜 License
This project is licensed under the Apache-2.0 license - see the [LICENSE](https://github.com/Sindhuinti/kubebrew/blob/main/LICENSE) file for details.

## 🛡 Security

If you discover a security vulnerability within this project, please check the [SECURITY](SECURITY.md) for more information.

## Support

Don't forget to leave a star ⭐️.