// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/telemetry_event_service.mojom
 // Module: crosapi.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};

mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryInputTouchButtonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryEventCategoryEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TelemetryEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryAudioJackEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryLidEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryUsbEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryExternalDisplayEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetrySdCardEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryPowerEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryStylusGarageEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryTouchPointInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryStylusTouchPointInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryStylusTouchEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryStylusConnectedEventInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver = {};
mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverSpec = { $ : {} };
mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver.$interfaceName = 'crosapi.mojom.TelemetryEventObserver';
mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryEventService = {};
mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceSpec = { $ : {} };
mojo.internal.bindings.crosapi.mojom.TelemetryEventService.$interfaceName = 'crosapi.mojom.TelemetryEventService';
mojo.internal.bindings.crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec = { $: {} };

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: DeviceType
mojo.internal.bindings.crosapi.mojom.DeviceType = {
  kUnmappedEnumField: 0,
  kHeadphone: 1,
  kMicrophone: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kClosed: 1,
  kOpened: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAcInserted: 1,
  kAcRemoved: 2,
  kOsSuspend: 3,
  kOsResume: 4,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kInserted: 1,
  kRemoved: 2,
};

// Enum: TelemetryInputTouchButton
mojo.internal.bindings.crosapi.mojom.TelemetryInputTouchButton = {
  kUnmappedEnumField: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
};

// Enum: State
mojo.internal.bindings.crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kPressed: 1,
  kReleased: 2,
};

// Enum: TelemetryEventCategoryEnum
mojo.internal.bindings.crosapi.mojom.TelemetryEventCategoryEnum = {
  kUnmappedEnumField: 0,
  kAudioJack: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Union: TelemetryEventInfo
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.TelemetryEventInfoSpec, 'crosapi.mojom.TelemetryEventInfo', {
      'arg_default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_audio_jack_event_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryAudioJackEventInfoSpec.$,
        'nullable': false,
      },
      'arg_lid_event_info': {
        'ordinal': 2,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryLidEventInfoSpec.$,
        'nullable': false,
      },
      'arg_usb_event_info': {
        'ordinal': 3,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryUsbEventInfoSpec.$,
        'nullable': false,
      },
      'arg_sd_card_event_info': {
        'ordinal': 4,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetrySdCardEventInfoSpec.$,
        'nullable': false,
      },
      'arg_power_event_info': {
        'ordinal': 5,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryPowerEventInfoSpec.$,
        'nullable': false,
      },
      'arg_keyboard_diagnostic_event_info': {
        'ordinal': 6,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryKeyboardDiagnosticEventInfoSpec.$,
        'nullable': false,
      },
      'arg_stylus_garage_event_info': {
        'ordinal': 7,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryStylusGarageEventInfoSpec.$,
        'nullable': false,
      },
      'arg_touchpad_button_event_info': {
        'ordinal': 8,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec.$,
        'nullable': false,
      },
      'arg_touchpad_touch_event_info': {
        'ordinal': 9,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec.$,
        'nullable': false,
      },
      'arg_touchpad_connected_event_info': {
        'ordinal': 10,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec.$,
        'nullable': false,
      },
      'arg_external_display_event_info': {
        'ordinal': 11,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryExternalDisplayEventInfoSpec.$,
        'nullable': false,
      },
      'arg_stylus_touch_event_info': {
        'ordinal': 12,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryStylusTouchEventInfoSpec.$,
        'nullable': false,
      },
      'arg_stylus_connected_event_info': {
        'ordinal': 13,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryStylusConnectedEventInfoSpec.$,
        'nullable': false,
      },
      'arg_touchscreen_touch_event_info': {
        'ordinal': 14,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec.$,
        'nullable': false,
      },
      'arg_touchscreen_connected_event_info': {
        'ordinal': 15,
        'type': mojo.internal.bindings.crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: TelemetryAudioJackEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryAudioJackEventInfoSpec, 'crosapi.mojom.TelemetryAudioJackEventInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryLidEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryLidEventInfoSpec, 'crosapi.mojom.TelemetryLidEventInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryUsbEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryUsbEventInfoSpec, 'crosapi.mojom.TelemetryUsbEventInfo', [
      mojo.internal.StructField('arg_vendor', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_categories', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnmappedEnumField', 24, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_vid', 48, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pid', 50, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: TelemetryExternalDisplayEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryExternalDisplayEventInfoSpec, 'crosapi.mojom.TelemetryExternalDisplayEventInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetrySdCardEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetrySdCardEventInfoSpec, 'crosapi.mojom.TelemetrySdCardEventInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryPowerEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryPowerEventInfoSpec, 'crosapi.mojom.TelemetryPowerEventInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TelemetryStylusGarageEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryStylusGarageEventInfoSpec, 'crosapi.mojom.TelemetryStylusGarageEventInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryTouchpadButtonEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec, 'crosapi.mojom.TelemetryTouchpadButtonEventInfo', [
      mojo.internal.StructField('arg_button', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryInputTouchButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnmappedEnumField', 8, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TelemetryTouchPointInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryTouchPointInfoSpec, 'crosapi.mojom.TelemetryTouchPointInfo', [
      mojo.internal.StructField('arg_pressure', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_touch_major', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_touch_minor', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tracking_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_x', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TelemetryTouchpadTouchEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec, 'crosapi.mojom.TelemetryTouchpadTouchEventInfo', [
      mojo.internal.StructField('arg_touch_points', 0, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.TelemetryTouchPointInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryTouchpadConnectedEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec, 'crosapi.mojom.TelemetryTouchpadConnectedEventInfo', [
      mojo.internal.StructField('arg_buttons', 0, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.TelemetryInputTouchButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_max_x', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_y', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_pressure', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryTouchscreenTouchEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec, 'crosapi.mojom.TelemetryTouchscreenTouchEventInfo', [
      mojo.internal.StructField('arg_touch_points', 0, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.TelemetryTouchPointInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryTouchscreenConnectedEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec, 'crosapi.mojom.TelemetryTouchscreenConnectedEventInfo', [
      mojo.internal.StructField('arg_max_x_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_x_$flag', originalFieldName: 'arg_max_x' }),
      mojo.internal.StructField('arg_max_y_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_y_$flag', originalFieldName: 'arg_max_y' }),
      mojo.internal.StructField('arg_max_pressure_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_pressure_$flag', originalFieldName: 'arg_max_pressure' }),
      mojo.internal.StructField('arg_max_x_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_x_$value', originalFieldName: 'arg_max_x' }),
      mojo.internal.StructField('arg_max_y_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_y_$value', originalFieldName: 'arg_max_y' }),
      mojo.internal.StructField('arg_max_pressure_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_pressure_$value', originalFieldName: 'arg_max_pressure' }),
    ],
    [[0, 24]]);

// Struct: TelemetryStylusTouchPointInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryStylusTouchPointInfoSpec, 'crosapi.mojom.TelemetryStylusTouchPointInfo', [
      mojo.internal.StructField('arg_x_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_x_$flag', originalFieldName: 'arg_x' }),
      mojo.internal.StructField('arg_y_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_y_$flag', originalFieldName: 'arg_y' }),
      mojo.internal.StructField('arg_pressure_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_pressure_$flag', originalFieldName: 'arg_pressure' }),
      mojo.internal.StructField('arg_x_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_x_$value', originalFieldName: 'arg_x' }),
      mojo.internal.StructField('arg_y_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_y_$value', originalFieldName: 'arg_y' }),
      mojo.internal.StructField('arg_pressure_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_pressure_$value', originalFieldName: 'arg_pressure' }),
    ],
    [[0, 24]]);

