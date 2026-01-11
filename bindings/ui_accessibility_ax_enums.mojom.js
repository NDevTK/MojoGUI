// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/ax_enums.mojom
// Module: ax.mojom

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
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.EventSpec = { $: mojo.internal.Enum() };
ax.mojom.RoleSpec = { $: mojo.internal.Enum() };
ax.mojom.StateSpec = { $: mojo.internal.Enum() };
ax.mojom.ActionSpec = { $: mojo.internal.Enum() };
ax.mojom.ActionFlagsSpec = { $: mojo.internal.Enum() };
ax.mojom.ScrollAlignmentSpec = { $: mojo.internal.Enum() };
ax.mojom.ScrollBehaviorSpec = { $: mojo.internal.Enum() };
ax.mojom.DefaultActionVerbSpec = { $: mojo.internal.Enum() };
ax.mojom.MutationSpec = { $: mojo.internal.Enum() };
ax.mojom.StringAttributeSpec = { $: mojo.internal.Enum() };
ax.mojom.IntAttributeSpec = { $: mojo.internal.Enum() };
ax.mojom.FloatAttributeSpec = { $: mojo.internal.Enum() };
ax.mojom.BoolAttributeSpec = { $: mojo.internal.Enum() };
ax.mojom.IntListAttributeSpec = { $: mojo.internal.Enum() };
ax.mojom.StringListAttributeSpec = { $: mojo.internal.Enum() };
ax.mojom.ListStyleSpec = { $: mojo.internal.Enum() };
ax.mojom.MarkerTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.HighlightTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.MoveDirectionSpec = { $: mojo.internal.Enum() };
ax.mojom.CommandSpec = { $: mojo.internal.Enum() };
ax.mojom.InputEventTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.TextBoundarySpec = { $: mojo.internal.Enum() };
ax.mojom.TextAlignSpec = { $: mojo.internal.Enum() };
ax.mojom.WritingDirectionSpec = { $: mojo.internal.Enum() };
ax.mojom.TextPositionSpec = { $: mojo.internal.Enum() };
ax.mojom.TextStyleSpec = { $: mojo.internal.Enum() };
ax.mojom.TextDecorationStyleSpec = { $: mojo.internal.Enum() };
ax.mojom.AriaCurrentStateSpec = { $: mojo.internal.Enum() };
ax.mojom.HasPopupSpec = { $: mojo.internal.Enum() };
ax.mojom.IsPopupSpec = { $: mojo.internal.Enum() };
ax.mojom.InvalidStateSpec = { $: mojo.internal.Enum() };
ax.mojom.RestrictionSpec = { $: mojo.internal.Enum() };
ax.mojom.CheckedStateSpec = { $: mojo.internal.Enum() };
ax.mojom.SortDirectionSpec = { $: mojo.internal.Enum() };
ax.mojom.NameFromSpec = { $: mojo.internal.Enum() };
ax.mojom.DescriptionFromSpec = { $: mojo.internal.Enum() };
ax.mojom.DetailsFromSpec = { $: mojo.internal.Enum() };
ax.mojom.EventFromSpec = { $: mojo.internal.Enum() };
ax.mojom.GestureSpec = { $: mojo.internal.Enum() };
ax.mojom.TextAffinitySpec = { $: mojo.internal.Enum() };
ax.mojom.TreeOrderSpec = { $: mojo.internal.Enum() };
ax.mojom.AXTreeIDTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.ImageAnnotationStatusSpec = { $: mojo.internal.Enum() };
ax.mojom.AriaNotificationInterruptSpec = { $: mojo.internal.Enum() };
ax.mojom.AriaNotificationPrioritySpec = { $: mojo.internal.Enum() };

