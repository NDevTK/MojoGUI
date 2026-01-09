// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/ax_enums.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: Event
ax.mojom.Event = {
  kActiveDescendantChanged: 0,
  kAlert: 1,
  kAriaAttributeChangedDeprecated: 2,
  kAutocorrectionOccured: 3,
  kBlur: 4,
  kCheckedStateChanged: 5,
  kChildrenChanged: 6,
  kClicked: 7,
  kControlsChanged: 8,
  kDocumentSelectionChanged: 9,
  kDocumentTitleChanged: 10,
  kEndOfTest: 11,
  kExpandedChanged: 12,
  kFocus: 13,
  kFocusAfterMenuClose: 14,
  kFocusContext: 15,
  kHide: 16,
  kHitTestResult: 17,
  kHover: 18,
  kImageFrameUpdated: 19,
  kLayoutComplete: 20,
  kLiveRegionCreated: 21,
  kLiveRegionChanged: 22,
  kLoadComplete: 23,
  kLoadStart: 24,
  kLocationChanged: 25,
  kMediaStartedPlaying: 26,
  kMediaStoppedPlaying: 27,
  kMenuEnd: 28,
  kMenuListValueChangedDeprecated: 29,
  kMenuPopupEnd: 30,
  kMenuPopupStart: 31,
  kMenuStart: 32,
  kMouseCanceled: 33,
  kMouseDragged: 34,
  kMouseMoved: 35,
  kMousePressed: 36,
  kMouseReleased: 37,
  kRowCollapsed: 38,
  kRowCountChanged: 39,
  kRowExpanded: 40,
  kScrollPositionChanged: 41,
  kScrolledToAnchor: 42,
  kSelectedChildrenChanged: 43,
  kSelection: 44,
  kSelectionAdd: 45,
  kSelectionRemove: 46,
  kShow: 47,
  kStateChanged: 48,
  kTextChanged: 49,
  kTextSelectionChanged: 50,
  kTooltipClosed: 51,
  kTooltipOpened: 52,
  kTreeChanged: 53,
  kValueChanged: 54,
  kWindowActivated: 55,
  kWindowDeactivated: 56,
  kWindowVisibilityChanged: 57,
};

