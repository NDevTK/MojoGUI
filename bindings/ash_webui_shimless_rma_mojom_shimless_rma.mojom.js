// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/shimless_rma/mojom/shimless_rma.mojom
 // Module: ash.shimless_rma.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "personal_context.notice.mojom.PageHandler": true, "browser.personal_context_internals.mojom.PageHandlerFactory": true, "browser.personal_context_internals.mojom.PageHandler": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_verification_tokens.mojom.PrivateVerificationTokensProvider": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorConnectionWatcher": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '151.0.7902.0';
        
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

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.shimless_rma = mojo.internal.bindings.ash.shimless_rma || {};
mojo.internal.bindings.ash.shimless_rma.mojom = mojo.internal.bindings.ash.shimless_rma.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};

mojo.internal.bindings.ash.shimless_rma.mojom.StateSpec = mojo.internal.bindings.ash.shimless_rma.mojom.StateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec = mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateOperationSpec = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateOperationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateErrorCodeSpec = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateErrorCodeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.ComponentTypeSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ComponentTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.ComponentRepairStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ComponentRepairStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec = mojo.internal.bindings.ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationSetupInstructionSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationSetupInstructionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationOverallStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationOverallStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningErrorSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationErrorSpec = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.ShutdownMethodSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShutdownMethodSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.FeatureLevelSpec = mojo.internal.bindings.ash.shimless_rma.mojom.FeatureLevelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyErrorSpec = mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyErrorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec = mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.QrCodeSpec = mojo.internal.bindings.ash.shimless_rma.mojom.QrCodeSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.QrCodeSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.QrCodeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.QrCodeSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec = mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver = mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver.$interfaceName = 'ash.shimless_rma.mojom.ErrorObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver.$interfaceName = 'ash.shimless_rma.mojom.OsUpdateObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver.$interfaceName = 'ash.shimless_rma.mojom.CalibrationObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver.$interfaceName = 'ash.shimless_rma.mojom.ProvisioningObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver.$interfaceName = 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver = mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver.$interfaceName = 'ash.shimless_rma.mojom.PowerCableStateObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver = mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver.$interfaceName = 'ash.shimless_rma.mojom.ExternalDiskStateObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver.$interfaceName = 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver.$interfaceName = 'ash.shimless_rma.mojom.FinalizationObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver || {};
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverSpec = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver.$interfaceName = 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver';
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService || {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceSpec || { $ : {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService.$interfaceName = 'ash.shimless_rma.mojom.ShimlessRmaService';
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec.$ = {};
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec || { $: {} };
if (mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec.$.structSpec && mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.shimless_rma = mojo.internal.bindings.ash.shimless_rma || {};
mojo.internal.bindings.ash.shimless_rma.mojom = mojo.internal.bindings.ash.shimless_rma.mojom || {};
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.shimless_rma = mojo.internal.bindings.ash.shimless_rma || {};
mojo.internal.bindings.ash.shimless_rma.mojom = mojo.internal.bindings.ash.shimless_rma.mojom || {};
mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec = mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.shimless_rma = mojo.internal.bindings.ash.shimless_rma || {};
mojo.internal.bindings.ash.shimless_rma.mojom = mojo.internal.bindings.ash.shimless_rma.mojom || {};
mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec = mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.FilePathSpec = mojo.internal.bindings.mojo_base.mojom.FilePathSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: State
mojo.internal.bindings.ash.shimless_rma.mojom.State = {
  kUnknown: 0,
  kWelcomeScreen: 1,
  kConfigureNetwork: 2,
  kUpdateOs: 3,
  kSelectComponents: 4,
  kChooseDestination: 5,
  kChooseWipeDevice: 6,
  kChooseWriteProtectDisableMethod: 7,
  kEnterRSUWPDisableCode: 8,
  kWaitForManualWPDisable: 9,
  kWPDisableComplete: 10,
  kUpdateRoFirmware: 11,
  kRestock: 12,
  kUpdateDeviceInformation: 13,
  kCheckCalibration: 14,
  kSetupCalibration: 15,
  kRunCalibration: 16,
  kProvisionDevice: 17,
  kWaitForManualWPEnable: 18,
  kFinalize: 19,
  kRepairComplete: 20,
  kHardwareError: 21,
  kReboot: 22,
};

// Enum: RmadErrorCode
mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCode = {
  kNotSet: 0,
  kOk: 1,
  kWait: 2,
  kExpectReboot: 3,
  kExpectShutdown: 4,
  kRmaNotRequired: 5,
  kStateHandlerMissing: 6,
  kStateHandlerInitializationFailed: 7,
  kRequestInvalid: 8,
  kRequestArgsMissing: 9,
  kRequestArgsViolation: 10,
  kTransitionFailed: 11,
  kAbortFailed: 12,
  kMissingComponent: 13,
  kWriteProtectDisableRsuNoChallenge: 14,
  kWriteProtectDisableRsuCodeInvalid: 15,
  kWriteProtectDisableBatteryNotDisconnected: 16,
  kWriteProtectSignalNotDetected: 17,
  kReimagingDownloadNoNetwork: 18,
  kReimagingDownloadNetworkError: 19,
  kReimagingDownloadCancelled: 20,
  kReimagingUsbNotFound: 21,
  kReimagingUsbTooManyFound: 22,
  kReimagingUsbInvalidImage: 23,
  kReimagingImagingFailed: 24,
  kReimagingUnknownFailure: 25,
  kDeviceInfoInvalid: 26,
  kCalibrationComponentMissing: 27,
  kCalibrationStatusMissing: 28,
  kCalibrationComponentInvalid: 29,
  kCalibrationFailed: 30,
  kProvisioningFailed: 31,
  kPowerwashFailed: 32,
  kFinalizationFailed: 33,
  kLogUploadFtpServerCannotConnect: 34,
  kLogUploadFtpServerConnectionRejected: 35,
  kLogUploadFtpServerTransferFailed: 36,
  kCannotCancelRma: 37,
  kCannotGetLog: 38,
  kDaemonInitializationFailed: 39,
  kUpdateRoFirmwareFailed: 40,
  kWpEnabled: 41,
  kCannotWrite: 42,
  kCannotSaveLog: 43,
  kCannotRecordBrowserAction: 44,
  kUsbNotFound: 45,
};

// Enum: OsUpdateOperation
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateOperation = {
  kIdle: 0,
  kCheckingForUpdate: 1,
  kUpdateAvailable: 2,
  kDownloading: 3,
  kVerifying: 4,
  kFinalizing: 5,
  kUpdatedNeedReboot: 6,
  kReportingErrorEvent: 7,
  kAttemptingRollback: 8,
  kDisabled: 9,
  kNeedPermissionToUpdate: 10,
  kCleanupPreviousUpdate: 11,
  kUpdatedButDeferred: 12,
};

// Enum: UpdateErrorCode
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateErrorCode = {
  kSuccess: 0,
  kDownloadError: 1,
  kOtherError: 2,
};

// Enum: ComponentType
mojo.internal.bindings.ash.shimless_rma.mojom.ComponentType = {
  kComponentUnknown: 0,
  kAudioCodec: 1,
  kBattery: 2,
  kStorage: 3,
  kVpdCached: 4,
  kNetwork: 5,
  kCamera: 6,
  kStylus: 7,
  kTouchpad: 8,
  kTouchsreen: 9,
  kDram: 10,
  kDisplayPanel: 11,
  kCellular: 12,
  kEthernet: 13,
  kWireless: 14,
  kScreen: 15,
  kBaseAccelerometer: 16,
  kLidAccelerometer: 17,
  kBaseGyroscope: 18,
  kLidGyroscope: 19,
  kKeyboard: 20,
  kPowerButton: 21,
};

// Enum: ComponentRepairStatus
mojo.internal.bindings.ash.shimless_rma.mojom.ComponentRepairStatus = {
  kRepairUnknown: 0,
  kOriginal: 1,
  kReplaced: 2,
  kMissing: 3,
};

// Enum: WriteProtectDisableCompleteAction
mojo.internal.bindings.ash.shimless_rma.mojom.WriteProtectDisableCompleteAction = {
  kUnknown: 0,
  kSkippedAssembleDevice: 1,
  kCompleteAssembleDevice: 2,
  kCompleteKeepDeviceOpen: 3,
  kCompleteNoOp: 4,
};

// Enum: UpdateRoFirmwareStatus
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareStatus = {
  kUnknown: 0,
  kWaitUsb: 1,
  kFileNotFound: 2,
  kDownloading: 3,
  kUpdating: 4,
  kRebooting: 5,
  kComplete: 6,
};

// Enum: CalibrationSetupInstruction
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationSetupInstruction = {
  kCalibrationInstructionUnknown: 0,
  kCalibrationInstructionPlaceBaseOnFlatSurface: 1,
  kCalibrationInstructionPlaceLidOnFlatSurface: 2,
};

// Enum: CalibrationOverallStatus
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationOverallStatus = {
  kCalibrationOverallComplete: 1,
  kCalibrationOverallCurrentRoundComplete: 2,
  kCalibrationOverallCurrentRoundFailed: 3,
  kCalibrationOverallInitializationFailed: 4,
};

// Enum: CalibrationStatus
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationStatus = {
  kCalibrationWaiting: 1,
  kCalibrationInProgress: 2,
  kCalibrationComplete: 3,
  kCalibrationFailed: 4,
  kCalibrationSkip: 5,
};

// Enum: ProvisioningStatus
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningStatus = {
  kInProgress: 1,
  kComplete: 2,
  kFailedBlocking: 3,
  kFailedNonBlocking: 4,
};

// Enum: ProvisioningError
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningError = {
  kUnknown: 0,
  kInternal: 1,
  kWpEnabled: 2,
  kCannotRead: 3,
  kCannotWrite: 4,
  kGenerateSecret: 5,
  kMissingBaseAccelerometer: 6,
  kMissingLidAccelerometer: 7,
  kMissingBaseGyroscope: 8,
  kMissingLidGyroscope: 9,
  kCr50: 10,
  kGbb: 11,
};

// Enum: FinalizationStatus
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationStatus = {
  kInProgress: 1,
  kComplete: 2,
  kFailedBlocking: 3,
  kFailedNonBlocking: 4,
};

// Enum: FinalizationError
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationError = {
  kUnknown: 0,
  kInternal: 1,
  kCannotEnableHardwareWp: 2,
  kCannotEnableSoftwareWp: 3,
  kCr50: 4,
  kGbb: 5,
};

// Enum: ShutdownMethod
mojo.internal.bindings.ash.shimless_rma.mojom.ShutdownMethod = {
  kUnknown: 0,
  kReboot: 1,
  kShutdown: 2,
  kBatteryCutoff: 3,
};

// Enum: FeatureLevel
mojo.internal.bindings.ash.shimless_rma.mojom.FeatureLevel = {
  kRmadFeatureLevelUnsupported: 0,
  kRmadFeatureLevelUnknown: 1,
  kRmadFeatureLevel0: 2,
  kRmadFeatureLevel1: 3,
};

// Enum: Show3pDiagnosticsAppResult
mojo.internal.bindings.ash.shimless_rma.mojom.Show3pDiagnosticsAppResult = {
  kOk: 0,
  kAppNotInstalled: 1,
  kFailedToLoad: 2,
};

// Enum: StatePropertyError
mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyError = {
  kUnsupported: 0,
};

// Interface: ErrorObserver
mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ErrorObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onError(arg_error) {
    return this.$.onError(arg_error);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ErrorObserver', [
      { explicit: null },
    ]);
  }

  onError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ErrorObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ErrorObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverPendingReceiver;


// Interface: OsUpdateObserver
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.OsUpdateObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onOsUpdateProgressUpdated(arg_operation, arg_progress, arg_update_error_code) {
    return this.$.onOsUpdateProgressUpdated(arg_operation, arg_progress, arg_update_error_code);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.OsUpdateObserver', [
      { explicit: null },
    ]);
  }

  onOsUpdateProgressUpdated(arg_operation, arg_progress, arg_update_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec,
      null,
      [arg_operation, arg_progress, arg_update_error_code],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.OsUpdateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.OsUpdateObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOsUpdateProgressUpdated');
          const result = this.impl.onOsUpdateProgressUpdated(params.arg_operation, params.arg_progress, params.arg_update_error_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverPendingReceiver;


// Interface: CalibrationObserver
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.CalibrationObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCalibrationUpdated(arg_componentStatus) {
    return this.$.onCalibrationUpdated(arg_componentStatus);
  }
  onCalibrationStepComplete(arg_status) {
    return this.$.onCalibrationStepComplete(arg_status);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.CalibrationObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCalibrationUpdated(arg_componentStatus) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec,
      null,
      [arg_componentStatus],
      false);
  }

  onCalibrationStepComplete(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.CalibrationObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.CalibrationObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCalibrationUpdated');
          const result = this.impl.onCalibrationUpdated(params.arg_componentStatus);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCalibrationStepComplete');
          const result = this.impl.onCalibrationStepComplete(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverPendingReceiver;


// Interface: ProvisioningObserver
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ProvisioningObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProvisioningUpdated(arg_status, arg_progress, arg_error) {
    return this.$.onProvisioningUpdated(arg_status, arg_progress, arg_error);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ProvisioningObserver', [
      { explicit: null },
    ]);
  }

  onProvisioningUpdated(arg_status, arg_progress, arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec,
      null,
      [arg_status, arg_progress, arg_error],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ProvisioningObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ProvisioningObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProvisioningUpdated');
          const result = this.impl.onProvisioningUpdated(params.arg_status, params.arg_progress, params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverPendingReceiver;


// Interface: HardwareWriteProtectionStateObserver
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHardwareWriteProtectionStateChanged(arg_enabled) {
    return this.$.onHardwareWriteProtectionStateChanged(arg_enabled);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver', [
      { explicit: null },
    ]);
  }

  onHardwareWriteProtectionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHardwareWriteProtectionStateChanged');
          const result = this.impl.onHardwareWriteProtectionStateChanged(params.arg_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverPendingReceiver;


// Interface: PowerCableStateObserver
mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.PowerCableStateObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPowerCableStateChanged(arg_plugged_in) {
    return this.$.onPowerCableStateChanged(arg_plugged_in);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.PowerCableStateObserver', [
      { explicit: null },
    ]);
  }

  onPowerCableStateChanged(arg_plugged_in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec,
      null,
      [arg_plugged_in],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.PowerCableStateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.PowerCableStateObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPowerCableStateChanged');
          const result = this.impl.onPowerCableStateChanged(params.arg_plugged_in);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverPendingReceiver;


// Interface: ExternalDiskStateObserver
mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ExternalDiskStateObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onExternalDiskStateChanged(arg_detected) {
    return this.$.onExternalDiskStateChanged(arg_detected);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ExternalDiskStateObserver', [
      { explicit: null },
    ]);
  }

  onExternalDiskStateChanged(arg_detected) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec,
      null,
      [arg_detected],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ExternalDiskStateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ExternalDiskStateObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onExternalDiskStateChanged');
          const result = this.impl.onExternalDiskStateChanged(params.arg_detected);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverPendingReceiver;


