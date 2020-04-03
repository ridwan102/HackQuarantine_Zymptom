# Zymptoms Mobile Application

## Contents:

1. [Developer Setup](#Developer-Setup)
2. [Running Locally](#Running-Locally)

## Developer Setup

### Python & Node Virtual Environment

#### 1) Python Environment

```
$ python3 -m venv env
$ source env/bin/activate
$ pip install --upgrade pip setuptools wheel
```

#### 2) Node Environment

```
$ pip install nodeenv
$ nodeenv --python-virtualenv
$ source env/bin/activate
```

#### 3) NPM Setup

```
$ npm install .
```

#### 4) Yarn Setup

```
$ sudo apt remove cmdtest
$ sudo apt remove yarn
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
$ sudo yarn add expo
```

#### 5) Expo Setup

Install the Expo Client app on your mobile device [here](https://expo.io/tools)

```
$ sudo npm install expo-cli --global
```

## Running Locally

Make sure you are in the `/app/zymptoms/` folder before running the following command.

```
$ expo start
```