// Enum: Role
ax.mojom.Role = {
  kAbbr: 0,
  kAlert: 1,
  kAlertDialog: 2,
  kApplication: 3,
  kArticle: 4,
  kAudio: 5,
  kBanner: 6,
  kBlockquote: 7,
  kButton: 8,
  kCanvas: 9,
  kCaption: 10,
  kCaret: 11,
  kCell: 12,
  kCheckBox: 13,
  kClient: 14,
  kCode: 15,
  kColorWell: 16,
  kColumn: 17,
  kColumnHeader: 18,
  kComboBoxGrouping: 19,
  kComboBoxMenuButton: 20,
  kComplementary: 21,
  kComment: 22,
  kContentDeletion: 23,
  kContentInsertion: 24,
  kContentInfo: 25,
  kDate: 26,
  kDateTime: 27,
  kDefinition: 28,
  kDescriptionList: 29,
  kDescriptionListDetailDeprecated: 30,
  kDescriptionListTermDeprecated: 31,
  kDesktop: 32,
  kDetails: 33,
  kDialog: 34,
  kDirectoryDeprecated: 35,
  kDisclosureTriangle: 36,
  kDocAbstract: 37,
  kDocAcknowledgments: 38,
  kDocAfterword: 39,
  kDocAppendix: 40,
  kDocBackLink: 41,
  kDocBiblioEntry: 42,
  kDocBibliography: 43,
  kDocBiblioRef: 44,
  kDocChapter: 45,
  kDocColophon: 46,
  kDocConclusion: 47,
  kDocCover: 48,
  kDocCredit: 49,
  kDocCredits: 50,
  kDocDedication: 51,
  kDocEndnote: 52,
  kDocEndnotes: 53,
  kDocEpigraph: 54,
  kDocEpilogue: 55,
  kDocErrata: 56,
  kDocExample: 57,
  kDocFootnote: 58,
  kDocForeword: 59,
  kDocGlossary: 60,
  kDocGlossRef: 61,
  kDocIndex: 62,
  kDocIntroduction: 63,
  kDocNoteRef: 64,
  kDocNotice: 65,
  kDocPageBreak: 66,
  kDocPageFooter: 67,
  kDocPageHeader: 68,
  kDocPageList: 69,
  kDocPart: 70,
  kDocPreface: 71,
  kDocPrologue: 72,
  kDocPullquote: 73,
  kDocQna: 74,
  kDocSubtitle: 75,
  kDocTip: 76,
  kDocToc: 77,
  kDocument: 78,
  kEmbeddedObject: 79,
  kEmphasis: 80,
  kFeed: 81,
  kFigcaption: 82,
  kFigure: 83,
  kFooter: 84,
  kSectionFooter: 85,
  kForm: 86,
  kGenericContainer: 87,
  kGraphicsDocument: 88,
  kGraphicsObject: 89,
  kGraphicsSymbol: 90,
  kGrid: 91,
  kGroup: 92,
  kHeader: 93,
  kSectionHeader: 94,
  kHeading: 95,
  kIframe: 96,
  kIframePresentational: 97,
  kImage: 98,
  kImeCandidate: 99,
  kInlineTextBox: 100,
  kInputTime: 101,
  kKeyboard: 102,
  kLabelText: 103,
  kLayoutTable: 104,
  kLayoutTableCell: 105,
  kLayoutTableRow: 106,
  kLegend: 107,
  kLineBreak: 108,
  kLink: 109,
  kList: 110,
  kListBox: 111,
  kListBoxOption: 112,
  kListGrid: 113,
  kListItem: 114,
  kListMarker: 115,
  kLog: 116,
  kMain: 117,
  kMark: 118,
  kMarquee: 119,
  kMath: 120,
  kMenu: 121,
  kMenuBar: 122,
  kMenuItem: 123,
  kMenuItemCheckBox: 124,
  kMenuItemRadio: 125,
  kMenuListOption: 126,
  kMenuListPopup: 127,
  kMeter: 128,
  kNavigation: 129,
  kNone: 130,
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
  kSlider: 155,
  kSpinButton: 156,
  kSplitter: 157,
  kStaticText: 158,
  kStatus: 159,
  kStrong: 160,
  kSuggestion: 161,
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
  kVideo: 181,
  kWebView: 182,
  kWindow: 183,
};

// Enum: State
ax.mojom.State = {
  kAutofillAvailable: 0,
  kCollapsed: 1,
  kDefault: 2,
  kEditable: 3,
  kExpanded: 4,
  kFocusable: 5,
  kHorizontal: 6,
  kHovered: 7,
  kIgnored: 8,
  kInvisible: 9,
  kLinked: 10,
  kMultiline: 11,
  kMultiselectable: 12,
  kProtected: 13,
  kRequired: 14,
  kRichlyEditable: 15,
  kVertical: 16,
  kVisited: 17,
};

// Enum: Action
ax.mojom.Action = {
  kAnnotatePageImages: 0,
  kBlur: 1,
  kClearAccessibilityFocus: 2,
  kCollapse: 3,
  kCustomAction: 4,
  kDecrement: 5,
  kDoDefault: 6,
  kExpand: 7,
  kFocus: 8,
  kGetImageData: 9,
  kGetTextLocation: 10,
  kHideTooltip: 11,
  kHitTest: 12,
  kIncrement: 13,
  kInternalInvalidateTree: 14,
  kLoadInlineTextBoxes: 15,
  kReplaceSelectedText: 16,
  kScrollBackward: 17,
  kScrollDown: 18,
  kScrollForward: 19,
  kScrollLeft: 20,
  kScrollRight: 21,
  kScrollUp: 22,
  kScrollToMakeVisible: 23,
  kScrollToPoint: 24,
  kSetAccessibilityFocus: 25,
  kSetScrollOffset: 26,
  kSetSelection: 27,
  kSetSequentialFocusNavigationStartingPoint: 28,
  kSetValue: 29,
  kShowContextMenu: 30,
  kSignalEndOfTest: 31,
  kShowTooltip: 32,
};

// Enum: ActionFlags
ax.mojom.ActionFlags = {
  kNone: 0,
  kRequestImages: 1,
  kRequestInlineTextBoxes: 2,
};