// Enum: Event
ax.mojom.Event = {
  kNone: 0,
  kActiveDescendantChanged: 1,
  kAlert: 2,
  kAriaAttributeChangedDeprecated: 3,
  kAutocorrectionOccured: 4,
  kBlur: 5,
  kCheckedStateChanged: 6,
  kChildrenChanged: 7,
  kClicked: 8,
  kControlsChanged: 9,
  kDocumentSelectionChanged: 10,
  kDocumentTitleChanged: 11,
  kEndOfTest: 12,
  kExpandedChanged: 13,
  kFocus: 14,
  kFocusAfterMenuClose: 15,
  kFocusContext: 16,
  kHide: 17,
  kHitTestResult: 18,
  kHover: 19,
  kImageFrameUpdated: 20,
  kLayoutComplete: 21,
  kLiveRegionCreated: 22,
  kLiveRegionChanged: 23,
  kLoadComplete: 24,
  kLoadStart: 25,
  kLocationChanged: 26,
  kMediaStartedPlaying: 27,
  kMediaStoppedPlaying: 28,
  kMenuEnd: 29,
  kMenuListValueChangedDeprecated: 30,
  kMenuPopupEnd: 31,
  kMenuPopupStart: 32,
  kMenuStart: 33,
  kMouseCanceled: 34,
  kMouseDragged: 35,
  kMouseMoved: 36,
  kMousePressed: 37,
  kMouseReleased: 38,
  kRowCollapsed: 39,
  kRowCountChanged: 40,
  kRowExpanded: 41,
  kScrollPositionChanged: 42,
  kScrolledToAnchor: 43,
  kSelectedChildrenChanged: 44,
  kSelection: 45,
  kSelectionAdd: 46,
  kSelectionRemove: 47,
  kShow: 48,
  kStateChanged: 49,
  kTextChanged: 50,
  kTextSelectionChanged: 51,
  kTooltipClosed: 52,
  kTooltipOpened: 53,
  kTreeChanged: 54,
  kValueChanged: 55,
  kWindowActivated: 56,
  kWindowDeactivated: 57,
  kWindowVisibilityChanged: 58,
};

// Enum: Role
ax.mojom.Role = {
  kUnknown: 181,
  kAbbr: 1,
  kAlert: 2,
  kAlertDialog: 3,
  kApplication: 4,
  kArticle: 5,
  kAudio: 6,
  kBanner: 7,
  kBlockquote: 8,
  kButton: 9,
  kCanvas: 10,
  kCaption: 11,
  kCaret: 12,
  kCell: 13,
  kCheckBox: 14,
  kClient: 15,
  kCode: 16,
  kColorWell: 17,
  kColumn: 18,
  kColumnHeader: 19,
  kComboBoxGrouping: 20,
  kComboBoxMenuButton: 21,
  MinVersion: 21,
  kComplementary: 22,
  kComment: 23,
  kContentDeletion: 24,
  kContentInsertion: 25,
  kContentInfo: 26,
  kDate: 27,
  kDateTime: 28,
  kDefinition: 29,
  kDescriptionList: 30,
  kDescriptionListDetailDeprecated: 31,
  kDescriptionListTermDeprecated: 32,
  kDesktop: 33,
  kDetails: 34,
  kDialog: 35,
  kDirectoryDeprecated: 36,
  kDisclosureTriangle: 37,
  MinVersion: 37,
  kDocAbstract: 38,
  kDocAcknowledgments: 39,
  kDocAfterword: 40,
  kDocAppendix: 41,
  kDocBackLink: 42,
  kDocBiblioEntry: 43,
  kDocBibliography: 44,
  kDocBiblioRef: 45,
  kDocChapter: 46,
  kDocColophon: 47,
  kDocConclusion: 48,
  kDocCover: 49,
  kDocCredit: 50,
  kDocCredits: 51,
  kDocDedication: 52,
  kDocEndnote: 53,
  kDocEndnotes: 54,
  kDocEpigraph: 55,
  kDocEpilogue: 56,
  kDocErrata: 57,
  kDocExample: 58,
  kDocFootnote: 59,
  kDocForeword: 60,
  kDocGlossary: 61,
  kDocGlossRef: 62,
  kDocIndex: 63,
  kDocIntroduction: 64,
  kDocNoteRef: 65,
  kDocNotice: 66,
  kDocPageBreak: 67,
  kDocPageFooter: 68,
  kDocPageHeader: 69,
  kDocPageList: 70,
  kDocPart: 71,
  kDocPreface: 72,
  kDocPrologue: 73,
  kDocPullquote: 74,
  kDocQna: 75,
  kDocSubtitle: 76,
  kDocTip: 77,
  kDocToc: 78,
  kDocument: 79,
  kEmbeddedObject: 80,
  kEmphasis: 81,
  kFeed: 82,
  kFigcaption: 83,
  kFigure: 84,
  kFooter: 85,
  kSectionFooter: 86,
  kForm: 87,
  kGenericContainer: 88,
  kGraphicsDocument: 89,
  kGraphicsObject: 90,
  kGraphicsSymbol: 91,
  kGrid: 92,
  MinVersion: 92,
  kGroup: 93,
  kHeader: 94,
  kSectionHeader: 95,
  kHeading: 96,
  kIframe: 97,
  kIframePresentational: 98,
  kImage: 99,
  kImeCandidate: 100,
  kInlineTextBox: 101,
  kInputTime: 102,
  kKeyboard: 103,
  kLabelText: 104,
  kLayoutTable: 105,
  kLayoutTableCell: 106,
  kLayoutTableRow: 107,
  kLegend: 108,
  kLineBreak: 109,
  kLink: 110,
  kList: 111,
  kListBox: 112,
  kListBoxOption: 113,
  kListGrid: 114,
  kListItem: 115,
  kListMarker: 116,
  kLog: 117,
  kMain: 118,
  kMark: 119,
  kMarquee: 120,
  kMath: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  MinVersion: 121,
  kMenu: 122,
  kMenuBar: 123,
  kMenuItem: 124,
  kMenuItemCheckBox: 125,
  kMenuItemRadio: 126,
  MinVersion: 126,
  kMenuListOption: 127,
  kMenuListPopup: 128,
  kMeter: 129,
  kNavigation: 130,
  kNone: 0,
  kNote: 131,
  kPane: 132,
  kParagraph: 133,
  kPdfActionableHighlight: 134,
  kPdfRoot: 135,
  kPluginObject: 136,
  kPopUpButton: 137,
  kPortalDeprecated: 138,
  kPreDeprecated: 139,
  kProgressIndicator: 140,
  kRadioButton: 141,
  kRadioGroup: 142,
  kRegion: 143,
  kRootWebArea: 144,
  kRow: 145,
  kRowGroup: 146,
  kRowHeader: 147,
  kRuby: 148,
  kRubyAnnotation: 149,
  kScrollBar: 150,
  kScrollView: 151,
  kSearch: 152,
  kSearchBox: 153,
  kSection: 154,
  MinVersion: 154,
  kSlider: 155,
  kSpinButton: 156,
  kSplitter: 157,
  kStaticText: 158,
  kStatus: 159,
  kStrong: 160,
  MinVersion: 160,
  kSuggestion: 161,
  MinVersion: 161,
  kSvgRoot: 162,
  kSwitch: 163,
  kTab: 164,
  kTabList: 165,
  kTabPanel: 166,
  kTable: 167,
  kTableHeaderContainer: 168,
  kTerm: 169,
  kTextField: 170,
  kTextFieldWithComboBox: 171,
  kTime: 172,
  kTimer: 173,
  kTitleBar: 174,
  kToggleButton: 175,
  kToolbar: 176,
  kTooltip: 177,
  kTree: 178,
  kTreeGrid: 179,
  kTreeItem: 180,
  kVideo: 182,
  kWebView: 183,
  kWindow: 184,
};

