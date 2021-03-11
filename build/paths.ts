import { resolve } from 'path';

export const paths = {
  outputPath: resolve(__dirname, '../Content', 'bundle'),
  publicPath: resolve(__dirname, '../', 'Content'),
  assetsPath: resolve(__dirname, '../', 'Assets'),
  sourcePath: resolve(__dirname, '../', 'Scripts'),
  viewPath: resolve(__dirname, '../', 'Views'),
  cachePath: resolve(__dirname, './', 'cache'),
  projectRoot: resolve(__dirname, '../'),
};