// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/personalization_app/search/search.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};


// Enum: SearchConceptId
ash.personalization_app.mojom.SearchConceptId = {
  kPersonalization: 0,
  kChangeWallpaper: 1,
  kTimeOfDayWallpaper: 2,
  kChangeDeviceAccountImage: 3,
  kAmbientMode: 4,
  kAmbientModeChooseSource: 5,
  kAmbientModeTurnOff: 6,
  kAmbientModeGooglePhotos: 7,
  kAmbientModeArtGallery: 8,
  kAmbientModeTurnOn: 9,
  kAmbientModeTimeOfDay: 10,
  kDarkMode: 11,
  kDarkModeSchedule: 12,
  kDarkModeTurnOff: 13,
  kDarkModeTurnOn: 14,
  kDynamicColor: 15,
  kKeyboardBacklight: 16,
};

// Interface: SearchResultsObserver
ash.personalization_app.mojom.SearchResultsObserver = {};

ash.personalization_app.mojom.SearchResultsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SearchResultsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SearchResultsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SearchResultsObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SearchResultsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SearchResultsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultsChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

ash.personalization_app.mojom.SearchResultsObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SearchResultsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SearchResultsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSearchResultsChanged
ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SearchResultsObserver.OnSearchResultsChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.mojom.SearchResultsObserverPtr = ash.personalization_app.mojom.SearchResultsObserverRemote;
ash.personalization_app.mojom.SearchResultsObserverRequest = ash.personalization_app.mojom.SearchResultsObserverPendingReceiver;


// Interface: SearchHandler
ash.personalization_app.mojom.SearchHandler = {};

ash.personalization_app.mojom.SearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SearchHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SearchHandlerPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SearchHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query, max_num_results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec,
      ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec,
      ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results],
      undefined,
      undefined
    );
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

};

ash.personalization_app.mojom.SearchHandler.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SearchHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Search
ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SearchHandler.Search_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_num_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SearchHandler.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SearchHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.mojom.SearchHandlerPtr = ash.personalization_app.mojom.SearchHandlerRemote;
ash.personalization_app.mojom.SearchHandlerRequest = ash.personalization_app.mojom.SearchHandlerPendingReceiver;

