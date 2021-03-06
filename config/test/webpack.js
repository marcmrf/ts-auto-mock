const transformer = require('../../dist/transformer');
const path = require('path');
const DetermineCacheBetweenTestsFromDebugEnvironment = require('./../utils/cache');
const DetermineFeaturesFromEnvironment = require('./../utils/features');

module.exports = function () {
    return {
        mode: "development",
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                ['ts-auto-mock']: path.join(__dirname, '../../dist'),
                ['ts-auto-mock/repository']: path.join(__dirname, '../../dist/repository'),
                ['ts-auto-mock/extension']: path.join(__dirname, '../../dist/extension'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    loader: 'eslint-loader'
                },
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    options: {
                        getCustomTransformers: (program) => ({
                            before: [transformer.default(program, {
                                debug: false,
                                cacheBetweenTests: DetermineCacheBetweenTestsFromDebugEnvironment(),
                                features: DetermineFeaturesFromEnvironment(),
                            })]
                        })
                    }
                }
            ]
        }
    }
};
