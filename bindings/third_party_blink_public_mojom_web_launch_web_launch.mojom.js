// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_launch/web_launch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};

blink.mojom.WebLaunchService = {};
blink.mojom.WebLaunchService.$interfaceName = 'blink.mojom.WebLaunchService';
blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec = { $: {} };
blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec = { $: {} };

// Interface: WebLaunchService
mojo.internal.Struct(
    blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec, 'blink.mojom.WebLaunchService_SetLaunchFiles_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec, 'blink.mojom.WebLaunchService_EnqueueLaunchParams_Params', [
      mojo.internal.StructField('launch_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_navigation_started_in_browser', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_started', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.WebLaunchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebLaunchServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebLaunchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebLaunchServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebLaunchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebLaunchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLaunchFiles(files) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec,
      null,
      [files],
      false);
  }

  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec,
      null,
      [launch_url, time_navigation_started_in_browser, navigation_started],
      false);
  }

};

blink.mojom.WebLaunchService.getRemote = function() {
  let remote = new blink.mojom.WebLaunchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebLaunchService',
    'context');
  return remote.$;
};

blink.mojom.WebLaunchServicePtr = blink.mojom.WebLaunchServiceRemote;
blink.mojom.WebLaunchServiceRequest = blink.mojom.WebLaunchServicePendingReceiver;

