// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/find_in_page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: StopFindAction
blink.mojom.StopFindAction = {
  kStopFindActionClearSelection: 0,
  kStopFindActionKeepSelection: 1,
  kStopFindActionActivateSelection: 2,
};
blink.mojom.StopFindActionSpec = { $: mojo.internal.Enum() };

// Enum: FindMatchUpdateType
blink.mojom.FindMatchUpdateType = {
  kFinalUpdate: 0,
  kMoreUpdatesComing: 1,
};
blink.mojom.FindMatchUpdateTypeSpec = { $: mojo.internal.Enum() };

// Struct: FindOptions
blink.mojom.FindOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindOptions',
      packedSize: 16,
      fields: [
        { name: 'forward', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'match_case', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_session', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'find_match', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'run_synchronously_for_testing', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: FindInPage
blink.mojom.FindInPage = {};

blink.mojom.FindInPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FindInPageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FindInPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FindInPagePendingReceiver,
      handle);
    this.$ = new blink.mojom.FindInPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FindInPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  find(request_id, search_text, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FindInPage_Find_ParamsSpec,
      null,
      [request_id, search_text, options]);
  }

  stopFinding(action) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FindInPage_StopFinding_ParamsSpec,
      null,
      [action]);
  }

  clearActiveFindMatch() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec,
      null,
      []);
  }

  setClient(client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FindInPage_SetClient_ParamsSpec,
      null,
      [client]);
  }

  getNearestFindResult(point) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec,
      blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec,
      [point]);
  }

  activateNearestFindResult(request_id, point) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec,
      null,
      [request_id, point]);
  }

  findMatchRects(current_version) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FindInPage_FindMatchRects_ParamsSpec,
      blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec,
      [current_version]);
  }

};

blink.mojom.FindInPage.getRemote = function() {
  let remote = new blink.mojom.FindInPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FindInPage',
    'context');
  return remote.$;
};

// ParamsSpec for Find
blink.mojom.FindInPage_Find_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.Find_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'search_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FindOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for StopFinding
blink.mojom.FindInPage_StopFinding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.StopFinding_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StopFindActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearActiveFindMatch
blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.ClearActiveFindMatch_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetClient
blink.mojom.FindInPage_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNearestFindResult
blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.GetNearestFindResult_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'distance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ActivateNearestFindResult
blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.ActivateNearestFindResult_Params',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FindMatchRects
blink.mojom.FindInPage_FindMatchRects_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPage.FindMatchRects_Params',
      packedSize: 16,
      fields: [
        { name: 'current_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'rects', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectFSpec, false), nullable: false, minVersion: 0 },
        { name: 'active_match_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.FindInPagePtr = blink.mojom.FindInPageRemote;
blink.mojom.FindInPageRequest = blink.mojom.FindInPagePendingReceiver;


// Interface: FindInPageClient
blink.mojom.FindInPageClient = {};

blink.mojom.FindInPageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FindInPageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FindInPageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FindInPageClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.FindInPageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FindInPageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNumberOfMatches(request_id, number_of_matches, update_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec,
      null,
      [request_id, number_of_matches, update_type]);
  }

  setActiveMatch(request_id, active_match_rect, active_match_ordinal, update_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec,
      null,
      [request_id, active_match_rect, active_match_ordinal, update_type]);
  }

};

blink.mojom.FindInPageClient.getRemote = function() {
  let remote = new blink.mojom.FindInPageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FindInPageClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetNumberOfMatches
blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPageClient.SetNumberOfMatches_Params',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'number_of_matches', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'update_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FindMatchUpdateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetActiveMatch
blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FindInPageClient.SetActiveMatch_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'active_match_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'active_match_ordinal', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'update_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FindMatchUpdateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.FindInPageClientPtr = blink.mojom.FindInPageClientRemote;
blink.mojom.FindInPageClientRequest = blink.mojom.FindInPageClientPendingReceiver;