// Enum: State
ax.mojom.State = {
  kNone: 0,
  kAutofillAvailable: 1,
  kCollapsed: 2,
  kDefault: 3,
  kEditable: 4,
  kExpanded: 5,
  kFocusable: 6,
  kHorizontal: 7,
  kHovered: 8,
  kIgnored: 9,
  kInvisible: 10,
  kLinked: 11,
  kMultiline: 12,
  kMultiselectable: 13,
  kProtected: 14,
  kRequired: 15,
  kRichlyEditable: 16,
  kVertical: 17,
  kVisited: 18,
  MinVersion: 18,
  MinVersion: 18,
};

// Enum: Action
ax.mojom.Action = {
  kNone: 0,
  kAnnotatePageImages: 1,
  kBlur: 2,
  kClearAccessibilityFocus: 3,
  kCollapse: 4,
  kCustomAction: 5,
  kDecrement: 6,
  kDoDefault: 7,
  kExpand: 8,
  kFocus: 9,
  kGetImageData: 10,
  kGetTextLocation: 11,
  kHideTooltip: 12,
  kHitTest: 13,
  kIncrement: 14,
  kInternalInvalidateTree: 15,
  kLoadInlineTextBoxes: 16,
  MinVersion: 16,
  kReplaceSelectedText: 17,
  MinVersion: 17,
  MinVersion: 17,
  kScrollBackward: 18,
  kScrollDown: 19,
  kScrollForward: 20,
  kScrollLeft: 21,
  kScrollRight: 22,
  kScrollUp: 23,
  kScrollToMakeVisible: 24,
  kScrollToPoint: 25,
  MinVersion: 25,
  kSetAccessibilityFocus: 26,
  kSetScrollOffset: 27,
  kSetSelection: 28,
  kSetSequentialFocusNavigationStartingPoint: 29,
  kSetValue: 30,
  kShowContextMenu: 31,
  kSignalEndOfTest: 32,
  kShowTooltip: 33,
  MinVersion: 33,
  MinVersion: 33,
  MinVersion: 33,
  MinVersion: 33,
};

