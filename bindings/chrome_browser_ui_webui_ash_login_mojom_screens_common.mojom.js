// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_common.mojom
// Module: ash.screens_common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_common = ash.screens_common || {};
ash.screens_common.mojom = ash.screens_common.mojom || {};
var mojo_base = mojo_base || {};

ash.screens_common.mojom.UserCreationFlowTypeSpec = { $: mojo.internal.Enum() };
ash.screens_common.mojom.GesturePagesSpec = { $: mojo.internal.Enum() };
ash.screens_common.mojom.AiIntroPageHandler = {};
ash.screens_common.mojom.AiIntroPageHandler.$interfaceName = 'ash.screens_common.mojom.AiIntroPageHandler';
ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.AiIntroPage = {};
ash.screens_common.mojom.AiIntroPage.$interfaceName = 'ash.screens_common.mojom.AiIntroPage';
ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec = { $: {} };
ash.screens_common.mojom.AppDownloadingPageHandler = {};
ash.screens_common.mojom.AppDownloadingPageHandler.$interfaceName = 'ash.screens_common.mojom.AppDownloadingPageHandler';
ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.DrivePinningPageHandler = {};
ash.screens_common.mojom.DrivePinningPageHandler.$interfaceName = 'ash.screens_common.mojom.DrivePinningPageHandler';
ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.DrivePinningPage = {};
ash.screens_common.mojom.DrivePinningPage.$interfaceName = 'ash.screens_common.mojom.DrivePinningPage';
ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec = { $: {} };
ash.screens_common.mojom.FjordStationSetupPageHandler = {};
ash.screens_common.mojom.FjordStationSetupPageHandler.$interfaceName = 'ash.screens_common.mojom.FjordStationSetupPageHandler';
ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec = { $: {} };
ash.screens_common.mojom.GaiaInfoPageHandler = {};
ash.screens_common.mojom.GaiaInfoPageHandler.$interfaceName = 'ash.screens_common.mojom.GaiaInfoPageHandler';
ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GaiaInfoPage = {};
ash.screens_common.mojom.GaiaInfoPage.$interfaceName = 'ash.screens_common.mojom.GaiaInfoPage';
ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec = { $: {} };
ash.screens_common.mojom.GestureNavigationPageHandler = {};
ash.screens_common.mojom.GestureNavigationPageHandler.$interfaceName = 'ash.screens_common.mojom.GestureNavigationPageHandler';
ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec = { $: {} };
ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GeminiIntroPageHandler = {};
ash.screens_common.mojom.GeminiIntroPageHandler.$interfaceName = 'ash.screens_common.mojom.GeminiIntroPageHandler';
ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec = { $: {} };
ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec = { $: {} };

// Enum: UserCreationFlowType
ash.screens_common.mojom.UserCreationFlowType = {
  kManual: 0,
  kQuickstart: 1,
};

// Enum: GesturePages
ash.screens_common.mojom.GesturePages = {
  kIntro: 0,
  kHome: 1,
  kOverview: 2,
  kBack: 3,
};

// Interface: AiIntroPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.AiIntroPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.AiIntroPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AiIntroPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.AiIntroPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.AiIntroPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.AiIntroPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNextClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.AiIntroPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.AiIntroPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AiIntroPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.AiIntroPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.AiIntroPageHandler_OnNextClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNextClicked();
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.AiIntroPageHandlerReceiver = ash.screens_common.mojom.AiIntroPageHandlerReceiver;

ash.screens_common.mojom.AiIntroPageHandlerPtr = ash.screens_common.mojom.AiIntroPageHandlerRemote;
ash.screens_common.mojom.AiIntroPageHandlerRequest = ash.screens_common.mojom.AiIntroPageHandlerPendingReceiver;


// Interface: AiIntroPage
mojo.internal.Struct(
    ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec, 'ash.screens_common.mojom.AiIntroPage_SetAutoTransition_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_common.mojom.AiIntroPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.AiIntroPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AiIntroPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.AiIntroPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.AiIntroPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.AiIntroPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAutoTransition(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec,
      null,
      [value],
      false);
  }

};

ash.screens_common.mojom.AiIntroPage.getRemote = function() {
  let remote = new ash.screens_common.mojom.AiIntroPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AiIntroPage',
    'context');
  return remote.$;
};

ash.screens_common.mojom.AiIntroPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.AiIntroPage_SetAutoTransition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAutoTransition(params.value);
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.AiIntroPageReceiver = ash.screens_common.mojom.AiIntroPageReceiver;

ash.screens_common.mojom.AiIntroPagePtr = ash.screens_common.mojom.AiIntroPageRemote;
ash.screens_common.mojom.AiIntroPageRequest = ash.screens_common.mojom.AiIntroPagePendingReceiver;