// Struct: TelemetryStylusTouchEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryStylusTouchEventInfoSpec, 'crosapi.mojom.TelemetryStylusTouchEventInfo', [
      mojo.internal.StructField('arg_touch_point', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryStylusTouchPointInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryStylusConnectedEventInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryStylusConnectedEventInfoSpec, 'crosapi.mojom.TelemetryStylusConnectedEventInfo', [
      mojo.internal.StructField('arg_max_x_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_x_$flag', originalFieldName: 'arg_max_x' }),
      mojo.internal.StructField('arg_max_y_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_y_$flag', originalFieldName: 'arg_max_y' }),
      mojo.internal.StructField('arg_max_pressure_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_max_pressure_$flag', originalFieldName: 'arg_max_pressure' }),
      mojo.internal.StructField('arg_max_x_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_x_$value', originalFieldName: 'arg_max_x' }),
      mojo.internal.StructField('arg_max_y_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_y_$value', originalFieldName: 'arg_max_y' }),
      mojo.internal.StructField('arg_max_pressure_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_max_pressure_$value', originalFieldName: 'arg_max_pressure' }),
    ],
    [[0, 24]]);

// Interface: TelemetryEventObserver
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec, 'crosapi.mojom.TelemetryEventObserver_OnEvent_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryEventInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEvent(arg_info) {
    return this.$.onEvent(arg_info);
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.TelemetryEventObserver', [
      { explicit: 0 },
    ]);
  }

  onEvent(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec,
      null,
      [arg_info],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryEventObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.TelemetryEventObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEvent');
          const result = this.impl.onEvent(params.arg_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverReceiver = mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverReceiver;

mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverPtr = mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRemote;
mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRequest = mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverPendingReceiver;


// Interface: TelemetryEventService
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec, 'crosapi.mojom.TelemetryEventService_AddEventObserver_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryEventCategoryEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.crosapi.mojom.TelemetryEventObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec, 'crosapi.mojom.TelemetryEventService_IsEventSupported_Params', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryEventCategoryEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec, 'crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.crosapi.mojom.TelemetryExtensionSupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.TelemetryEventServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryEventService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.TelemetryEventServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addEventObserver(arg_category, arg_observer) {
    return this.$.addEventObserver(arg_category, arg_observer);
  }
  isEventSupported(arg_category) {
    return this.$.isEventSupported(arg_category);
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.TelemetryEventService', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  addEventObserver(arg_category, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec,
      null,
      [arg_category, arg_observer],
      false);
  }

  isEventSupported(arg_category) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec,
      [arg_category],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.TelemetryEventService.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryEventService',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.TelemetryEventService', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddEventObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEventObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsEventSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEventSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addEventObserver');
          const result = this.impl.addEventObserver(params.arg_category, params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isEventSupported');
          const result = this.impl.isEventSupported(params.arg_category);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsEventSupported FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceReceiver = mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceReceiver;

mojo.internal.bindings.crosapi.mojom.TelemetryEventServicePtr = mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceRemote;
mojo.internal.bindings.crosapi.mojom.TelemetryEventServiceRequest = mojo.internal.bindings.crosapi.mojom.TelemetryEventServicePendingReceiver;