// Enum: ActionFlags
ax.mojom.ActionFlags = {
  kNone: 0,
  kRequestImages: 1,
  kRequestInlineTextBoxes: 2,
};

// Enum: ScrollAlignment
ax.mojom.ScrollAlignment = {
  kNone: 0,
  kScrollAlignmentCenter: 1,
  kScrollAlignmentTop: 2,
  kScrollAlignmentBottom: 3,
  kScrollAlignmentLeft: 4,
  kScrollAlignmentRight: 5,
  kScrollAlignmentClosestEdge: 6,
};

// Enum: ScrollBehavior
ax.mojom.ScrollBehavior = {
  kNone: 0,
  kDoNotScrollIfVisible: 1,
  kScrollIfVisible: 2,
};

// Enum: DefaultActionVerb
ax.mojom.DefaultActionVerb = {
  kNone: 0,
  kActivate: 1,
  kCheck: 2,
  kClick: 3,
  kClickAncestor: 4,
  kClickInHitTest: 5,
  kClickNotInHitTest: 6,
  kJump: 7,
  kOpen: 8,
  kPress: 9,
  kSelect: 10,
  kUncheck: 11,
};

// Enum: Mutation
ax.mojom.Mutation = {
  kNone: 0,
  kNodeCreated: 1,
  kSubtreeCreated: 2,
  kNodeChanged: 3,
  kNodeRemoved: 4,
  kTextChanged: 5,
  kSubtreeUpdateEnd: 6,
};

// Enum: StringAttribute
ax.mojom.StringAttribute = {
  kNone: 0,
  kAccessKey: 1,
  kAppId: 2,
  kAriaInvalidValueDeprecated: 3,
  kAutoComplete: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
  MinVersion: 4,
  kCheckedStateDescription: 5,
  kChildTreeId: 6,
  kChildTreeNodeAppId: 7,
  kClassName: 8,
  kContainerLiveRelevant: 9,
  kContainerLiveStatus: 10,
  MinVersion: 10,
  kDescription: 11,
  kDisplay: 12,
  MinVersion: 12,
  kFontFamily: 13,
  MinVersion: 13,
  kHtmlTag: 14,
  MinVersion: 14,
  kImageAnnotation: 15,
  kImageDataUrl: 16,
  kInputType: 18,
  kKeyShortcuts: 19,
  kLanguage: 20,
  MinVersion: 20,
  MinVersion: 20,
  kLiveRelevant: 22,
  kLiveStatus: 23,
  kMathContent: 17,
  kName: 21,
  kPlaceholder: 24,
  kRole: 25,
  kRoleDescription: 26,
  kTooltip: 27,
  kUrl: 28,
  kValue: 29,
  kVirtualContent: 30,
};