// Interface: AppDownloadingPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec, 'ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.AppDownloadingPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.AppDownloadingPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.AppDownloadingPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.AppDownloadingPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.AppDownloadingPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.AppDownloadingPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onContinueClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.AppDownloadingPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.AppDownloadingPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.AppDownloadingPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.AppDownloadingPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.AppDownloadingPageHandler_OnContinueClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onContinueClicked();
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.AppDownloadingPageHandlerReceiver = ash.screens_common.mojom.AppDownloadingPageHandlerReceiver;

ash.screens_common.mojom.AppDownloadingPageHandlerPtr = ash.screens_common.mojom.AppDownloadingPageHandlerRemote;
ash.screens_common.mojom.AppDownloadingPageHandlerRequest = ash.screens_common.mojom.AppDownloadingPageHandlerPendingReceiver;


// Interface: DrivePinningPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec, 'ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_Params', [
      mojo.internal.StructField('enable_drive_pinning', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_Params', [
      mojo.internal.StructField('enable_drive_pinning', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_common.mojom.DrivePinningPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.DrivePinningPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.DrivePinningPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.DrivePinningPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.DrivePinningPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.DrivePinningPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReturnClicked(enable_drive_pinning) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec,
      null,
      [enable_drive_pinning],
      false);
  }

  onNextClicked(enable_drive_pinning) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec,
      null,
      [enable_drive_pinning],
      false);
  }

};

ash.screens_common.mojom.DrivePinningPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.DrivePinningPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.DrivePinningPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.DrivePinningPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.DrivePinningPageHandler_OnReturnClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReturnClicked(params.enable_drive_pinning);
          break;
        }
        case 1: {
          const params = ash.screens_common.mojom.DrivePinningPageHandler_OnNextClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNextClicked(params.enable_drive_pinning);
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.DrivePinningPageHandlerReceiver = ash.screens_common.mojom.DrivePinningPageHandlerReceiver;

ash.screens_common.mojom.DrivePinningPageHandlerPtr = ash.screens_common.mojom.DrivePinningPageHandlerRemote;
ash.screens_common.mojom.DrivePinningPageHandlerRequest = ash.screens_common.mojom.DrivePinningPageHandlerPendingReceiver;


// Interface: DrivePinningPage
mojo.internal.Struct(
    ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec, 'ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_Params', [
      mojo.internal.StructField('required_space', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('free_space', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.screens_common.mojom.DrivePinningPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.DrivePinningPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.DrivePinningPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.DrivePinningPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.DrivePinningPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.DrivePinningPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setRequiredSpaceInfo(required_space, free_space) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec,
      null,
      [required_space, free_space],
      false);
  }

};

ash.screens_common.mojom.DrivePinningPage.getRemote = function() {
  let remote = new ash.screens_common.mojom.DrivePinningPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.DrivePinningPage',
    'context');
  return remote.$;
};

ash.screens_common.mojom.DrivePinningPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.DrivePinningPage_SetRequiredSpaceInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setRequiredSpaceInfo(params.required_space, params.free_space);
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.DrivePinningPageReceiver = ash.screens_common.mojom.DrivePinningPageReceiver;

ash.screens_common.mojom.DrivePinningPagePtr = ash.screens_common.mojom.DrivePinningPageRemote;
ash.screens_common.mojom.DrivePinningPageRequest = ash.screens_common.mojom.DrivePinningPagePendingReceiver;


// Interface: FjordStationSetupPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec, 'ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.FjordStationSetupPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.FjordStationSetupPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.FjordStationSetupPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.FjordStationSetupPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.FjordStationSetupPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.FjordStationSetupPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSetupComplete() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.FjordStationSetupPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.FjordStationSetupPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.FjordStationSetupPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.FjordStationSetupPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.FjordStationSetupPageHandler_OnSetupComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSetupComplete();
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.FjordStationSetupPageHandlerReceiver = ash.screens_common.mojom.FjordStationSetupPageHandlerReceiver;

ash.screens_common.mojom.FjordStationSetupPageHandlerPtr = ash.screens_common.mojom.FjordStationSetupPageHandlerRemote;
ash.screens_common.mojom.FjordStationSetupPageHandlerRequest = ash.screens_common.mojom.FjordStationSetupPageHandlerPendingReceiver;


// Interface: GaiaInfoPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec, 'ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_Params', [
      mojo.internal.StructField('user_flow', 0, 0, ash.screens_common.mojom.UserCreationFlowTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.screens_common.mojom.GaiaInfoPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GaiaInfoPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GaiaInfoPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GaiaInfoPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GaiaInfoPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.GaiaInfoPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBackClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onNextClicked(user_flow) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec,
      null,
      [user_flow],
      false);
  }

};