// Interface: HardwareVerificationStatusObserver
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHardwareVerificationResult(arg_result) {
    return this.$.onHardwareVerificationResult(arg_result);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.HardwareVerificationStatusObserver', [
      { explicit: null },
    ]);
  }

  onHardwareVerificationResult(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.HardwareVerificationStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.HardwareVerificationStatusObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHardwareVerificationResult');
          const result = this.impl.onHardwareVerificationResult(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverPendingReceiver;


// Interface: FinalizationObserver
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.FinalizationObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFinalizationUpdated(arg_status, arg_progress, arg_error) {
    return this.$.onFinalizationUpdated(arg_status, arg_progress, arg_error);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.FinalizationObserver', [
      { explicit: null },
    ]);
  }

  onFinalizationUpdated(arg_status, arg_progress, arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec,
      null,
      [arg_status, arg_progress, arg_error],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.FinalizationObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.FinalizationObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFinalizationUpdated');
          const result = this.impl.onFinalizationUpdated(params.arg_status, params.arg_progress, params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverPendingReceiver;


// Interface: UpdateRoFirmwareObserver
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUpdateRoFirmwareStatusChanged(arg_status) {
    return this.$.onUpdateRoFirmwareStatusChanged(arg_status);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.UpdateRoFirmwareObserver', [
      { explicit: null },
    ]);
  }

  onUpdateRoFirmwareStatusChanged(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.UpdateRoFirmwareObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.UpdateRoFirmwareObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdateRoFirmwareStatusChanged');
          const result = this.impl.onUpdateRoFirmwareStatusChanged(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverPtr = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRequest = mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverPendingReceiver;


// Interface: ShimlessRmaService
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceRemote = class {
  static get $interfaceName() {
    return 'ash.shimless_rma.mojom.ShimlessRmaService';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCurrentState() {
    return this.$.getCurrentState();
  }
  getStateProperties() {
    return this.$.getStateProperties();
  }
  transitionPreviousState() {
    return this.$.transitionPreviousState();
  }
  abortRma() {
    return this.$.abortRma();
  }
  beginFinalization() {
    return this.$.beginFinalization();
  }
  trackConfiguredNetworks() {
    return this.$.trackConfiguredNetworks();
  }
  networkSelectionComplete() {
    return this.$.networkSelectionComplete();
  }
  getCurrentOsVersion() {
    return this.$.getCurrentOsVersion();
  }
  checkForOsUpdates() {
    return this.$.checkForOsUpdates();
  }
  updateOs() {
    return this.$.updateOs();
  }
  updateOsSkipped() {
    return this.$.updateOsSkipped();
  }
  setSameOwner() {
    return this.$.setSameOwner();
  }
  setDifferentOwner() {
    return this.$.setDifferentOwner();
  }
  setWipeDevice(arg_should_wipe_device) {
    return this.$.setWipeDevice(arg_should_wipe_device);
  }
  setManuallyDisableWriteProtect() {
    return this.$.setManuallyDisableWriteProtect();
  }
  setRsuDisableWriteProtect() {
    return this.$.setRsuDisableWriteProtect();
  }
  getRsuDisableWriteProtectChallenge() {
    return this.$.getRsuDisableWriteProtectChallenge();
  }
  getRsuDisableWriteProtectHwid() {
    return this.$.getRsuDisableWriteProtectHwid();
  }
  getRsuDisableWriteProtectChallengeQrCode() {
    return this.$.getRsuDisableWriteProtectChallengeQrCode();
  }
  setRsuDisableWriteProtectCode(arg_code) {
    return this.$.setRsuDisableWriteProtectCode(arg_code);
  }
  writeProtectManuallyDisabled() {
    return this.$.writeProtectManuallyDisabled();
  }
  getWriteProtectDisableCompleteAction() {
    return this.$.getWriteProtectDisableCompleteAction();
  }
  confirmManualWpDisableComplete() {
    return this.$.confirmManualWpDisableComplete();
  }
  getComponentList() {
    return this.$.getComponentList();
  }
  setComponentList(arg_components) {
    return this.$.setComponentList(arg_components);
  }
  reworkMainboard() {
    return this.$.reworkMainboard();
  }
  roFirmwareUpdateComplete() {
    return this.$.roFirmwareUpdateComplete();
  }
  shutdownForRestock() {
    return this.$.shutdownForRestock();
  }
  continueFinalizationAfterRestock() {
    return this.$.continueFinalizationAfterRestock();
  }
  getRegionList() {
    return this.$.getRegionList();
  }
  getSkuList() {
    return this.$.getSkuList();
  }
  getCustomLabelList() {
    return this.$.getCustomLabelList();
  }
  getSkuDescriptionList() {
    return this.$.getSkuDescriptionList();
  }
  getOriginalSerialNumber() {
    return this.$.getOriginalSerialNumber();
  }
  getOriginalRegion() {
    return this.$.getOriginalRegion();
  }
  getOriginalSku() {
    return this.$.getOriginalSku();
  }
  getOriginalCustomLabel() {
    return this.$.getOriginalCustomLabel();
  }
  getOriginalDramPartNumber() {
    return this.$.getOriginalDramPartNumber();
  }
  getOriginalFeatureLevel() {
    return this.$.getOriginalFeatureLevel();
  }
  setDeviceInformation(arg_serial_number, arg_region_index, arg_sku_index, arg_custom_label_index, arg_dram_part_number, arg_is_chassis_branded, arg_hw_compliance_version) {
    return this.$.setDeviceInformation(arg_serial_number, arg_region_index, arg_sku_index, arg_custom_label_index, arg_dram_part_number, arg_is_chassis_branded, arg_hw_compliance_version);
  }
  getCalibrationComponentList() {
    return this.$.getCalibrationComponentList();
  }
  getCalibrationSetupInstructions() {
    return this.$.getCalibrationSetupInstructions();
  }
  startCalibration(arg_components) {
    return this.$.startCalibration(arg_components);
  }
  runCalibrationStep() {
    return this.$.runCalibrationStep();
  }
  continueCalibration() {
    return this.$.continueCalibration();
  }
  calibrationComplete() {
    return this.$.calibrationComplete();
  }
  retryProvisioning() {
    return this.$.retryProvisioning();
  }
  provisioningComplete() {
    return this.$.provisioningComplete();
  }
  retryFinalization() {
    return this.$.retryFinalization();
  }
  finalizationComplete() {
    return this.$.finalizationComplete();
  }
  writeProtectManuallyEnabled() {
    return this.$.writeProtectManuallyEnabled();
  }
  getLog() {
    return this.$.getLog();
  }
  saveLog() {
    return this.$.saveLog();
  }
  getPowerwashRequired() {
    return this.$.getPowerwashRequired();
  }
  launchDiagnostics() {
    return this.$.launchDiagnostics();
  }
  endRma(arg_shutdown_method) {
    return this.$.endRma(arg_shutdown_method);
  }
  shutDownAfterHardwareError() {
    return this.$.shutDownAfterHardwareError();
  }
  criticalErrorExitToLogin() {
    return this.$.criticalErrorExitToLogin();
  }
  criticalErrorReboot() {
    return this.$.criticalErrorReboot();
  }
  get3pDiagnosticsProvider() {
    return this.$.get3pDiagnosticsProvider();
  }
  getInstallable3pDiagnosticsAppPath() {
    return this.$.getInstallable3pDiagnosticsAppPath();
  }
  installLastFound3pDiagnosticsApp() {
    return this.$.installLastFound3pDiagnosticsApp();
  }
  completeLast3pDiagnosticsInstallation(arg_is_approved) {
    return this.$.completeLast3pDiagnosticsInstallation(arg_is_approved);
  }
  show3pDiagnosticsApp() {
    return this.$.show3pDiagnosticsApp();
  }
  observeError(arg_observer) {
    return this.$.observeError(arg_observer);
  }
  observeOsUpdateProgress(arg_observer) {
    return this.$.observeOsUpdateProgress(arg_observer);
  }
  observeCalibrationProgress(arg_observer) {
    return this.$.observeCalibrationProgress(arg_observer);
  }
  observeProvisioningProgress(arg_observer) {
    return this.$.observeProvisioningProgress(arg_observer);
  }
  observeHardwareWriteProtectionState(arg_observer) {
    return this.$.observeHardwareWriteProtectionState(arg_observer);
  }
  observePowerCableState(arg_observer) {
    return this.$.observePowerCableState(arg_observer);
  }
  observeExternalDiskState(arg_observer) {
    return this.$.observeExternalDiskState(arg_observer);
  }
  observeHardwareVerificationStatus(arg_observer) {
    return this.$.observeHardwareVerificationStatus(arg_observer);
  }
  observeFinalizationStatus(arg_observer) {
    return this.$.observeFinalizationStatus(arg_observer);
  }
  observeRoFirmwareUpdateProgress(arg_observer) {
    return this.$.observeRoFirmwareUpdateProgress(arg_observer);
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ShimlessRmaService', [
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

  getCurrentState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec,
      [],
      false);
  }

  getStateProperties() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec,
      [],
      false);
  }

  transitionPreviousState() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec,
      [],
      false);
  }

  abortRma() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec,
      [],
      false);
  }

  beginFinalization() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec,
      [],
      false);
  }

  trackConfiguredNetworks() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec,
      null,
      [],
      false);
  }

  networkSelectionComplete() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec,
      [],
      false);
  }

  getCurrentOsVersion() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec,
      [],
      false);
  }

  checkForOsUpdates() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec,
      [],
      false);
  }

  updateOs() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec,
      [],
      false);
  }

  updateOsSkipped() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec,
      [],
      false);
  }

  setSameOwner() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec,
      [],
      false);
  }

  setDifferentOwner() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec,
      [],
      false);
  }

  setWipeDevice(arg_should_wipe_device) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec,
      [arg_should_wipe_device],
      false);
  }

  setManuallyDisableWriteProtect() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec,
      [],
      false);
  }

  setRsuDisableWriteProtect() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectChallenge() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectHwid() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec,
      [],
      false);
  }

  getRsuDisableWriteProtectChallengeQrCode() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec,
      [],
      false);
  }

  setRsuDisableWriteProtectCode(arg_code) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec,
      [arg_code],
      false);
  }

  writeProtectManuallyDisabled() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec,
      [],
      false);
  }

  getWriteProtectDisableCompleteAction() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec,
      [],
      false);
  }

  confirmManualWpDisableComplete() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec,
      [],
      false);
  }

  getComponentList() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec,
      [],
      false);
  }

  setComponentList(arg_components) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec,
      [arg_components],
      false);
  }

  reworkMainboard() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec,
      [],
      false);
  }

  roFirmwareUpdateComplete() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec,
      [],
      false);
  }

  shutdownForRestock() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec,
      [],
      false);
  }

  continueFinalizationAfterRestock() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec,
      [],
      false);
  }

  getRegionList() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec,
      [],
      false);
  }

  getSkuList() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec,
      [],
      false);
  }

  getCustomLabelList() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec,
      [],
      false);
  }

  getSkuDescriptionList() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalSerialNumber() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalRegion() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalSku() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalCustomLabel() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalDramPartNumber() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec,
      [],
      false);
  }

  getOriginalFeatureLevel() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec,
      [],
      false);
  }

  setDeviceInformation(arg_serial_number, arg_region_index, arg_sku_index, arg_custom_label_index, arg_dram_part_number, arg_is_chassis_branded, arg_hw_compliance_version) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec,
      [arg_serial_number, arg_region_index, arg_sku_index, arg_custom_label_index, arg_dram_part_number, arg_is_chassis_branded, arg_hw_compliance_version],
      false);
  }

  getCalibrationComponentList() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec,
      [],
      false);
  }

  getCalibrationSetupInstructions() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec,
      [],
      false);
  }

  startCalibration(arg_components) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec,
      [arg_components],
      false);
  }

  runCalibrationStep() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec,
      [],
      false);
  }

  continueCalibration() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec,
      [],
      false);
  }

  calibrationComplete() {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec,
      [],
      false);
  }

  retryProvisioning() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec,
      [],
      false);
  }

  provisioningComplete() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec,
      [],
      false);
  }

  retryFinalization() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec,
      [],
      false);
  }

  finalizationComplete() {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec,
      [],
      false);
  }

  writeProtectManuallyEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec,
      [],
      false);
  }

  getLog() {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec,
      [],
      false);
  }

  saveLog() {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec,
      [],
      false);
  }

  getPowerwashRequired() {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec,
      [],
      false);
  }

  launchDiagnostics() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec,
      null,
      [],
      false);
  }

  endRma(arg_shutdown_method) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec,
      [arg_shutdown_method],
      false);
  }

  shutDownAfterHardwareError() {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec,
      null,
      [],
      false);
  }

  criticalErrorExitToLogin() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec,
      [],
      false);
  }

  criticalErrorReboot() {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec,
      [],
      false);
  }

  get3pDiagnosticsProvider() {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec,
      [],
      false);
  }

  getInstallable3pDiagnosticsAppPath() {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec,
      [],
      false);
  }

  installLastFound3pDiagnosticsApp() {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec,
      [],
      false);
  }

  completeLast3pDiagnosticsInstallation(arg_is_approved) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec,
      [arg_is_approved],
      false);
  }

  show3pDiagnosticsApp() {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec,
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec,
      [],
      false);
  }

  observeError(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeOsUpdateProgress(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeCalibrationProgress(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeProvisioningProgress(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeHardwareWriteProtectionState(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observePowerCableState(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeExternalDiskState(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeHardwareVerificationStatus(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeFinalizationStatus(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeRoFirmwareUpdateProgress(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shimless_rma.mojom.ShimlessRmaService',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.shimless_rma.mojom.ShimlessRmaService', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCurrentState');
          const result = this.impl.getCurrentState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getCurrentState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStateProperties');
          const result = this.impl.getStateProperties();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_property_result' in response) ? response['arg_state_property_result'] : response;
              const resp_obj = { 'arg_state_property_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getStateProperties FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.transitionPreviousState');
          const result = this.impl.transitionPreviousState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] transitionPreviousState FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abortRma');
          const result = this.impl.abortRma();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] abortRma FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginFinalization');
          const result = this.impl.beginFinalization();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] beginFinalization FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.trackConfiguredNetworks');
          const result = this.impl.trackConfiguredNetworks();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.networkSelectionComplete');
          const result = this.impl.networkSelectionComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] networkSelectionComplete FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCurrentOsVersion');
          const result = this.impl.getCurrentOsVersion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_version' in response) ? response['arg_version'] : response;
              const resp_obj = { 'arg_version': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getCurrentOsVersion FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkForOsUpdates');
          const result = this.impl.checkForOsUpdates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] checkForOsUpdates FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOs');
          const result = this.impl.updateOs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_update_started' in response) ? response['arg_update_started'] : response;
              const resp_obj = { 'arg_update_started': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateOs FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOsSkipped');
          const result = this.impl.updateOsSkipped();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateOsSkipped FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSameOwner');
          const result = this.impl.setSameOwner();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setSameOwner FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDifferentOwner');
          const result = this.impl.setDifferentOwner();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setDifferentOwner FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWipeDevice');
          const result = this.impl.setWipeDevice(params.arg_should_wipe_device);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setWipeDevice FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setManuallyDisableWriteProtect');
          const result = this.impl.setManuallyDisableWriteProtect();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setManuallyDisableWriteProtect FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRsuDisableWriteProtect');
          const result = this.impl.setRsuDisableWriteProtect();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setRsuDisableWriteProtect FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRsuDisableWriteProtectChallenge');
          const result = this.impl.getRsuDisableWriteProtectChallenge();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_challenge' in response) ? response['arg_challenge'] : response;
              const resp_obj = { 'arg_challenge': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRsuDisableWriteProtectChallenge FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRsuDisableWriteProtectHwid');
          const result = this.impl.getRsuDisableWriteProtectHwid();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_hwid' in response) ? response['arg_hwid'] : response;
              const resp_obj = { 'arg_hwid': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRsuDisableWriteProtectHwid FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRsuDisableWriteProtectChallengeQrCode');
          const result = this.impl.getRsuDisableWriteProtectChallengeQrCode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_qr_code_data' in response) ? response['arg_qr_code_data'] : response;
              const resp_obj = { 'arg_qr_code_data': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRsuDisableWriteProtectChallengeQrCode FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRsuDisableWriteProtectCode');
          const result = this.impl.setRsuDisableWriteProtectCode(params.arg_code);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setRsuDisableWriteProtectCode FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeProtectManuallyDisabled');
          const result = this.impl.writeProtectManuallyDisabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] writeProtectManuallyDisabled FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWriteProtectDisableCompleteAction');
          const result = this.impl.getWriteProtectDisableCompleteAction();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_action' in response) ? response['arg_action'] : response;
              const resp_obj = { 'arg_action': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getWriteProtectDisableCompleteAction FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.confirmManualWpDisableComplete');
          const result = this.impl.confirmManualWpDisableComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] confirmManualWpDisableComplete FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getComponentList');
          const result = this.impl.getComponentList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_components' in response) ? response['arg_components'] : response;
              const resp_obj = { 'arg_components': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getComponentList FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setComponentList');
          const result = this.impl.setComponentList(params.arg_components);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setComponentList FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reworkMainboard');
          const result = this.impl.reworkMainboard();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] reworkMainboard FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.roFirmwareUpdateComplete');
          const result = this.impl.roFirmwareUpdateComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] roFirmwareUpdateComplete FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shutdownForRestock');
          const result = this.impl.shutdownForRestock();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] shutdownForRestock FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.continueFinalizationAfterRestock');
          const result = this.impl.continueFinalizationAfterRestock();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] continueFinalizationAfterRestock FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRegionList');
          const result = this.impl.getRegionList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_regions' in response) ? response['arg_regions'] : response;
              const resp_obj = { 'arg_regions': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRegionList FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSkuList');
          const result = this.impl.getSkuList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_skus' in response) ? response['arg_skus'] : response;
              const resp_obj = { 'arg_skus': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSkuList FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCustomLabelList');
          const result = this.impl.getCustomLabelList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_custom_labels' in response) ? response['arg_custom_labels'] : response;
              const resp_obj = { 'arg_custom_labels': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getCustomLabelList FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSkuDescriptionList');
          const result = this.impl.getSkuDescriptionList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_sku_descriptions' in response) ? response['arg_sku_descriptions'] : response;
              const resp_obj = { 'arg_sku_descriptions': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSkuDescriptionList FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOriginalSerialNumber');
          const result = this.impl.getOriginalSerialNumber();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_serial_number' in response) ? response['arg_serial_number'] : response;
              const resp_obj = { 'arg_serial_number': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOriginalSerialNumber FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOriginalRegion');
          const result = this.impl.getOriginalRegion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_region_index' in response) ? response['arg_region_index'] : response;
              const resp_obj = { 'arg_region_index': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOriginalRegion FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOriginalSku');
          const result = this.impl.getOriginalSku();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_sku_index' in response) ? response['arg_sku_index'] : response;
              const resp_obj = { 'arg_sku_index': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOriginalSku FAILED:', e));
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOriginalCustomLabel');
          const result = this.impl.getOriginalCustomLabel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_custom_label_index' in response) ? response['arg_custom_label_index'] : response;
              const resp_obj = { 'arg_custom_label_index': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOriginalCustomLabel FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOriginalDramPartNumber');
          const result = this.impl.getOriginalDramPartNumber();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_dram_part_number' in response) ? response['arg_dram_part_number'] : response;
              const resp_obj = { 'arg_dram_part_number': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOriginalDramPartNumber FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOriginalFeatureLevel');
          const result = this.impl.getOriginalFeatureLevel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_original_feature_level' in response) ? response['arg_original_feature_level'] : response;
              const resp_obj = { 'arg_original_feature_level': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOriginalFeatureLevel FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDeviceInformation');
          const result = this.impl.setDeviceInformation(params.arg_serial_number, params.arg_region_index, params.arg_sku_index, params.arg_custom_label_index, params.arg_dram_part_number, params.arg_is_chassis_branded, params.arg_hw_compliance_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setDeviceInformation FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCalibrationComponentList');
          const result = this.impl.getCalibrationComponentList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_components' in response) ? response['arg_components'] : response;
              const resp_obj = { 'arg_components': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getCalibrationComponentList FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCalibrationSetupInstructions');
          const result = this.impl.getCalibrationSetupInstructions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_instructions' in response) ? response['arg_instructions'] : response;
              const resp_obj = { 'arg_instructions': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getCalibrationSetupInstructions FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startCalibration');
          const result = this.impl.startCalibration(params.arg_components);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] startCalibration FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runCalibrationStep');
          const result = this.impl.runCalibrationStep();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] runCalibrationStep FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.continueCalibration');
          const result = this.impl.continueCalibration();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] continueCalibration FAILED:', e));
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.calibrationComplete');
          const result = this.impl.calibrationComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] calibrationComplete FAILED:', e));
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retryProvisioning');
          const result = this.impl.retryProvisioning();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] retryProvisioning FAILED:', e));
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.provisioningComplete');
          const result = this.impl.provisioningComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] provisioningComplete FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retryFinalization');
          const result = this.impl.retryFinalization();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] retryFinalization FAILED:', e));
          }
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finalizationComplete');
          const result = this.impl.finalizationComplete();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] finalizationComplete FAILED:', e));
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeProtectManuallyEnabled');
          const result = this.impl.writeProtectManuallyEnabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] writeProtectManuallyEnabled FAILED:', e));
          }
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLog');
          const result = this.impl.getLog();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getLog FAILED:', e));
          }
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveLog');
          const result = this.impl.saveLog();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] saveLog FAILED:', e));
          }
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPowerwashRequired');
          const result = this.impl.getPowerwashRequired();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_powerwash_required' in response) ? response['arg_powerwash_required'] : response;
              const resp_obj = { 'arg_powerwash_required': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getPowerwashRequired FAILED:', e));
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchDiagnostics');
          const result = this.impl.launchDiagnostics();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endRma');
          const result = this.impl.endRma(params.arg_shutdown_method);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_state_result' in response) ? response['arg_state_result'] : response;
              const resp_obj = { 'arg_state_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] endRma FAILED:', e));
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shutDownAfterHardwareError');
          const result = this.impl.shutDownAfterHardwareError();
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.criticalErrorExitToLogin');
          const result = this.impl.criticalErrorExitToLogin();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] criticalErrorExitToLogin FAILED:', e));
          }
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.criticalErrorReboot');
          const result = this.impl.criticalErrorReboot();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] criticalErrorReboot FAILED:', e));
          }
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.get3pDiagnosticsProvider');
          const result = this.impl.get3pDiagnosticsProvider();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_provider' in response) ? response['arg_provider'] : response;
              const resp_obj = { 'arg_provider': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] get3pDiagnosticsProvider FAILED:', e));
          }
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInstallable3pDiagnosticsAppPath');
          const result = this.impl.getInstallable3pDiagnosticsAppPath();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_app_path' in response) ? response['arg_app_path'] : response;
              const resp_obj = { 'arg_app_path': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getInstallable3pDiagnosticsAppPath FAILED:', e));
          }
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installLastFound3pDiagnosticsApp');
          const result = this.impl.installLastFound3pDiagnosticsApp();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_app_info' in response) ? response['arg_app_info'] : response;
              const resp_obj = { 'arg_app_info': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] installLastFound3pDiagnosticsApp FAILED:', e));
          }
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.completeLast3pDiagnosticsInstallation');
          const result = this.impl.completeLast3pDiagnosticsInstallation(params.arg_is_approved);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] completeLast3pDiagnosticsInstallation FAILED:', e));
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.show3pDiagnosticsApp');
          const result = this.impl.show3pDiagnosticsApp();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] show3pDiagnosticsApp FAILED:', e));
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeError');
          const result = this.impl.observeError(params.arg_observer);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeOsUpdateProgress');
          const result = this.impl.observeOsUpdateProgress(params.arg_observer);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeCalibrationProgress');
          const result = this.impl.observeCalibrationProgress(params.arg_observer);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeProvisioningProgress');
          const result = this.impl.observeProvisioningProgress(params.arg_observer);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeHardwareWriteProtectionState');
          const result = this.impl.observeHardwareWriteProtectionState(params.arg_observer);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observePowerCableState');
          const result = this.impl.observePowerCableState(params.arg_observer);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeExternalDiskState');
          const result = this.impl.observeExternalDiskState(params.arg_observer);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeHardwareVerificationStatus');
          const result = this.impl.observeHardwareVerificationStatus(params.arg_observer);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeFinalizationStatus');
          const result = this.impl.observeFinalizationStatus(params.arg_observer);
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeRoFirmwareUpdateProgress');
          const result = this.impl.observeRoFirmwareUpdateProgress(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceReceiver = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceReceiver;

mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServicePtr = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceRemote;
mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServiceRequest = mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaServicePendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: HardwareVerificationResult
mojo.internal.Union(
    mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec, 'ash.shimless_rma.mojom.HardwareVerificationResult', {
      'arg_pass_result': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec,
        'nullable': false,
      },
      'arg_fail_result': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec,
        'nullable': false,
      },
      'arg_skip_result': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec,
        'nullable': false,
      },
    });

