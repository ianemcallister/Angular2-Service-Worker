export function myUtil() {
  (<any>this.SYSTEM_CONFIG_DEV.paths)['idb'] =
    `${this.APP_BASE}node_modules/idb`;
}
