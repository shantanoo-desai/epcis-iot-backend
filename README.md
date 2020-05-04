# EPCIS-IoT GraphQL Backend (Deprecated)

**Refer to [tiguitto](https://github.com/nimble-platform/tiguitto) / [TrackNTrace Landing Page](https://github.com/iotfablab/TrackNTrace) for usage of `Telegraf` to parse EPCIS and IOT Information into InfluxDB**

* Typescript based Apollo-Server GraphQL Backend for __EPCIS-IoT__.
* CRUD App with GraphQL and MongoDB for Site Creation.
* Developed using [Derek Fong's Post for FreeCodeCamp on Medium.com](https://medium.com/free-code-camp/build-an-apollo-graphql-server-with-typescript-and-webpack-hot-module-replacement-hmr-3c339d05184f)


## Development and Deployment

### Windows 10
`package.json` has `%NODE_ENV%` as the Node Environment Variable in it. In order to run it with Windows Command Prompt (`cmd`) do the following:

Compiling with `webpack`:

* __Development__:

        set NODE_ENV=development&&npm run build

* __Production__:

        set NODE_ENV=production&&npm run build

Setup environment variables in a `.env` file in the root folder & launch the code using:

    npm run build:env

### Linux/Mac-OS
Change the `%NODE_ENV%` to `$NODE_ENV` in the `package.json` file and do the following:

Compiling with `webpack`:

* __Development__:

        NODE_ENV=development npm run build

* __Production__:

        NODE_ENV=production npm run build

Setup environment variables in a `.env` file in the root folder & launch the code using:

    npm run build:env


## Related Repositories

* [`ng-epcis-iot`](https://github.com/shantanoo-desai/ng-epcis-iot): Frontend for EPCIS-IoT GraphQL Backend
* [`EPCIS-IoT-Arduino`](https://github.com/iotfablab/EPCIS-IoT-Arduino): Arduino Library to program __ESP-32 with BME280__ to send sensor data in InfluxDB's Line Protocol over
  WLAN to an MQTT Broker