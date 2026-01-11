// Auto-generated MojoJS binding
 // Source: chromium_src/ash/public/mojom/accelerator_actions.mojom
 // Module: ash.mojom

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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.mojom = mojo.internal.bindings.ash.mojom || {};

mojo.internal.bindings.ash.mojom.AcceleratorActionSpec = { $: mojo.internal.Enum() };

// Enum: AcceleratorAction
mojo.internal.bindings.ash.mojom.AcceleratorAction = {
  kBrightnessDown: 0,
  kBrightnessUp: 1,
  kCycleBackwardMru: 2,
  kCycleForwardMru: 3,
  kCycleSameAppWindowsBackward: 4,
  kCycleSameAppWindowsForward: 5,
  kDesksActivateDeskLeft: 6,
  kDesksActivateDeskRight: 7,
  kDesksMoveActiveItemLeft: 8,
  kDesksMoveActiveItemRight: 9,
  kDesksNewDesk: 10,
  kDesksRemoveCurrentDesk: 11,
  kDesksActivate0: 12,
  kDesksActivate1: 13,
  kDesksActivate2: 14,
  kDesksActivate3: 15,
  kDesksActivate4: 16,
  kDesksActivate5: 17,
  kDesksActivate6: 18,
  kDesksActivate7: 19,
  kDesksToggleAssignToAllDesks: 20,
  kDisableCapsLock: 21,
  kEnableOrToggleDictation: 22,
  kExit: 23,
  kFocusCameraPreview: 24,
  kFocusNextPane: 25,
  kFocusPreviousPane: 26,
  kFocusShelf: 27,
  kFocusPip: 28,
  kKeyboardBacklightToggle: 29,
  kKeyboardBrightnessDown: 30,
  kKeyboardBrightnessUp: 31,
  kLaunchApp0: 32,
  kLaunchApp1: 33,
  kLaunchApp2: 34,
  kLaunchApp3: 35,
  kLaunchApp4: 36,
  kLaunchApp5: 37,
  kLaunchApp6: 38,
  kLaunchApp7: 39,
  kLaunchLastApp: 40,
  kLockPressed: 41,
  kLockReleased: 42,
  kLockScreen: 43,
  kMagnifierZoomIn: 44,
  kMagnifierZoomOut: 45,
  kMediaFastForward: 46,
  kMediaNextTrack: 47,
  kMediaPause: 48,
  kMediaPlay: 49,
  kMediaPlayPause: 50,
  kMediaPrevTrack: 51,
  kMediaRewind: 52,
  kMediaStop: 53,
  kMicrophoneMuteToggle: 54,
  kMoveActiveWindowBetweenDisplays: 55,
  kNewIncognitoWindow: 56,
  kNewTab: 57,
  kNewWindow: 58,
  kOpenCalculator: 59,
  kOpenCrosh: 60,
  kOpenDiagnostics: 61,
  kOpenFeedbackPage: 62,
  kOpenFileManager: 63,
  kOpenGetHelp: 64,
  kPasteClipboardHistoryPlainText: 65,
  kPowerPressed: 66,
  kPowerReleased: 67,
  kPrintUiHierarchies: 68,
  kPrivacyScreenToggle: 69,
  kRestoreTab: 70,
  kRotateScreen: 71,
  kRotateWindow: 72,
  kScaleUiDown: 73,
  kScaleUiReset: 74,
  kScaleUiUp: 75,
  kShowEmojiPicker: 76,
  kToggleImeMenuBubble: 77,
  kShowShortcutViewer: 78,
  kShowTaskManager: 79,
  kStartAssistant: 80,
  kStopScreenRecording: 81,
  kSuspend: 82,
  kSwapPrimaryDisplay: 83,
  kSwitchIme: 84,
  kSwitchToLastUsedIme: 85,
  kSwitchToNextIme: 86,
  kSwitchToNextUser: 87,
  kSwitchToPreviousUser: 88,
  kTakePartialScreenshot: 89,
  kTakeScreenshot: 90,
  kTakeWindowScreenshot: 91,
  kToggleAppList: 92,
  kToggleCalendar: 93,
  kToggleCapsLock: 94,
  kToggleClipboardHistory: 95,
  kToggleDockedMagnifier: 96,
  kToggleFloating: 97,
  kToggleFullscreen: 98,
  kToggleFullscreenMagnifier: 99,
  kToggleGameDashboard: 100,
  kToggleHighContrast: 101,
  kToggleMaximized: 102,
  kToggleMessageCenterBubble: 103,
  kToggleMirrorMode: 104,
  kToggleMultitaskMenu: 105,
  kToggleOverview: 106,
  kToggleProjectorMarker: 107,
  kToggleResizeLockMenu: 108,
  kToggleSnapGroup: 109,
  kToggleSnapGroupWindowsMinimizeAndRestore: 110,
  kToggleSpokenFeedback: 111,
  kToggleStylusTools: 112,
  kToggleSystemTrayBubble: 113,
  kToggleWifi: 114,
  kTouchHudClear: 115,
  kTouchHudModeChange: 116,
  kTouchFingerprintSensor1: 117,
  kTouchFingerprintSensor2: 118,
  kTouchFingerprintSensor3: 119,
  kUnpin: 120,
  kVolumeDown: 121,
  kVolumeMute: 122,
  kVolumeUp: 123,
  kWindowCycleSnapLeft: 124,
  kWindowCycleSnapRight: 125,
  kWindowMinimize: 126,
  kMinimizeTopWindowOnBack: 127,
  kVolumeMuteToggle: 128,
  kToggleQuickInsert: 129,
  kAccessibilityAction: 130,
  kEnableSelectToSpeak: 131,
  kTilingWindowResizeLeft: 132,
  kTilingWindowResizeRight: 133,
  kTilingWindowResizeUp: 134,
  kTilingWindowResizeDown: 135,
  kToggleMouseKeys: 136,
  kResizePipWindow: 137,
  kToggleGeminiApp: 138,
  kToggleDoNotDisturb: 139,
  kToggleCameraAllowed: 140,
  kStartSunfishSession: 141,
  kDebugClearUseKMeansPref: 9000,
  kDebugKeyboardBacklightToggle: 9001,
  kDebugMicrophoneMuteToggle: 9002,
  kDebugPrintLayerHierarchy: 9003,
  kDebugPrintViewHierarchy: 9004,
  kDebugPrintWindowHierarchy: 9005,
  kDebugShowInformedRestore: 9006,
  kDebugShowToast: 9007,
  kDebugShowSystemNudge: 9008,
  kDebugSystemUiStyleViewer: 9009,
  kDebugToggleDarkMode: 9010,
  kDebugToggleDynamicColor: 9011,
  kDebugTogglePowerButtonMenu: 9012,
  kDebugToggleShowDebugBorders: 9013,
  kDebugToggleShowFpsCounter: 9014,
  kDebugToggleShowPaintRects: 9015,
  kDebugToggleTouchPad: 9016,
  kDebugToggleTouchScreen: 9017,
  kDebugToggleTabletMode: 9018,
  kDebugToggleVideoConferenceCameraTrayIcon: 9019,
  kDebugToggleWallpaperMode: 9020,
  kDebugTriggerCrash: 9021,
  kDebugToggleHudDisplay: 9022,
  kDebugToggleVirtualTrackpad: 9023,
  kDevAddRemoveDisplay: 9024,
  kDevToggleAppList: 9025,
  kDevToggleUnifiedDesktop: 9026,
  kDebugToggleFocusModeState: 9027,
  kDebugStartSunfishSession: 9028,
  kDebugShowTestWindow: 9029,
};
