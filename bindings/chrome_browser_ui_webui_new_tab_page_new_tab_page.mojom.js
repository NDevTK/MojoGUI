// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/new_tab_page/new_tab_page.mojom
 // Module: new_tab_page.mojom

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
      // Per-interface scramble map (generated from BUILD.gn analysis)
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "accessibility_annotator.info.mojom.PageHandler": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.borealis_installer.mojom.PageHandlerFactory": true, "ash.borealis_installer.mojom.PageHandler": true, "ash.borealis_installer.mojom.Page": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "mojom.LocationInternalsHandler": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip.mojom.PageHandlerFactory": true, "tab_strip.mojom.PageHandler": true, "tab_strip.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "actor.mojom.JournalClient": true, "actor.mojom.PageStabilityMonitor": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.DocumentScan": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "feed.mojom.RssLinkReader": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "ai.mojom.ZeroStateSuggestionsService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
      // Lazy cache: keyed by "version|ifaceName"
      _ordinalCache: {},
      _lastVersion: null,
      getOrdinals: function(ifaceName, methodSpecs) {
        const params = new URLSearchParams(window.location.search);
        const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
        
        // Check per-interface setting from BUILD.gn
        const shouldScramble = this._interfaceScrambleMap[ifaceName];
        if (shouldScramble === false || forceNoScramble) {
          // No scrambling: use explicit ordinals or sequential index
          return methodSpecs.map((ms, idx) => ms.explicit !== null ? ms.explicit : idx);
        }
        
        // Get current version (may change after async detection)
        const versionStr = window.mojoVersion || '149.0.7790.0';
        
        // Invalidate cache if version changed
        if (this._lastVersion !== versionStr) {
          this._ordinalCache = {};
          this._lastVersion = versionStr;
        }
        
        // Check cache
        const cacheKey = ifaceName;
        if (this._ordinalCache[cacheKey]) {
          return this._ordinalCache[cacheKey];
        }
        
        // Scrambling enabled: use SHA256 hash
        const p = versionStr.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        const shortName = ifaceName.split('.').pop();
        
        const seen = new Set();
        methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
        let i = 0;
        const ordinals = methodSpecs.map((ms, idx) => {
          if (ms.explicit !== null) return ms.explicit;
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
        
        // Cache the result
        this._ordinalCache[cacheKey] = ordinals;
        return ordinals;
      }
    };
  })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 
 // Fallback opaque struct type for unknown external types
 mojo.internal.OpaqueStruct = mojo.internal.OpaqueStruct || {
   $: {
     structSpec: { name: 'OpaqueStruct', packedSize: 8, fields: [], versions: [{version: 0, packedSize: 8}] },
     encode: function(value, encoder, byteOffset, bitOffset, nullable) {
       if (value !== null && value !== undefined) {
         console.warn('[MojoJS] Encoding OpaqueStruct! Field may be missing its real spec.', value);
       }
       encoder.encodeOffset(byteOffset, 0);
     },
     encodeNull: function(encoder, byteOffset) { },
     decode: function(decoder, byteOffset, bitOffset, nullable) {
       try {
         const offset = decoder.decodeOffset(byteOffset);
         return offset ? { _opaqueOffset: offset } : null;
       } catch (e) {
         return null;
       }
     },
     arrayElementSize: nullable => 8,
     isValidObjectKeyType: false,
   }
 };

 mojo.internal.bindings.new_tab_page = mojo.internal.bindings.new_tab_page || {};