// Enum: IntAttribute
ax.mojom.IntAttribute = {
  kNone: 0,
  kDefaultActionVerb: 1,
  kScrollX: 2,
  kScrollXMin: 3,
  kScrollXMax: 4,
  kScrollY: 5,
  kScrollYMin: 6,
  kScrollYMax: 7,
  kTextSelStart: 8,
  kTextSelEnd: 9,
  kAriaColumnCount: 10,
  kAriaCellColumnIndex: 11,
  kAriaCellColumnSpan: 12,
  kAriaRowCount: 13,
  kAriaCellRowIndex: 14,
  kAriaCellRowSpan: 15,
  kTableRowCount: 16,
  kTableColumnCount: 17,
  kTableHeaderId: 18,
  kTableRowIndex: 19,
  kTableRowHeaderId: 20,
  kTableColumnIndex: 21,
  kTableColumnHeaderId: 22,
  kTableCellColumnIndex: 23,
  kTableCellColumnSpan: 24,
  kTableCellRowIndex: 25,
  kTableCellRowSpan: 26,
  kSortDirection: 27,
  kHierarchicalLevel: 28,
  kNameFrom: 29,
  kDescriptionFrom: 30,
  kActivedescendantId: 31,
  kErrormessageIdDeprecated: 32,
  kInPageLinkTargetId: 33,
  kMemberOfId: 34,
  kNextOnLineId: 35,
  kPopupForId: 36,
  kPreviousOnLineId: 37,
  kRestriction: 38,
  kSetSize: 39,
  kPosInSet: 40,
  kColorValue: 41,
  kAriaCurrentState: 42,
  kBackgroundColor: 43,
  kColor: 44,
  kHasPopup: 45,
  kImageAnnotationStatus: 46,
  kInvalidState: 47,
  kCheckedState: 48,
  kListStyle: 49,
  kTextAlign: 50,
  kTextDirection: 51,
  kTextPosition: 52,
  kTextStyle: 53,
  kTextOverlineStyle: 54,
  kTextStrikethroughStyle: 55,
  kTextUnderlineStyle: 56,
  kPreviousFocusId: 57,
  kNextFocusId: 58,
  kDropeffectDeprecated: 59,
  kDOMNodeIdDeprecated: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
};

// Enum: FloatAttribute
ax.mojom.FloatAttribute = {
  kNone: 0,
  kValueForRange: 1,
  kMinValueForRange: 2,
  kMaxValueForRange: 3,
  kStepValueForRange: 4,
  kFontSize: 5,
  kFontWeight: 6,
  kTextIndent: 7,
  MinVersion: 7,
};

// Enum: BoolAttribute
ax.mojom.BoolAttribute = {
  kNone: 0,
  kBusy: 1,
  kNonAtomicTextFieldRoot: 2,
  kContainerLiveAtomic: 3,
  kContainerLiveBusy: 4,
  kLiveAtomic: 5,
  kModal: 6,
  kUpdateLocationOnly: 7,
  kCanvasHasFallback: 8,
  kScrollable: 9,
  kClickable: 10,
  kClipsChildren: 11,
  kNotUserSelectableStyle: 12,
  kSelected: 13,
  kSelectedFromFocus: 14,
  kSupportsTextLocation: 15,
  kGrabbedDeprecated: 16,
  kIsLineBreakingObject: 17,
  kIsPageBreakingObject: 18,
  kHasAriaAttribute: 19,
  kTouchPassthroughDeprecated: 20,
  MinVersion: 20,
  MinVersion: 20,
  MinVersion: 20,
  MinVersion: 20,
};

// Enum: IntListAttribute
ax.mojom.IntListAttribute = {
  kNone: 0,
  kIndirectChildIds: 1,
  kControlsIds: 2,
  kDetailsIds: 3,
  kDescribedbyIds: 4,
  MinVersion: 4,
  kFlowtoIds: 5,
  kLabelledbyIds: 6,
  kRadioGroupIds: 7,
  MinVersion: 7,
  kMarkerTypes: 8,
  kMarkerStarts: 9,
  kMarkerEnds: 10,
  MinVersion: 10,
  MinVersion: 10,
  kCharacterOffsets: 11,
  kLineStarts: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  kWordStarts: 13,
  kWordEnds: 14,
  kCustomActionIds: 15,
  MinVersion: 15,
  MinVersion: 15,
  MinVersion: 15,
  MinVersion: 15,
  MinVersion: 15,
  MinVersion: 15,
  MinVersion: 15,
};

// Enum: StringListAttribute
ax.mojom.StringListAttribute = {
  kNone: 0,
  MinVersion: 0,
  MinVersion: 0,
  kCustomActionDescriptions: 1,
};

// Enum: ListStyle
ax.mojom.ListStyle = {
  kNone: 0,
  kCircle: 1,
  kDisc: 2,
  kImage: 3,
  kNumeric: 4,
  kSquare: 5,
  kOther: 6,
};

// Enum: MarkerType
ax.mojom.MarkerType = {
  kNone: 0,
  kSpelling: 1,
  kGrammar: 2,
  kTextMatch: 4,
  kActiveSuggestion: 16,
  kSuggestion: 32,
  kHighlight: 64,
};

// Enum: HighlightType
ax.mojom.HighlightType = {
  kNone: 0,
  kHighlight: 1,
  kSpellingError: 2,
  kGrammarError: 3,
};