// Enum: ScrollAlignment
ax.mojom.ScrollAlignment = {
  kScrollAlignmentCenter: 0,
  kScrollAlignmentTop: 1,
  kScrollAlignmentBottom: 2,
  kScrollAlignmentLeft: 3,
  kScrollAlignmentRight: 4,
  kScrollAlignmentClosestEdge: 5,
};

// Enum: ScrollBehavior
ax.mojom.ScrollBehavior = {
  kDoNotScrollIfVisible: 0,
  kScrollIfVisible: 1,
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
  kAccessKey: 0,
  kAppId: 1,
  kAriaInvalidValueDeprecated: 2,
  kAutoComplete: 3,
  kCheckedStateDescription: 4,
  kChildTreeId: 5,
  kChildTreeNodeAppId: 6,
  kClassName: 7,
  kContainerLiveRelevant: 8,
  kContainerLiveStatus: 9,
  kDescription: 10,
  kDisplay: 11,
  kFontFamily: 12,
  kHtmlTag: 13,
  kImageAnnotation: 14,
  kImageDataUrl: 15,
  kInputType: 16,
  kKeyShortcuts: 17,
  kLanguage: 18,
  kLiveRelevant: 19,
  kLiveStatus: 20,
  kMathContent: 21,
  kName: 22,
  kPlaceholder: 23,
  kRole: 24,
  kRoleDescription: 25,
  kTooltip: 26,
  kUrl: 27,
  kValue: 28,
  kVirtualContent: 29,
};

// Enum: IntAttribute
ax.mojom.IntAttribute = {
  kDefaultActionVerb: 0,
  kScrollX: 1,
  kScrollXMin: 2,
  kScrollXMax: 3,
  kScrollY: 4,
  kScrollYMin: 5,
  kScrollYMax: 6,
  kTextSelStart: 7,
  kTextSelEnd: 8,
  kAriaColumnCount: 9,
  kAriaCellColumnIndex: 10,
  kAriaCellColumnSpan: 11,
  kAriaRowCount: 12,
  kAriaCellRowIndex: 13,
  kAriaCellRowSpan: 14,
  kTableRowCount: 15,
  kTableColumnCount: 16,
  kTableHeaderId: 17,
  kTableRowIndex: 18,
  kTableRowHeaderId: 19,
  kTableColumnIndex: 20,
  kTableColumnHeaderId: 21,
  kTableCellColumnIndex: 22,
  kTableCellColumnSpan: 23,
  kTableCellRowIndex: 24,
  kTableCellRowSpan: 25,
  kSortDirection: 26,
  kHierarchicalLevel: 27,
  kNameFrom: 28,
  kDescriptionFrom: 29,
  kActivedescendantId: 30,
  kErrormessageIdDeprecated: 31,
  kInPageLinkTargetId: 32,
  kMemberOfId: 33,
  kNextOnLineId: 34,
  kPopupForId: 35,
  kPreviousOnLineId: 36,
  kRestriction: 37,
  kSetSize: 38,
  kPosInSet: 39,
  kColorValue: 40,
  kAriaCurrentState: 41,
  kBackgroundColor: 42,
  kColor: 43,
  kHasPopup: 44,
  kImageAnnotationStatus: 45,
  kInvalidState: 46,
  kCheckedState: 47,
  kListStyle: 48,
  kTextAlign: 49,
  kTextDirection: 50,
  kTextPosition: 51,
  kTextStyle: 52,
  kTextOverlineStyle: 53,
  kTextStrikethroughStyle: 54,
  kTextUnderlineStyle: 55,
  kPreviousFocusId: 56,
  kNextFocusId: 57,
  kDropeffectDeprecated: 58,
  kDOMNodeIdDeprecated: 59,
};

// Enum: FloatAttribute
ax.mojom.FloatAttribute = {
  kValueForRange: 0,
  kMinValueForRange: 1,
  kMaxValueForRange: 2,
  kStepValueForRange: 3,
  kFontSize: 4,
  kFontWeight: 5,
  kTextIndent: 6,
};

