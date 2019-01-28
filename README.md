# mocks

A simply mocks server to set up a very quick json formatted mocks

defaultly listen on 4000

## Install and Launch

```shell
yarn install
yarn start 

# or

npm install
npm start
```

## Use

To mock datas just create a file under the mocks folder, and then request by the path;

see

```
mocks
  |__api
      |__a-resource.json
      |__b-resource.json
```
and then just make request to
```
localhost:4000/api/a-resouce
```
