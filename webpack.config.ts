import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { config as commonConfig } from './build/webpack.common';

const config = (env: any) => {
  const addons = (addonsArg: any) => {
    const addonsArray = []
      .concat.apply([], [addonsArg])
      .filter(Boolean);

    return addonsArray.map((addonName: string) => require(`./build/addons/webpack.${addonName}.js`));
  };

  console.log(env);
  const envConfig = require(`./build/webpack.${env.env}.ts`);
  const mergedConfig = merge<webpack.Configuration>(commonConfig, envConfig.config, ...addons(env.addons));
  console.log(mergedConfig);

  return mergedConfig;
}

export default config;