// Enum: BoolAttribute
ax.mojom.BoolAttribute = {
  kBusy: 0,
  kNonAtomicTextFieldRoot: 1,
  kContainerLiveAtomic: 2,
  kContainerLiveBusy: 3,
  kLiveAtomic: 4,
  kModal: 5,
  kUpdateLocationOnly: 6,
  kCanvasHasFallback: 7,
  kScrollable: 8,
  kClickable: 9,
  kClipsChildren: 10,
  kNotUserSelectableStyle: 11,
  kSelected: 12,
  kSelectedFromFocus: 13,
  kSupportsTextLocation: 14,
  kGrabbedDeprecated: 15,
  kIsLineBreakingObject: 16,
  kIsPageBreakingObject: 17,
  kHasAriaAttribute: 18,
  kTouchPassthroughDeprecated: 19,
};

// Enum: IntListAttribute
ax.mojom.IntListAttribute = {
  kIndirectChildIds: 0,
  kControlsIds: 1,
  kDetailsIds: 2,
  kDescribedbyIds: 3,
  kFlowtoIds: 4,
  kLabelledbyIds: 5,
  kRadioGroupIds: 6,
  kMarkerTypes: 7,
  kMarkerStarts: 8,
  kMarkerEnds: 9,
  kCharacterOffsets: 10,
  kLineStarts: 11,
  kWordStarts: 12,
  kWordEnds: 13,
  kCustomActionIds: 14,
};

// Enum: StringListAttribute
ax.mojom.StringListAttribute = {
  kCustomActionDescriptions: 0,
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
  kTextMatch: 3,
  kActiveSuggestion: 4,
  kSuggestion: 5,
  kHighlight: 6,
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
  kBackward: 0,
  kForward: 1,
};

// Enum: Command
ax.mojom.Command = {
  kClearSelection: 0,
  kDelete: 1,
  kDictate: 2,
  kExtendSelection: 3,
  kFormat: 4,
  kHistory: 5,
  kInsert: 6,
  kMarker: 7,
  kMoveSelection: 8,
  kSetSelection: 9,
};

// Enum: InputEventType
ax.mojom.InputEventType = {
  kInsertText: 0,
  kInsertLineBreak: 1,
  kInsertParagraph: 2,
  kInsertOrderedList: 3,
  kInsertUnorderedList: 4,
  kInsertHorizontalRule: 5,
  kInsertFromPaste: 6,
  kInsertFromDrop: 7,
  kInsertFromYank: 8,
  kInsertTranspose: 9,
  kInsertReplacementText: 10,
  kInsertCompositionText: 11,
  kDeleteWordBackward: 12,
  kDeleteWordForward: 13,
  kDeleteSoftLineBackward: 14,
  kDeleteSoftLineForward: 15,
  kDeleteHardLineBackward: 16,
  kDeleteHardLineForward: 17,
  kDeleteContentBackward: 18,
  kDeleteContentForward: 19,
  kDeleteByCut: 20,
  kDeleteByDrag: 21,
  kHistoryUndo: 22,
  kHistoryRedo: 23,
  kFormatBold: 24,
  kFormatItalic: 25,
  kFormatUnderline: 26,
  kFormatStrikeThrough: 27,
  kFormatSuperscript: 28,
  kFormatSubscript: 29,
  kFormatJustifyCenter: 30,
  kFormatJustifyFull: 31,
  kFormatJustifyRight: 32,
  kFormatJustifyLeft: 33,
  kFormatIndent: 34,
  kFormatOutdent: 35,
  kFormatRemove: 36,
  kFormatSetBlockTextDirection: 37,
};

// Enum: TextBoundary
ax.mojom.TextBoundary = {
  kCharacter: 0,
  kFormatEnd: 1,
  kLineEnd: 2,
  kLineStart: 3,
  kLineStartOrEnd: 4,
  kObject: 5,
  kPageEnd: 6,
  kPageStart: 7,
  kPageStartOrEnd: 8,
  kParagraphEnd: 9,
  kParagraphStart: 10,
  kParagraphStartOrEnd: 11,
  kSentenceEnd: 12,
  kSentenceStart: 13,
  kSentenceStartOrEnd: 14,
  kWebPage: 15,
  kWordEnd: 16,
  kWordStart: 17,
  kWordStartOrEnd: 18,
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
  kNone: 7,
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
  kUser: 0,
  kPage: 1,
  kAction: 2,
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
  kDownstream: 0,
  kUpstream: 1,
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