ash.screens_common.mojom.GaiaInfoPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.GaiaInfoPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GaiaInfoPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GaiaInfoPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.GaiaInfoPageHandler_OnBackClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBackClicked();
          break;
        }
        case 1: {
          const params = ash.screens_common.mojom.GaiaInfoPageHandler_OnNextClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNextClicked(params.user_flow);
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.GaiaInfoPageHandlerReceiver = ash.screens_common.mojom.GaiaInfoPageHandlerReceiver;

ash.screens_common.mojom.GaiaInfoPageHandlerPtr = ash.screens_common.mojom.GaiaInfoPageHandlerRemote;
ash.screens_common.mojom.GaiaInfoPageHandlerRequest = ash.screens_common.mojom.GaiaInfoPageHandlerPendingReceiver;


// Interface: GaiaInfoPage
mojo.internal.Struct(
    ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec, 'ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.GaiaInfoPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GaiaInfoPageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GaiaInfoPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GaiaInfoPagePendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GaiaInfoPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.GaiaInfoPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setQuickStartVisible() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.GaiaInfoPage.getRemote = function() {
  let remote = new ash.screens_common.mojom.GaiaInfoPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GaiaInfoPage',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GaiaInfoPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.GaiaInfoPage_SetQuickStartVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setQuickStartVisible();
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.GaiaInfoPageReceiver = ash.screens_common.mojom.GaiaInfoPageReceiver;

ash.screens_common.mojom.GaiaInfoPagePtr = ash.screens_common.mojom.GaiaInfoPageRemote;
ash.screens_common.mojom.GaiaInfoPageRequest = ash.screens_common.mojom.GaiaInfoPagePendingReceiver;


// Interface: GestureNavigationPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec, 'ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_Params', [
      mojo.internal.StructField('page', 0, 0, ash.screens_common.mojom.GesturePagesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec, 'ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec, 'ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.GestureNavigationPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GestureNavigationPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GestureNavigationPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GestureNavigationPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GestureNavigationPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.GestureNavigationPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPageChange(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec,
      null,
      [page],
      false);
  }

  onSkipClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onExitClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.GestureNavigationPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.GestureNavigationPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GestureNavigationPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GestureNavigationPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.GestureNavigationPageHandler_OnPageChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPageChange(params.page);
          break;
        }
        case 1: {
          const params = ash.screens_common.mojom.GestureNavigationPageHandler_OnSkipClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSkipClicked();
          break;
        }
        case 2: {
          const params = ash.screens_common.mojom.GestureNavigationPageHandler_OnExitClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onExitClicked();
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.GestureNavigationPageHandlerReceiver = ash.screens_common.mojom.GestureNavigationPageHandlerReceiver;

ash.screens_common.mojom.GestureNavigationPageHandlerPtr = ash.screens_common.mojom.GestureNavigationPageHandlerRemote;
ash.screens_common.mojom.GestureNavigationPageHandlerRequest = ash.screens_common.mojom.GestureNavigationPageHandlerPendingReceiver;


// Interface: GeminiIntroPageHandler
mojo.internal.Struct(
    ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec, 'ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec, 'ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_Params', [
    ],
    [[0, 8]]);

ash.screens_common.mojom.GeminiIntroPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_common.mojom.GeminiIntroPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_common.mojom.GeminiIntroPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_common.mojom.GeminiIntroPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_common.mojom.GeminiIntroPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_common.mojom.GeminiIntroPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBackClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onNextClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_common.mojom.GeminiIntroPageHandler.getRemote = function() {
  let remote = new ash.screens_common.mojom.GeminiIntroPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_common.mojom.GeminiIntroPageHandler',
    'context');
  return remote.$;
};

ash.screens_common.mojom.GeminiIntroPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.screens_common.mojom.GeminiIntroPageHandler_OnBackClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBackClicked();
          break;
        }
        case 1: {
          const params = ash.screens_common.mojom.GeminiIntroPageHandler_OnNextClicked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNextClicked();
          break;
        }
      }
    });
  }
};

ash.screens_common.mojom.GeminiIntroPageHandlerReceiver = ash.screens_common.mojom.GeminiIntroPageHandlerReceiver;

ash.screens_common.mojom.GeminiIntroPageHandlerPtr = ash.screens_common.mojom.GeminiIntroPageHandlerRemote;
ash.screens_common.mojom.GeminiIntroPageHandlerRequest = ash.screens_common.mojom.GeminiIntroPageHandlerPendingReceiver;