// Enum: MoveDirection
ax.mojom.MoveDirection = {
  kNone: 0,
  kBackward: 1,
  kForward: 2,
};

// Enum: Command
ax.mojom.Command = {
  kNone: 0,
  kClearSelection: 1,
  kDelete: 2,
  kDictate: 3,
  kExtendSelection: 4,
  kFormat: 5,
  kHistory: 6,
  kInsert: 7,
  kMarker: 8,
  kMoveSelection: 9,
  kSetSelection: 10,
};

// Enum: InputEventType
ax.mojom.InputEventType = {
  kNone: 0,
  kInsertText: 1,
  kInsertLineBreak: 2,
  kInsertParagraph: 3,
  kInsertOrderedList: 4,
  kInsertUnorderedList: 5,
  kInsertHorizontalRule: 6,
  kInsertFromPaste: 7,
  kInsertFromDrop: 8,
  kInsertFromYank: 9,
  kInsertTranspose: 10,
  kInsertReplacementText: 11,
  kInsertCompositionText: 12,
  MinVersion: 12,
  kDeleteWordBackward: 13,
  kDeleteWordForward: 14,
  kDeleteSoftLineBackward: 15,
  kDeleteSoftLineForward: 16,
  kDeleteHardLineBackward: 17,
  kDeleteHardLineForward: 18,
  kDeleteContentBackward: 19,
  kDeleteContentForward: 20,
  kDeleteByCut: 21,
  kDeleteByDrag: 22,
  kHistoryUndo: 23,
  kHistoryRedo: 24,
  kFormatBold: 25,
  kFormatItalic: 26,
  kFormatUnderline: 27,
  kFormatStrikeThrough: 28,
  kFormatSuperscript: 29,
  kFormatSubscript: 30,
  kFormatJustifyCenter: 31,
  kFormatJustifyFull: 32,
  kFormatJustifyRight: 33,
  kFormatJustifyLeft: 34,
  kFormatIndent: 35,
  kFormatOutdent: 36,
  kFormatRemove: 37,
  kFormatSetBlockTextDirection: 38,
};

// Enum: TextBoundary
ax.mojom.TextBoundary = {
  kNone: 0,
  kCharacter: 1,
  kFormatEnd: 2,
  MinVersion: 2,
  MinVersion: 2,
  kLineEnd: 3,
  kLineStart: 4,
  kLineStartOrEnd: 5,
  kObject: 6,
  kPageEnd: 7,
  kPageStart: 8,
  kPageStartOrEnd: 9,
  kParagraphEnd: 10,
  kParagraphStart: 11,
  MinVersion: 11,
  kParagraphStartOrEnd: 12,
  kSentenceEnd: 13,
  kSentenceStart: 14,
  kSentenceStartOrEnd: 15,
  kWebPage: 16,
  kWordEnd: 17,
  kWordStart: 18,
  kWordStartOrEnd: 19,
};

// Enum: TextAlign
ax.mojom.TextAlign = {
  kNone: 0,
  kLeft: 1,
  kRight: 2,
  kCenter: 3,
  kJustify: 4,
};

// Enum: WritingDirection
ax.mojom.WritingDirection = {
  kNone: 0,
  kLtr: 1,
  kRtl: 2,
  kTtb: 3,
  kBtt: 4,
};

// Enum: TextPosition
ax.mojom.TextPosition = {
  kNone: 0,
  kSubscript: 1,
  kSuperscript: 2,
};

// Enum: TextStyle
ax.mojom.TextStyle = {
  kNone: 0,
  kBold: 1,
  kItalic: 2,
  kUnderline: 3,
  kLineThrough: 4,
  kOverline: 5,
};

// Enum: TextDecorationStyle
ax.mojom.TextDecorationStyle = {
  kNone: 0,
  kDotted: 1,
  kDashed: 2,
  kSolid: 3,
  kDouble: 4,
  kWavy: 5,
};

// Enum: AriaCurrentState
ax.mojom.AriaCurrentState = {
  kNone: 0,
  kFalse: 1,
  kTrue: 2,
  kPage: 3,
  kStep: 4,
  kLocation: 5,
  kDate: 6,
  kTime: 7,
};

// Enum: HasPopup
ax.mojom.HasPopup = {
  kFalse: 0,
  kTrue: 1,
  kMenu: 2,
  kListbox: 3,
  kTree: 4,
  kGrid: 5,
  kDialog: 6,
  kNone: 6,
};