// Union: StateProperty
mojo.internal.Union(
    mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec, 'ash.shimless_rma.mojom.StateProperty', {
      'arg_update_device_info_state_property': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec,
        'nullable': false,
      },
    });

// Union: StatePropertyResult
mojo.internal.Union(
    mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec, 'ash.shimless_rma.mojom.StatePropertyResult', {
      'arg_property': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertySpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyErrorSpec,
        'nullable': false,
      },
    });

// Struct: StateResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, 'ash.shimless_rma.mojom.StateResult', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_can_exit', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_go_back', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: QrCode
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.QrCodeSpec, 'ash.shimless_rma.mojom.QrCode', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Component
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec, 'ash.shimless_rma.mojom.Component', [
      mojo.internal.StructField('arg_component', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.ComponentTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 4, 0, mojo.internal.bindings.ash.shimless_rma.mojom.ComponentRepairStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_identifier', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CalibrationComponentStatus
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec, 'ash.shimless_rma.mojom.CalibrationComponentStatus', [
      mojo.internal.StructField('arg_component', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.ComponentTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 4, 0, mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Shimless3pDiagnosticsAppInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec, 'ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_permission_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PassHardwareVerificationResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.PassHardwareVerificationResultSpec, 'ash.shimless_rma.mojom.PassHardwareVerificationResult', [
    ],
    [[0, 8]]);

// Struct: FailHardwareVerificationResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.FailHardwareVerificationResultSpec, 'ash.shimless_rma.mojom.FailHardwareVerificationResult', [
      mojo.internal.StructField('arg_component_info', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SkipHardwareVerificationResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.SkipHardwareVerificationResultSpec, 'ash.shimless_rma.mojom.SkipHardwareVerificationResult', [
    ],
    [[0, 8]]);

// Struct: UpdateDeviceInfoStateProperty
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.UpdateDeviceInfoStatePropertySpec, 'ash.shimless_rma.mojom.UpdateDeviceInfoStateProperty', [
      mojo.internal.StructField('arg_serial_number_modifiable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_region_modifiable', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sku_modifiable', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_custom_label_modifiable', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dram_part_number_modifiable', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_feature_level_modifiable', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hide_google_sku', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_customized_serial_number_naming', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserver_OnError_ParamsSpec, 'ash.shimless_rma.mojom.ErrorObserver_OnError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_ParamsSpec, 'ash.shimless_rma.mojom.OsUpdateObserver_OnOsUpdateProgressUpdated_Params', [
      mojo.internal.StructField('arg_operation', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateOperationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_update_error_code', 8, 0, mojo.internal.bindings.ash.shimless_rma.mojom.UpdateErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_ParamsSpec, 'ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationUpdated_Params', [
      mojo.internal.StructField('arg_componentStatus', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_ParamsSpec, 'ash.shimless_rma.mojom.CalibrationObserver_OnCalibrationStepComplete_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationOverallStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_ParamsSpec, 'ash.shimless_rma.mojom.ProvisioningObserver_OnProvisioningUpdated_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_ParamsSpec, 'ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver_OnHardwareWriteProtectionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_ParamsSpec, 'ash.shimless_rma.mojom.PowerCableStateObserver_OnPowerCableStateChanged_Params', [
      mojo.internal.StructField('arg_plugged_in', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_ParamsSpec, 'ash.shimless_rma.mojom.ExternalDiskStateObserver_OnExternalDiskStateChanged_Params', [
      mojo.internal.StructField('arg_detected', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_ParamsSpec, 'ash.shimless_rma.mojom.HardwareVerificationStatusObserver_OnHardwareVerificationResult_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_ParamsSpec, 'ash.shimless_rma.mojom.FinalizationObserver_OnFinalizationUpdated_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_ParamsSpec, 'ash.shimless_rma.mojom.UpdateRoFirmwareObserver_OnUpdateRoFirmwareStatusChanged_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentState_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetStateProperties_ResponseParams', [
      mojo.internal.StructField('arg_state_property_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StatePropertyResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_TransitionPreviousState_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_AbortRma_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_BeginFinalization_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_TrackConfiguredNetworks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_NetworkSelectionComplete_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCurrentOsVersion_ResponseParams', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CheckForOsUpdates_ResponseParams', [
      mojo.internal.StructField('arg_update_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOs_ResponseParams', [
      mojo.internal.StructField('arg_update_started', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_UpdateOsSkipped_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetSameOwner_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDifferentOwner_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_Params', [
      mojo.internal.StructField('arg_should_wipe_device', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetWipeDevice_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetManuallyDisableWriteProtect_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtect_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallenge_ResponseParams', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectHwid_ResponseParams', [
      mojo.internal.StructField('arg_hwid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRsuDisableWriteProtectChallengeQrCode_ResponseParams', [
      mojo.internal.StructField('arg_qr_code_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_Params', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetRsuDisableWriteProtectCode_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyDisabled_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetWriteProtectDisableCompleteAction_ResponseParams', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.WriteProtectDisableCompleteActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ConfirmManualWpDisableComplete_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetComponentList_ResponseParams', [
      mojo.internal.StructField('arg_components', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_Params', [
      mojo.internal.StructField('arg_components', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.shimless_rma.mojom.ComponentSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetComponentList_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ReworkMainboard_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RoFirmwareUpdateComplete_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ShutdownForRestock_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueFinalizationAfterRestock_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetRegionList_ResponseParams', [
      mojo.internal.StructField('arg_regions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuList_ResponseParams', [
      mojo.internal.StructField('arg_skus', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCustomLabelList_ResponseParams', [
      mojo.internal.StructField('arg_custom_labels', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetSkuDescriptionList_ResponseParams', [
      mojo.internal.StructField('arg_sku_descriptions', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSerialNumber_ResponseParams', [
      mojo.internal.StructField('arg_serial_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalRegion_ResponseParams', [
      mojo.internal.StructField('arg_region_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalSku_ResponseParams', [
      mojo.internal.StructField('arg_sku_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalCustomLabel_ResponseParams', [
      mojo.internal.StructField('arg_custom_label_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalDramPartNumber_ResponseParams', [
      mojo.internal.StructField('arg_dram_part_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetOriginalFeatureLevel_ResponseParams', [
      mojo.internal.StructField('arg_original_feature_level', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.FeatureLevelSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_Params', [
      mojo.internal.StructField('arg_serial_number', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_region_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sku_index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_custom_label_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_chassis_branded', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dram_part_number', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hw_compliance_version', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SetDeviceInformation_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationComponentList_ResponseParams', [
      mojo.internal.StructField('arg_components', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetCalibrationSetupInstructions_ResponseParams', [
      mojo.internal.StructField('arg_instructions', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationSetupInstructionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_Params', [
      mojo.internal.StructField('arg_components', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationComponentStatusSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_StartCalibration_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RunCalibrationStep_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ContinueCalibration_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CalibrationComplete_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryProvisioning_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ProvisioningComplete_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_RetryFinalization_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_FinalizationComplete_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_WriteProtectManuallyEnabled_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetLog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetLog_ResponseParams', [
      mojo.internal.StructField('arg_log', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_SaveLog_ResponseParams', [
      mojo.internal.StructField('arg_save_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetPowerwashRequired_ResponseParams', [
      mojo.internal.StructField('arg_powerwash_required', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_LaunchDiagnostics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_EndRma_Params', [
      mojo.internal.StructField('arg_shutdown_method', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.ShutdownMethodSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_EndRma_ResponseParams', [
      mojo.internal.StructField('arg_state_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.StateResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ShutDownAfterHardwareError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorExitToLogin_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CriticalErrorReboot_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.RmadErrorCodeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Get3pDiagnosticsProvider_ResponseParams', [
      mojo.internal.StructField('arg_provider', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_GetInstallable3pDiagnosticsAppPath_ResponseParams', [
      mojo.internal.StructField('arg_app_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_InstallLastFound3pDiagnosticsApp_ResponseParams', [
      mojo.internal.StructField('arg_app_info', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.Shimless3pDiagnosticsAppInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_Params', [
      mojo.internal.StructField('arg_is_approved', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_CompleteLast3pDiagnosticsInstallation_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_Show3pDiagnosticsApp_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.shimless_rma.mojom.Show3pDiagnosticsAppResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveError_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.ErrorObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveOsUpdateProgress_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.OsUpdateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveCalibrationProgress_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.CalibrationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveProvisioningProgress_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.ProvisioningObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareWriteProtectionState_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.HardwareWriteProtectionStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObservePowerCableState_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.PowerCableStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveExternalDiskState_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.ExternalDiskStateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveHardwareVerificationStatus_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.HardwareVerificationStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveFinalizationStatus_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.FinalizationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_ParamsSpec, 'ash.shimless_rma.mojom.ShimlessRmaService_ObserveRoFirmwareUpdateProgress_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.shimless_rma.mojom.UpdateRoFirmwareObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

