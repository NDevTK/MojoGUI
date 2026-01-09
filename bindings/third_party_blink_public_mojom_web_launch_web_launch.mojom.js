// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_launch/web_launch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebLaunchService
blink.mojom.WebLaunchServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebLaunchService';
  }

  setLaunchFiles(files) {
    // Method: SetLaunchFiles
    // Call: SetLaunchFiles(files)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  setLaunchFiles() {
    // Method: SetLaunchFiles
    // Call: SetLaunchFiles()
  }

  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    // Method: EnqueueLaunchParams
    // Call: EnqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started)
  }

};

blink.mojom.WebLaunchServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