// Enum: IsPopup
ax.mojom.IsPopup = {
  kNone: 0,
  kManual: 1,
  kAuto: 2,
  kHint: 3,
};

// Enum: InvalidState
ax.mojom.InvalidState = {
  kNone: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: Restriction
ax.mojom.Restriction = {
  kNone: 0,
  kReadOnly: 1,
  kDisabled: 2,
};

// Enum: CheckedState
ax.mojom.CheckedState = {
  kNone: 0,
  kFalse: 1,
  kTrue: 2,
  kMixed: 3,
};

// Enum: SortDirection
ax.mojom.SortDirection = {
  kNone: 0,
  kUnsorted: 1,
  kAscending: 2,
  kDescending: 3,
  kOther: 4,
};

// Enum: NameFrom
ax.mojom.NameFrom = {
  kNone: 0,
  kAttribute: 1,
  kAttributeExplicitlyEmpty: 2,
  kCaption: 3,
  kContents: 4,
  kCssAltText: 5,
  kPlaceholder: 6,
  kRelatedElement: 7,
  kProhibited: 8,
  kProhibitedAndRedundant: 9,
  kTitle: 10,
  kValue: 11,
  kPopoverTarget: 12,
  kInterestFor: 13,
};

// Enum: DescriptionFrom
ax.mojom.DescriptionFrom = {
  kNone: 0,
  kAriaDescription: 1,
  kAttributeExplicitlyEmpty: 2,
  kButtonLabel: 3,
  kRelatedElement: 4,
  kRubyAnnotation: 5,
  kProhibitedNameRepair: 6,
  kSummary: 7,
  kSvgDescElement: 8,
  kTableCaption: 9,
  kTitle: 10,
  kPopoverTarget: 11,
  kInterestFor: 12,
};

// Enum: DetailsFrom
ax.mojom.DetailsFrom = {
  kAriaDetails: 0,
  kCssAnchor: 1,
  kPopoverTarget: 2,
  kInterestFor: 3,
  kCommandfor: 4,
  kCssScrollMarkerPseudoElement: 5,
};

// Enum: EventFrom
ax.mojom.EventFrom = {
  kNone: 0,
  kUser: 1,
  kPage: 2,
  kAction: 3,
};

// Enum: Gesture
ax.mojom.Gesture = {
  kNone: 0,
  kClick: 1,
  kSwipeLeft1: 2,
  kSwipeUp1: 3,
  kSwipeRight1: 4,
  kSwipeDown1: 5,
  kSwipeLeft2: 6,
  kSwipeUp2: 7,
  kSwipeRight2: 8,
  kSwipeDown2: 9,
  kSwipeLeft3: 10,
  kSwipeUp3: 11,
  kSwipeRight3: 12,
  kSwipeDown3: 13,
  kSwipeLeft4: 14,
  kSwipeUp4: 15,
  kSwipeRight4: 16,
  kSwipeDown4: 17,
  kTap2: 18,
  kTap3: 19,
  kTap4: 20,
  kTouchExplore: 21,
};

// Enum: TextAffinity
ax.mojom.TextAffinity = {
  kNone: 0,
  kDownstream: 1,
  kUpstream: 2,
};

// Enum: TreeOrder
ax.mojom.TreeOrder = {
  kNone: 0,
  kUndefined: 1,
  kBefore: 2,
  kEqual: 3,
  kAfter: 4,
};

// Enum: AXTreeIDType
ax.mojom.AXTreeIDType = {
  kUnknown: 0,
  kToken: 1,
};

// Enum: ImageAnnotationStatus
ax.mojom.ImageAnnotationStatus = {
  kNone: 0,
  kWillNotAnnotateDueToScheme: 1,
  kIneligibleForAnnotation: 2,
  kEligibleForAnnotation: 3,
  kSilentlyEligibleForAnnotation: 4,
  kAnnotationPending: 5,
  kAnnotationSucceeded: 6,
  kAnnotationEmpty: 7,
  kAnnotationAdult: 8,
  kAnnotationProcessFailed: 9,
};

// Enum: AriaNotificationInterrupt
ax.mojom.AriaNotificationInterrupt = {
  kNone: 0,
  kAll: 1,
  kPending: 2,
};

// Enum: AriaNotificationPriority
ax.mojom.AriaNotificationPriority = {
  kNormal: 0,
  kHigh: 1,
};