mojo.internal.bindings.new_tab_page.mojom = mojo.internal.bindings.new_tab_page.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.ntp_tiles = mojo.internal.bindings.ntp_tiles || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.most_visited = mojo.internal.bindings.most_visited || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSourceSpec = mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec = mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannelSpec = mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogActionSpec = mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogActionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.new_tab_page.mojom.OptInStatusSpec = mojo.internal.bindings.new_tab_page.mojom.OptInStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec = mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec = mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.ThemeSpec = mojo.internal.bindings.new_tab_page.mojom.ThemeSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.ThemeSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.ThemeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.ThemeSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec = mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec = mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.DoodleSpec = mojo.internal.bindings.new_tab_page.mojom.DoodleSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.DoodleSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.DoodleSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.DoodleSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec = mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec = mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec = mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PromoSpec = mojo.internal.bindings.new_tab_page.mojom.PromoSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PromoSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PromoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PromoSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec = mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory || {};
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactorySpec = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactorySpec || { $ : {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactorySpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactorySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactorySpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory.$interfaceName = 'new_tab_page.mojom.PageHandlerFactory';
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler = mojo.internal.bindings.new_tab_page.mojom.PageHandler || {};
mojo.internal.bindings.new_tab_page.mojom.PageHandlerSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandlerSpec || { $ : {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandlerSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandlerSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler.$interfaceName = 'new_tab_page.mojom.PageHandler';
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page = mojo.internal.bindings.new_tab_page.mojom.Page || {};
mojo.internal.bindings.new_tab_page.mojom.PageSpec = mojo.internal.bindings.new_tab_page.mojom.PageSpec || { $ : {} };
if (mojo.internal.bindings.new_tab_page.mojom.PageSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.PageSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.PageSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page.$interfaceName = 'new_tab_page.mojom.Page';
mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec = mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec || { $: {} };
if (mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$.structSpec && mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.most_visited = mojo.internal.bindings.most_visited || {};
mojo.internal.bindings.most_visited.mojom = mojo.internal.bindings.most_visited.mojom || {};
mojo.internal.bindings.most_visited.mojom.MostVisitedThemeSpec = mojo.internal.bindings.most_visited.mojom.MostVisitedThemeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.new_tab_page = mojo.internal.bindings.new_tab_page || {};
mojo.internal.bindings.new_tab_page.mojom = mojo.internal.bindings.new_tab_page.mojom || {};
mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentSpec = mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote = mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote || class {};
mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver = mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.new_tab_page = mojo.internal.bindings.new_tab_page || {};
mojo.internal.bindings.new_tab_page.mojom = mojo.internal.bindings.new_tab_page.mojom || {};
mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec = mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ntp_tiles = mojo.internal.bindings.ntp_tiles || {};
mojo.internal.bindings.ntp_tiles.mojom = mojo.internal.bindings.ntp_tiles.mojom || {};
mojo.internal.bindings.ntp_tiles.mojom.TileTypeSpec = mojo.internal.bindings.ntp_tiles.mojom.TileTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.skia.mojom = mojo.internal.bindings.skia.mojom || {};
mojo.internal.bindings.skia.mojom.SkColorSpec = mojo.internal.bindings.skia.mojom.SkColorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: NtpBackgroundImageSource
mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSource = {
  kNoImage: 0,
  kFirstPartyThemeWithoutDailyRefresh: 1,
  kFirstPartyThemeWithDailyRefresh: 2,
  kThirdPartyTheme: 3,
  kUploadedImage: 4,
  kWallpaperSearch: 5,
  kWallpaperSearchInspiration: 6,
};

// Enum: DoodleImageType
mojo.internal.bindings.new_tab_page.mojom.DoodleImageType = {
  kAnimation: 0,
  kStatic: 1,
};

// Enum: DoodleShareChannel
mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannel = {
  kFacebook: 0,
  kTwitter: 1,
  kEmail: 2,
  kLinkCopy: 3,
};

// Enum: CustomizeDialogAction
mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogAction = {
  kCancelClicked: 0,
  kDoneClicked: 1,
  kOpenClicked: 2,
  kBackgroundsBackClicked: 3,
  kBackgroundsNoBackgroundSelected: 4,
  kBackgroundsCollectionOpened: 5,
  kBackgroundsRefreshToggleClicked: 6,
  kBackgroundsImageSelected: 7,
  kBackgroundsUploadFromDeviceClicked: 8,
  kShortcutsCustomLinksClicked: 9,
  kShortcutsMostVisitedClicked: 10,
  kShortcutsVisibilityToggleClicked: 11,
};

// Enum: OptInStatus
mojo.internal.bindings.new_tab_page.mojom.OptInStatus = {
  kExplicitOptIn: 0,
  kImplicitOptIn: 1,
  kOptOut: 2,
};

// Interface: PageHandlerFactory
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('new_tab_page.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('new_tab_page.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMostVisitedSettings(arg_shortcuts_type, arg_shortcuts_visible) {
    return this.$.setMostVisitedSettings(arg_shortcuts_type, arg_shortcuts_visible);
  }
  getMostVisitedSettings() {
    return this.$.getMostVisitedSettings();
  }
  getDoodle() {
    return this.$.getDoodle();
  }
  updatePromoData() {
    return this.$.updatePromoData();
  }
  blocklistPromo(arg_promo_id) {
    return this.$.blocklistPromo(arg_promo_id);
  }
  undoBlocklistPromo(arg_promo_id) {
    return this.$.undoBlocklistPromo(arg_promo_id);
  }
  onDismissModule(arg_module_id) {
    return this.$.onDismissModule(arg_module_id);
  }
  onRestoreModule(arg_module_id) {
    return this.$.onRestoreModule(arg_module_id);
  }
  setModulesVisible(arg_visible) {
    return this.$.setModulesVisible(arg_visible);
  }
  updateDisabledModules() {
    return this.$.updateDisabledModules();
  }
  onModulesLoadedWithData(arg_module_ids) {
    return this.$.onModulesLoadedWithData(arg_module_ids);
  }
  onModuleUsed(arg_module_id) {
    return this.$.onModuleUsed(arg_module_id);
  }
  getModulesIdNames() {
    return this.$.getModulesIdNames();
  }
  getModulesEligibleForRemoval() {
    return this.$.getModulesEligibleForRemoval();
  }
  setModulesOrder(arg_module_ids) {
    return this.$.setModulesOrder(arg_module_ids);
  }
  getModulesOrder() {
    return this.$.getModulesOrder();
  }
  updateModulesLoadable() {
    return this.$.updateModulesLoadable();
  }
  setModulesDisabled(arg_module_ids, arg_disabled, arg_is_user_action) {
    return this.$.setModulesDisabled(arg_module_ids, arg_disabled, arg_is_user_action);
  }
  updateActionChipsVisibility() {
    return this.$.updateActionChipsVisibility();
  }
  updateFooterVisibility() {
    return this.$.updateFooterVisibility();
  }
  incrementComposeButtonShownCount() {
    return this.$.incrementComposeButtonShownCount();
  }
  maybeTriggerAutomaticCustomizeChromePromo() {
    return this.$.maybeTriggerAutomaticCustomizeChromePromo();
  }
  onOneGoogleBarRendered(arg_time) {
    return this.$.onOneGoogleBarRendered(arg_time);
  }
  onPromoRendered(arg_time, arg_log_url) {
    return this.$.onPromoRendered(arg_time, arg_log_url);
  }
  onCustomizeDialogAction(arg_action) {
    return this.$.onCustomizeDialogAction(arg_action);
  }
  onDoodleImageClicked(arg_type, arg_log_url) {
    return this.$.onDoodleImageClicked(arg_type, arg_log_url);
  }
  onDoodleImageRendered(arg_type, arg_time, arg_log_url) {
    return this.$.onDoodleImageRendered(arg_type, arg_time, arg_log_url);
  }
  onDoodleShared(arg_channel, arg_doodle_id, arg_share_id) {
    return this.$.onDoodleShared(arg_channel, arg_doodle_id, arg_share_id);
  }
  onPromoLinkClicked() {
    return this.$.onPromoLinkClicked();
  }
  onAppRendered(arg_time) {
    return this.$.onAppRendered(arg_time);
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('new_tab_page.mojom.PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMostVisitedSettings(arg_shortcuts_type, arg_shortcuts_visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      [arg_shortcuts_type, arg_shortcuts_visible],
      false);
  }

  getMostVisitedSettings() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec,
      [],
      false);
  }

  getDoodle() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec,
      [],
      false);
  }

  updatePromoData() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec,
      null,
      [],
      false);
  }

  blocklistPromo(arg_promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec,
      null,
      [arg_promo_id],
      false);
  }

  undoBlocklistPromo(arg_promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec,
      null,
      [arg_promo_id],
      false);
  }

  onDismissModule(arg_module_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec,
      null,
      [arg_module_id],
      false);
  }

  onRestoreModule(arg_module_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec,
      null,
      [arg_module_id],
      false);
  }

  setModulesVisible(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  updateDisabledModules() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec,
      null,
      [],
      false);
  }

  onModulesLoadedWithData(arg_module_ids) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec,
      null,
      [arg_module_ids],
      false);
  }

  onModuleUsed(arg_module_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec,
      null,
      [arg_module_id],
      false);
  }

  getModulesIdNames() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec,
      [],
      false);
  }

  getModulesEligibleForRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec,
      [],
      false);
  }

  setModulesOrder(arg_module_ids) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec,
      null,
      [arg_module_ids],
      false);
  }

  getModulesOrder() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec,
      [],
      false);
  }

  updateModulesLoadable() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setModulesDisabled(arg_module_ids, arg_disabled, arg_is_user_action) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec,
      null,
      [arg_module_ids, arg_disabled, arg_is_user_action],
      false);
  }

  updateActionChipsVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  updateFooterVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec,
      null,
      [],
      false);
  }

  incrementComposeButtonShownCount() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec,
      null,
      [],
      false);
  }

  maybeTriggerAutomaticCustomizeChromePromo() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec,
      null,
      [],
      false);
  }

  onOneGoogleBarRendered(arg_time) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec,
      null,
      [arg_time],
      false);
  }

  onPromoRendered(arg_time, arg_log_url) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec,
      null,
      [arg_time, arg_log_url],
      false);
  }

  onCustomizeDialogAction(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec,
      null,
      [arg_action],
      false);
  }

  onDoodleImageClicked(arg_type, arg_log_url) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec,
      null,
      [arg_type, arg_log_url],
      false);
  }

  onDoodleImageRendered(arg_type, arg_time, arg_log_url) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec,
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec,
      [arg_type, arg_time, arg_log_url],
      false);
  }

  onDoodleShared(arg_channel, arg_doodle_id, arg_share_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec,
      null,
      [arg_channel, arg_doodle_id, arg_share_id],
      false);
  }

  onPromoLinkClicked() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  onAppRendered(arg_time) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec,
      null,
      [arg_time],
      false);
  }

};

