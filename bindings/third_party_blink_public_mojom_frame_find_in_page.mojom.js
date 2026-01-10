// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/find_in_page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.StopFindActionSpec = { $: mojo.internal.Enum() };
blink.mojom.FindMatchUpdateTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FindOptionsSpec = { $: {} };
blink.mojom.FindInPage = {};
blink.mojom.FindInPage.$interfaceName = 'blink.mojom.FindInPage';
blink.mojom.FindInPage_Find_ParamsSpec = { $: {} };
blink.mojom.FindInPage_StopFinding_ParamsSpec = { $: {} };
blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec = { $: {} };
blink.mojom.FindInPage_SetClient_ParamsSpec = { $: {} };
blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec = { $: {} };
blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec = { $: {} };
blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec = { $: {} };
blink.mojom.FindInPage_FindMatchRects_ParamsSpec = { $: {} };
blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec = { $: {} };
blink.mojom.FindInPageClient = {};
blink.mojom.FindInPageClient.$interfaceName = 'blink.mojom.FindInPageClient';
blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec = { $: {} };
blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec = { $: {} };

// Enum: StopFindAction
blink.mojom.StopFindAction = {
  kStopFindActionClearSelection: 0,
  kStopFindActionKeepSelection: 1,
  kStopFindActionActivateSelection: 2,
};

// Enum: FindMatchUpdateType
blink.mojom.FindMatchUpdateType = {
  kFinalUpdate: 0,
  kMoreUpdatesComing: 1,
};

// Struct: FindOptions
mojo.internal.Struct(
    blink.mojom.FindOptionsSpec, 'blink.mojom.FindOptions', [
      mojo.internal.StructField('forward', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('match_case', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('new_session', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('find_match', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('run_synchronously_for_testing', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FindInPage
mojo.internal.Struct(
    blink.mojom.FindInPage_Find_ParamsSpec, 'blink.mojom.FindInPage_Find_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('search_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, blink.mojom.FindOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_StopFinding_ParamsSpec, 'blink.mojom.FindInPage_StopFinding_Params', [
      mojo.internal.StructField('action', 0, 0, blink.mojom.StopFindActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_ClearActiveFindMatch_ParamsSpec, 'blink.mojom.FindInPage_ClearActiveFindMatch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_SetClient_ParamsSpec, 'blink.mojom.FindInPage_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FindInPageClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_GetNearestFindResult_ParamsSpec, 'blink.mojom.FindInPage_GetNearestFindResult_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_GetNearestFindResult_ResponseParamsSpec, 'blink.mojom.FindInPage_GetNearestFindResult_ResponseParams', [
      mojo.internal.StructField('distance', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_ActivateNearestFindResult_ParamsSpec, 'blink.mojom.FindInPage_ActivateNearestFindResult_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_FindMatchRects_ParamsSpec, 'blink.mojom.FindInPage_FindMatchRects_Params', [
      mojo.internal.StructField('current_version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FindInPage_FindMatchRects_ResponseParamsSpec, 'blink.mojom.FindInPage_FindMatchRects_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rects', 8, 0, mojo.internal.Array(gfx.mojom.RectFSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('active_match_rect', 16, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

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

blink.mojom.FindInPagePtr = blink.mojom.FindInPageRemote;
blink.mojom.FindInPageRequest = blink.mojom.FindInPagePendingReceiver;


// Interface: FindInPageClient
mojo.internal.Struct(
    blink.mojom.FindInPageClient_SetNumberOfMatches_ParamsSpec, 'blink.mojom.FindInPageClient_SetNumberOfMatches_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_matches', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('update_type', 8, 0, blink.mojom.FindMatchUpdateTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FindInPageClient_SetActiveMatch_ParamsSpec, 'blink.mojom.FindInPageClient_SetActiveMatch_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('active_match_rect', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('active_match_ordinal', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('update_type', 20, 0, blink.mojom.FindMatchUpdateTypeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

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

blink.mojom.FindInPageClientPtr = blink.mojom.FindInPageClientRemote;
blink.mojom.FindInPageClientRequest = blink.mojom.FindInPageClientPendingReceiver;