mojo.internal.bindings.new_tab_page.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('new_tab_page.mojom.PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.arg_shortcuts_type, params.arg_shortcuts_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMostVisitedSettings');
          const result = this.impl.getMostVisitedSettings();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getMostVisitedSettings FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDoodle');
          const result = this.impl.getDoodle();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_doodle' in response) ? response['arg_doodle'] : response;
              const resp_obj = { 'arg_doodle': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getDoodle FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePromoData');
          const result = this.impl.updatePromoData();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blocklistPromo');
          const result = this.impl.blocklistPromo(params.arg_promo_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoBlocklistPromo');
          const result = this.impl.undoBlocklistPromo(params.arg_promo_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDismissModule');
          const result = this.impl.onDismissModule(params.arg_module_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRestoreModule');
          const result = this.impl.onRestoreModule(params.arg_module_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesVisible');
          const result = this.impl.setModulesVisible(params.arg_visible);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDisabledModules');
          const result = this.impl.updateDisabledModules();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModulesLoadedWithData');
          const result = this.impl.onModulesLoadedWithData(params.arg_module_ids);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModuleUsed');
          const result = this.impl.onModuleUsed(params.arg_module_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesIdNames');
          const result = this.impl.getModulesIdNames();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_data' in response) ? response['arg_data'] : response;
              const resp_obj = { 'arg_data': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getModulesIdNames FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesEligibleForRemoval');
          const result = this.impl.getModulesEligibleForRemoval();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_module_ids' in response) ? response['arg_module_ids'] : response;
              const resp_obj = { 'arg_module_ids': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getModulesEligibleForRemoval FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesOrder');
          const result = this.impl.setModulesOrder(params.arg_module_ids);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModulesOrder');
          const result = this.impl.getModulesOrder();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_module_ids' in response) ? response['arg_module_ids'] : response;
              const resp_obj = { 'arg_module_ids': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getModulesOrder FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateModulesLoadable');
          const result = this.impl.updateModulesLoadable();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesDisabled');
          const result = this.impl.setModulesDisabled(params.arg_module_ids, params.arg_disabled, params.arg_is_user_action);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateActionChipsVisibility');
          const result = this.impl.updateActionChipsVisibility();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFooterVisibility');
          const result = this.impl.updateFooterVisibility();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.incrementComposeButtonShownCount');
          const result = this.impl.incrementComposeButtonShownCount();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeTriggerAutomaticCustomizeChromePromo');
          const result = this.impl.maybeTriggerAutomaticCustomizeChromePromo();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOneGoogleBarRendered');
          const result = this.impl.onOneGoogleBarRendered(params.arg_time);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPromoRendered');
          const result = this.impl.onPromoRendered(params.arg_time, params.arg_log_url);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCustomizeDialogAction');
          const result = this.impl.onCustomizeDialogAction(params.arg_action);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleImageClicked');
          const result = this.impl.onDoodleImageClicked(params.arg_type, params.arg_log_url);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleImageRendered');
          const result = this.impl.onDoodleImageRendered(params.arg_type, params.arg_time, params.arg_log_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] onDoodleImageRendered FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDoodleShared');
          const result = this.impl.onDoodleShared(params.arg_channel, params.arg_doodle_id, params.arg_share_id);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPromoLinkClicked');
          const result = this.impl.onPromoLinkClicked();
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppRendered');
          const result = this.impl.onAppRendered(params.arg_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageHandlerReceiver = mojo.internal.bindings.new_tab_page.mojom.PageHandlerReceiver;

mojo.internal.bindings.new_tab_page.mojom.PageHandlerPtr = mojo.internal.bindings.new_tab_page.mojom.PageHandlerRemote;
mojo.internal.bindings.new_tab_page.mojom.PageHandlerRequest = mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.bindings.new_tab_page.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page.mojom.Page';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.new_tab_page.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.new_tab_page.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTheme(arg_theme) {
    return this.$.setTheme(arg_theme);
  }
  setDisabledModules(arg_all, arg_ids) {
    return this.$.setDisabledModules(arg_all, arg_ids);
  }
  setModulesLoadable() {
    return this.$.setModulesLoadable();
  }
  setActionChipsVisibility(arg_visible) {
    return this.$.setActionChipsVisibility(arg_visible);
  }
  setPromo(arg_promo) {
    return this.$.setPromo(arg_promo);
  }
  showWebstoreToast() {
    return this.$.showWebstoreToast();
  }
  setWallpaperSearchButtonVisibility(arg_visible) {
    return this.$.setWallpaperSearchButtonVisibility(arg_visible);
  }
  footerVisibilityUpdated(arg_visible) {
    return this.$.footerVisibilityUpdated(arg_visible);
  }
  connectToParentDocument(arg_child_untrusted_document_remote) {
    return this.$.connectToParentDocument(arg_child_untrusted_document_remote);
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('new_tab_page.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setTheme(arg_theme) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec,
      null,
      [arg_theme],
      false);
  }

  setDisabledModules(arg_all, arg_ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec,
      null,
      [arg_all, arg_ids],
      false);
  }

  setModulesLoadable() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec,
      null,
      [],
      false);
  }

  setActionChipsVisibility(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  setPromo(arg_promo) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec,
      null,
      [arg_promo],
      false);
  }

  showWebstoreToast() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec,
      null,
      [],
      false);
  }

  setWallpaperSearchButtonVisibility(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  footerVisibilityUpdated(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  connectToParentDocument(arg_child_untrusted_document_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec,
      null,
      [arg_child_untrusted_document_remote],
      false);
  }

};

mojo.internal.bindings.new_tab_page.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.new_tab_page.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.new_tab_page.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('new_tab_page.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
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
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.arg_theme);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisabledModules');
          const result = this.impl.setDisabledModules(params.arg_all, params.arg_ids);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesLoadable');
          const result = this.impl.setModulesLoadable();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActionChipsVisibility');
          const result = this.impl.setActionChipsVisibility(params.arg_visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPromo');
          const result = this.impl.setPromo(params.arg_promo);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showWebstoreToast');
          const result = this.impl.showWebstoreToast();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWallpaperSearchButtonVisibility');
          const result = this.impl.setWallpaperSearchButtonVisibility(params.arg_visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.footerVisibilityUpdated');
          const result = this.impl.footerVisibilityUpdated(params.arg_visible);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToParentDocument');
          const result = this.impl.connectToParentDocument(params.arg_child_untrusted_document_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.new_tab_page.mojom.PageReceiver = mojo.internal.bindings.new_tab_page.mojom.PageReceiver;

mojo.internal.bindings.new_tab_page.mojom.PagePtr = mojo.internal.bindings.new_tab_page.mojom.PageRemote;
mojo.internal.bindings.new_tab_page.mojom.PageRequest = mojo.internal.bindings.new_tab_page.mojom.PagePendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: PromoPart
mojo.internal.Union(
    mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec, 'new_tab_page.mojom.PromoPart', {
      'arg_image': {
        'ordinal': 0,
        'type': mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec,
        'nullable': false,
      },
      'arg_link': {
        'ordinal': 1,
        'type': mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec,
        'nullable': false,
      },
      'arg_text': {
        'ordinal': 2,
        'type': mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec,
        'nullable': false,
      },
    });

// Struct: BackgroundImage
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec, 'new_tab_page.mojom.BackgroundImage', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_2x', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_attribution_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_size', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_repeat_x', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_repeat_y', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_position_x', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_position_y', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_image_source', 64, 0, mojo.internal.bindings.new_tab_page.mojom.NtpBackgroundImageSourceSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: Theme
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.ThemeSpec, 'new_tab_page.mojom.Theme', [
      mojo.internal.StructField('arg_text_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_background_color', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_baseline', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_gm3', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_custom_background', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_daily_refresh_enabled', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_dark', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_logo_color', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_collection_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image', 40, 0, mojo.internal.bindings.new_tab_page.mojom.BackgroundImageSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_attribution_1', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_attribution_2', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_background_image_attribution_url', 64, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_most_visited', 72, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedThemeSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: ImageDoodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec, 'new_tab_page.mojom.ImageDoodle', [
      mojo.internal.StructField('arg_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_animation_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_width', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_background_color', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_impression_log_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_animation_impression_log_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AllModeImageDoodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec, 'new_tab_page.mojom.AllModeImageDoodle', [
      mojo.internal.StructField('arg_light', 0, 0, mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_dark', 8, 0, mojo.internal.bindings.new_tab_page.mojom.ImageDoodleSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_on_click_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_share_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Doodle
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.DoodleSpec, 'new_tab_page.mojom.Doodle', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.new_tab_page.mojom.AllModeImageDoodleSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoImagePart
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoImagePartSpec, 'new_tab_page.mojom.PromoImagePart', [
      mojo.internal.StructField('arg_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_target', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoLinkPart
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoLinkPartSpec, 'new_tab_page.mojom.PromoLinkPart', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PromoTextPart
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoTextPartSpec, 'new_tab_page.mojom.PromoTextPart', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Promo
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PromoSpec, 'new_tab_page.mojom.Promo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_middle_slot_parts', 16, 0, mojo.internal.Array(mojo.internal.bindings.new_tab_page.mojom.PromoPartSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ModuleIdName
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec, 'new_tab_page.mojom.ModuleIdName', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'new_tab_page.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.new_tab_page.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.new_tab_page.mojom.PageHandlerPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetMostVisitedSettings_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('arg_shortcuts_type', 0, 0, mojo.internal.bindings.ntp_tiles.mojom.TileTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_shortcuts_visible', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetMostVisitedSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetMostVisitedSettings_ResponseParams', [
      mojo.internal.StructField('arg_shortcuts_type', 0, 0, mojo.internal.bindings.ntp_tiles.mojom.TileTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_shortcuts_visible', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetDoodle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetDoodle_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetDoodle_ResponseParams', [
      mojo.internal.StructField('arg_doodle', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdatePromoData_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdatePromoData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_BlocklistPromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_BlocklistPromo_Params', [
      mojo.internal.StructField('arg_promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UndoBlocklistPromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_UndoBlocklistPromo_Params', [
      mojo.internal.StructField('arg_promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDismissModule_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDismissModule_Params', [
      mojo.internal.StructField('arg_module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnRestoreModule_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnRestoreModule_Params', [
      mojo.internal.StructField('arg_module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesVisible_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesVisible_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateDisabledModules_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateDisabledModules_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnModulesLoadedWithData_Params', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnModuleUsed_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnModuleUsed_Params', [
      mojo.internal.StructField('arg_module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesIdNames_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesIdNames_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.new_tab_page.mojom.ModuleIdNameSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesEligibleForRemoval_ResponseParams', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesOrder_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesOrder_Params', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesOrder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_GetModulesOrder_ResponseParams', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateModulesLoadable_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateModulesLoadable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_SetModulesDisabled_ParamsSpec, 'new_tab_page.mojom.PageHandler_SetModulesDisabled_Params', [
      mojo.internal.StructField('arg_module_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_disabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_user_action', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateActionChipsVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_UpdateFooterVisibility_ParamsSpec, 'new_tab_page.mojom.PageHandler_UpdateFooterVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_ParamsSpec, 'new_tab_page.mojom.PageHandler_IncrementComposeButtonShownCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec, 'new_tab_page.mojom.PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnOneGoogleBarRendered_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnPromoRendered_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnCustomizeDialogAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.new_tab_page.mojom.CustomizeDialogActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageClicked_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageClicked_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageRendered_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleImageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_log_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleImageRendered_ResponseParams', [
      mojo.internal.StructField('arg_image_click_params', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_interaction_log_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_share_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnDoodleShared_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnDoodleShared_Params', [
      mojo.internal.StructField('arg_channel', 0, 0, mojo.internal.bindings.new_tab_page.mojom.DoodleShareChannelSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_doodle_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_share_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnPromoLinkClicked_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnPromoLinkClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.PageHandler_OnAppRendered_ParamsSpec, 'new_tab_page.mojom.PageHandler_OnAppRendered_Params', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetTheme_ParamsSpec, 'new_tab_page.mojom.Page_SetTheme_Params', [
      mojo.internal.StructField('arg_theme', 0, 0, mojo.internal.bindings.new_tab_page.mojom.ThemeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetDisabledModules_ParamsSpec, 'new_tab_page.mojom.Page_SetDisabledModules_Params', [
      mojo.internal.StructField('arg_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetModulesLoadable_ParamsSpec, 'new_tab_page.mojom.Page_SetModulesLoadable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetActionChipsVisibility_ParamsSpec, 'new_tab_page.mojom.Page_SetActionChipsVisibility_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetPromo_ParamsSpec, 'new_tab_page.mojom.Page_SetPromo_Params', [
      mojo.internal.StructField('arg_promo', 0, 0, mojo.internal.bindings.new_tab_page.mojom.PromoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_ShowWebstoreToast_ParamsSpec, 'new_tab_page.mojom.Page_ShowWebstoreToast_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_ParamsSpec, 'new_tab_page.mojom.Page_SetWallpaperSearchButtonVisibility_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_FooterVisibilityUpdated_ParamsSpec, 'new_tab_page.mojom.Page_FooterVisibilityUpdated_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.new_tab_page.mojom.Page_ConnectToParentDocument_ParamsSpec, 'new_tab_page.mojom.Page_ConnectToParentDocument_Params', [
      mojo.internal.StructField('arg_child_untrusted_document_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.new_tab_page.mojom.MicrosoftAuthUntrustedDocumentRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

