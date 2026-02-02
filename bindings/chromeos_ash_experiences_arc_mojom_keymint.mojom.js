// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymint.mojom
 // Module: arc.mojom.keymint

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.safe_browsing.mojom.SafeBrowsingHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.borealis_installer.mojom.PageHandlerFactory": true, "ash.borealis_installer.mojom.PageHandler": true, "ash.borealis_installer.mojom.Page": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feed_internals.mojom.PageHandler": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "legion_internals.mojom.LegionInternalsPageHandler": true, "mojom.LocationInternalsHandler": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip.mojom.PageHandlerFactory": true, "tab_strip.mojom.PageHandler": true, "tab_strip.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "actor.mojom.JournalClient": true, "actor.mojom.PageStabilityMonitor": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "userspace_swap.mojom.UserspaceSwapInitialization": true, "userspace_swap.mojom.UserspaceSwap": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.CrosDisplayConfigController": true, "crosapi.mojom.CrosDisplayConfigObserver": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.DiagnosticsService": true, "crosapi.mojom.DocumentScan": true, "crosapi.mojom.SearchResultConsumer": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrintersObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.PrintPreviewCrosDelegate": true, "crosapi.mojom.PrintPreviewCrosClient": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.StructuredMetricsService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "crosapi.mojom.ScopedAccessPermission": true, "crosapi.mojom.VideoFrameHandler": true, "crosapi.mojom.VideoCaptureDevice": true, "crosapi.mojom.VideoCaptureDeviceFactory": true, "crosapi.mojom.VideoConferenceManagerClient": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "browser_controls_api.mojom.BrowserControlsObserver": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "commerce.product_specifications.mojom.ProductSpecificationsHandler": true, "commerce.product_specifications.mojom.Page": true, "commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "feed.mojom.RssLinkReader": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "legion.mojom.OakSession": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.Translator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryConsumer": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "ai.mojom.ZeroStateSuggestionsService": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": true, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '146.0.7665.0';
        
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

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};

mojo.internal.bindings.arc.mojom.keymint.KeyFormatSpec = mojo.internal.bindings.arc.mojom.keymint.KeyFormatSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.AlgorithmSpec = mojo.internal.bindings.arc.mojom.keymint.AlgorithmSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.BlockModeSpec = mojo.internal.bindings.arc.mojom.keymint.BlockModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.PaddingModeSpec = mojo.internal.bindings.arc.mojom.keymint.PaddingModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.DigestSpec = mojo.internal.bindings.arc.mojom.keymint.DigestSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.EcCurveSpec = mojo.internal.bindings.arc.mojom.keymint.EcCurveSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.KeyOriginSpec = mojo.internal.bindings.arc.mojom.keymint.KeyOriginSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.KeyPurposeSpec = mojo.internal.bindings.arc.mojom.keymint.KeyPurposeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.HardwareAuthenticatorTypeSpec = mojo.internal.bindings.arc.mojom.keymint.HardwareAuthenticatorTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.SecurityLevelSpec = mojo.internal.bindings.arc.mojom.keymint.SecurityLevelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.TagSpec = mojo.internal.bindings.arc.mojom.keymint.TagSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec = mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec = mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec = mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec = mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec = mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.CertificateSpec = mojo.internal.bindings.arc.mojom.keymint.CertificateSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.CertificateSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.CertificateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.CertificateSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec = mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec = mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec = mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec = mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec = mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec = mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.TimestampSpec = mojo.internal.bindings.arc.mojom.keymint.TimestampSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.TimestampSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.TimestampSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.TimestampSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec = mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec = mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec = mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec = mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec = mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintHost = mojo.internal.bindings.arc.mojom.keymint.KeyMintHost || {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintHostSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintHostSpec || { $ : {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintHostSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintHostSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintHost.$interfaceName = 'arc.mojom.keymint.KeyMintHost';
mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance || {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceSpec || { $ : {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance.$interfaceName = 'arc.mojom.keymint.KeyMintInstance';
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer || {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServerSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServerSpec || { $ : {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServerSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServerSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer.$interfaceName = 'arc.mojom.keymint.KeyMintServer';
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec = mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec.$.structSpec && mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec = mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.arc.mojom.keymint = mojo.internal.bindings.arc.mojom.keymint || {};
mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec = mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec || { $: mojo.internal.OpaqueStruct.$ };

mojo.internal.bindings.arc.mojom.keymint.shared_secret_key_agreement_label = "KeymasterSharedMac";

mojo.internal.bindings.arc.mojom.keymint.shared_secret_key_check_label = "Keymaster HMAC Verification";

mojo.internal.bindings.arc.mojom.keymint.secure_clock_time_stamp_mac_label = "Auth Verification";

// Enum: KeyFormat
mojo.internal.bindings.arc.mojom.keymint.KeyFormat = {
  UNKNOWN: -1,
  X509: 0,
  PKCS8: 1,
  RAW: 3,
};

// Enum: Algorithm
mojo.internal.bindings.arc.mojom.keymint.Algorithm = {
  UNKNOWN: -1,
  RSA: 1,
  EC: 3,
  AES: 32,
  TRIPLE_DES: 33,
  HMAC: 128,
};

// Enum: BlockMode
mojo.internal.bindings.arc.mojom.keymint.BlockMode = {
  UNKNOWN: -1,
  ECB: 1,
  CBC: 2,
  CTR: 3,
  GCM: 32,
};

// Enum: PaddingMode
mojo.internal.bindings.arc.mojom.keymint.PaddingMode = {
  UNKNOWN: -1,
  NONE: 1,
  RSA_OAEP: 2,
  RSA_PSS: 3,
  RSA_PKCS1_1_5_ENCRYPT: 4,
  RSA_PKCS1_1_5_SIGN: 5,
  PKCS7: 64,
};

// Enum: Digest
mojo.internal.bindings.arc.mojom.keymint.Digest = {
  UNKNOWN: -1,
  NONE: 0,
  MD5: 1,
  SHA1: 2,
  SHA_2_224: 3,
  SHA_2_256: 4,
  SHA_2_384: 5,
  SHA_2_512: 6,
};

// Enum: EcCurve
mojo.internal.bindings.arc.mojom.keymint.EcCurve = {
  UNKNOWN: -1,
  P_224: 0,
  P_256: 1,
  P_384: 2,
  P_521: 3,
  CURVE_25519: 4,
};

// Enum: KeyOrigin
mojo.internal.bindings.arc.mojom.keymint.KeyOrigin = {
  UNKNOWN: -1,
  GENERATED: 0,
  DERIVED: 1,
  IMPORTED: 2,
  RESERVED: 3,
  SECURELY_IMPORTED: 4,
};

// Enum: KeyPurpose
mojo.internal.bindings.arc.mojom.keymint.KeyPurpose = {
  UNKNOWN: -1,
  ENCRYPT: 0,
  DECRYPT: 1,
  SIGN: 2,
  VERIFY: 3,
  WRAP_KEY: 5,
  AGREE_KEY: 6,
  ATTEST_KEY: 7,
};

// Enum: HardwareAuthenticatorType
mojo.internal.bindings.arc.mojom.keymint.HardwareAuthenticatorType = {
  UNKNOWN: 65280,
  NONE: 0,
  PASSWORD: 1,
  FINGERPRINT: 2,
  ANY: -1,
};

// Enum: SecurityLevel
mojo.internal.bindings.arc.mojom.keymint.SecurityLevel = {
  UNKNOWN: -1,
  SOFTWARE: 0,
  TRUSTED_ENVIRONMENT: 1,
  STRONGBOX: 2,
  KEYSTORE: 100,
};

// Enum: Tag
mojo.internal.bindings.arc.mojom.keymint.Tag = {
  INVALID: 0,
  PURPOSE: 536870913,
  ALGORITHM: 268435458,
  KEY_SIZE: 805306371,
  BLOCK_MODE: 536870916,
  DIGEST: 536870917,
  PADDING: 536870918,
  CALLER_NONCE: 1879048199,
  MIN_MAC_LENGTH: 805306376,
  EC_CURVE: 268435466,
  RSA_PUBLIC_EXPONENT: 1342177480,
  INCLUDE_UNIQUE_ID: 1879048394,
  RSA_OAEP_MGF_DIGEST: 536871115,
  BOOTLOADER_ONLY: 1879048494,
  ROLLBACK_RESISTANCE: 1879048495,
  HARDWARE_TYPE: 268435760,
  EARLY_BOOT_ONLY: 1879048497,
  ACTIVE_DATETIME: 1610613136,
  ORIGINATION_EXPIRE_DATETIME: 1610613137,
  USAGE_EXPIRE_DATETIME: 1610613138,
  MIN_SECONDS_BETWEEN_OPS: 805306771,
  MAX_USES_PER_BOOT: 805306772,
  USAGE_COUNT_LIMIT: 805306773,
  USER_ID: 805306869,
  USER_SECURE_ID: -1610612234,
  NO_AUTH_REQUIRED: 1879048695,
  USER_AUTH_TYPE: 268435960,
  AUTH_TIMEOUT: 805306873,
  ALLOW_WHILE_ON_BODY: 1879048698,
  TRUSTED_USER_PRESENCE_REQUIRED: 1879048699,
  TRUSTED_CONFIRMATION_REQUIRED: 1879048700,
  UNLOCKED_DEVICE_REQUIRED: 1879048701,
  APPLICATION_ID: -1879047591,
  APPLICATION_DATA: -1879047492,
  CREATION_DATETIME: 1610613437,
  ORIGIN: 268436158,
  ROOT_OF_TRUST: -1879047488,
  OS_VERSION: 805307073,
  OS_PATCHLEVEL: 805307074,
  UNIQUE_ID: -1879047485,
  ATTESTATION_CHALLENGE: -1879047484,
  ATTESTATION_APPLICATION_ID: -1879047483,
  ATTESTATION_ID_BRAND: -1879047482,
  ATTESTATION_ID_DEVICE: -1879047481,
  ATTESTATION_ID_PRODUCT: -1879047480,
  ATTESTATION_ID_SERIAL: -1879047479,
  ATTESTATION_ID_IMEI: -1879047478,
  ATTESTATION_ID_MEID: -1879047477,
  ATTESTATION_ID_MANUFACTURER: -1879047476,
  ATTESTATION_ID_MODEL: -1879047475,
  VENDOR_PATCHLEVEL: 805307086,
  BOOT_PATCHLEVEL: 805307087,
  DEVICE_UNIQUE_ATTESTATION: 1879048912,
  IDENTITY_CREDENTIAL_KEY: 1879048913,
  STORAGE_KEY: 1879048914,
  ASSOCIATED_DATA: -1879047192,
  NONCE: -1879047191,
  MAC_LENGTH: 805307371,
  RESET_SINCE_ID_ROTATION: 1879049196,
  CONFIRMATION_TOKEN: -1879047187,
  CERTIFICATE_SERIAL: -2147482642,
  CERTIFICATE_SUBJECT: -1879047185,
  CERTIFICATE_NOT_BEFORE: 1610613744,
  CERTIFICATE_NOT_AFTER: 1610613745,
  MAX_BOOT_LEVEL: 805307378,
};

// Interface: KeyMintHost
mojo.internal.bindings.arc.mojom.keymint.KeyMintHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.keymint.KeyMintHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getServer() {
    return this.$.getServer();
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.keymint.KeyMintHost', [
      { explicit: 0 },
    ]);
  }

  getServer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.keymint.KeyMintHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.keymint.KeyMintHost', [
      { explicit: 0 },
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getServer');
          const result = this.impl.getServer();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_server_remote' in response) ? response['arg_server_remote'] : response;
              const resp_obj = { 'arg_server_remote': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getServer FAILED:', e));
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

mojo.internal.bindings.arc.mojom.keymint.KeyMintHostReceiver = mojo.internal.bindings.arc.mojom.keymint.KeyMintHostReceiver;

mojo.internal.bindings.arc.mojom.keymint.KeyMintHostPtr = mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRemote;
mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRequest = mojo.internal.bindings.arc.mojom.keymint.KeyMintHostPendingReceiver;


// Interface: KeyMintInstance
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintInstance';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.keymint.KeyMintInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.keymint.KeyMintInstance', [
      { explicit: 0 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

};

mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.keymint.KeyMintInstance', [
      { explicit: 0 },
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] init FAILED:', e));
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

mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceReceiver = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceReceiver;

mojo.internal.bindings.arc.mojom.keymint.KeyMintInstancePtr = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceRemote;
mojo.internal.bindings.arc.mojom.keymint.KeyMintInstanceRequest = mojo.internal.bindings.arc.mojom.keymint.KeyMintInstancePendingReceiver;


// Interface: KeyMintServer
mojo.internal.bindings.arc.mojom.keymint.KeyMintServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintServer';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setSystemVersion(arg_android_version, arg_android_patchlevel) {
    return this.$.setSystemVersion(arg_android_version, arg_android_patchlevel);
  }
  addRngEntropy(arg_data) {
    return this.$.addRngEntropy(arg_data);
  }
  generateKey(arg_request) {
    return this.$.generateKey(arg_request);
  }
  importKey(arg_request) {
    return this.$.importKey(arg_request);
  }
  importWrappedKey(arg_request) {
    return this.$.importWrappedKey(arg_request);
  }
  upgradeKey(arg_request) {
    return this.$.upgradeKey(arg_request);
  }
  deleteKey(arg_key_blob) {
    return this.$.deleteKey(arg_key_blob);
  }
  deleteAllKeys() {
    return this.$.deleteAllKeys();
  }
  destroyAttestationIds() {
    return this.$.destroyAttestationIds();
  }
  begin(arg_request) {
    return this.$.begin(arg_request);
  }
  deviceLocked(arg_password_only, arg_timestamp_token) {
    return this.$.deviceLocked(arg_password_only, arg_timestamp_token);
  }
  earlyBootEnded() {
    return this.$.earlyBootEnded();
  }
  convertStorageKeyToEphemeral(arg_storage_key_blob) {
    return this.$.convertStorageKeyToEphemeral(arg_storage_key_blob);
  }
  getKeyCharacteristics(arg_request) {
    return this.$.getKeyCharacteristics(arg_request);
  }
  getRootOfTrustChallenge() {
    return this.$.getRootOfTrustChallenge();
  }
  getRootOfTrust(arg_challenge) {
    return this.$.getRootOfTrust(arg_challenge);
  }
  sendRootOfTrust(arg_root_of_trust) {
    return this.$.sendRootOfTrust(arg_root_of_trust);
  }
  updateAad(arg_request) {
    return this.$.updateAad(arg_request);
  }
  update(arg_request) {
    return this.$.update(arg_request);
  }
  finish(arg_request) {
    return this.$.finish(arg_request);
  }
  abort(arg_op_handle) {
    return this.$.abort(arg_op_handle);
  }
  getSharedSecretParameters() {
    return this.$.getSharedSecretParameters();
  }
  computeSharedSecret(arg_secret_params) {
    return this.$.computeSharedSecret(arg_secret_params);
  }
  generateTimeStamp(arg_challenge) {
    return this.$.generateTimeStamp(arg_challenge);
  }
  generateEcdsaP256KeyPair(arg_test_mode) {
    return this.$.generateEcdsaP256KeyPair(arg_test_mode);
  }
  generateCertificateRequest(arg_request) {
    return this.$.generateCertificateRequest(arg_request);
  }
  setVendorPatchLevel(arg_android_vendor_patchlevel) {
    return this.$.setVendorPatchLevel(arg_android_vendor_patchlevel);
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.keymint.KeyMintServer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
    ]);
  }

  setSystemVersion(arg_android_version, arg_android_patchlevel) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec,
      null,
      [arg_android_version, arg_android_patchlevel],
      false);
  }

  addRngEntropy(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec,
      [arg_data],
      false);
  }

  generateKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  importKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  importWrappedKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  upgradeKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  deleteKey(arg_key_blob) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec,
      [arg_key_blob],
      false);
  }

  deleteAllKeys() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec,
      [],
      false);
  }

  destroyAttestationIds() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec,
      [],
      false);
  }

  begin(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec,
      [arg_request],
      false);
  }

  deviceLocked(arg_password_only, arg_timestamp_token) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec,
      [arg_password_only, arg_timestamp_token],
      false);
  }

  earlyBootEnded() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec,
      [],
      false);
  }

  convertStorageKeyToEphemeral(arg_storage_key_blob) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec,
      [arg_storage_key_blob],
      false);
  }

  getKeyCharacteristics(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec,
      [arg_request],
      false);
  }

  getRootOfTrustChallenge() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec,
      [],
      false);
  }

  getRootOfTrust(arg_challenge) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec,
      [arg_challenge],
      false);
  }

  sendRootOfTrust(arg_root_of_trust) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec,
      [arg_root_of_trust],
      false);
  }

  updateAad(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec,
      [arg_request],
      false);
  }

  update(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec,
      [arg_request],
      false);
  }

  finish(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec,
      [arg_request],
      false);
  }

  abort(arg_op_handle) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec,
      [arg_op_handle],
      false);
  }

  getSharedSecretParameters() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec,
      [],
      false);
  }

  computeSharedSecret(arg_secret_params) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec,
      [arg_secret_params],
      false);
  }

  generateTimeStamp(arg_challenge) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec,
      [arg_challenge],
      false);
  }

  generateEcdsaP256KeyPair(arg_test_mode) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec,
      [arg_test_mode],
      false);
  }

  generateCertificateRequest(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec,
      [arg_request],
      false);
  }

  setVendorPatchLevel(arg_android_vendor_patchlevel) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec,
      null,
      [arg_android_vendor_patchlevel],
      false);
  }

};

mojo.internal.bindings.arc.mojom.keymint.KeyMintServer.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintServer',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintServerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.keymint.KeyMintServer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSystemVersion');
          const result = this.impl.setSystemVersion(params.arg_android_version, params.arg_android_patchlevel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRngEntropy');
          const result = this.impl.addRngEntropy(params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] addRngEntropy FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateKey');
          const result = this.impl.generateKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] generateKey FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importKey');
          const result = this.impl.importKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] importKey FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importWrappedKey');
          const result = this.impl.importWrappedKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] importWrappedKey FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.upgradeKey');
          const result = this.impl.upgradeKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] upgradeKey FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteKey');
          const result = this.impl.deleteKey(params.arg_key_blob);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] deleteKey FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllKeys');
          const result = this.impl.deleteAllKeys();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] deleteAllKeys FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyAttestationIds');
          const result = this.impl.destroyAttestationIds();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] destroyAttestationIds FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.begin');
          const result = this.impl.begin(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] begin FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deviceLocked');
          const result = this.impl.deviceLocked(params.arg_password_only, params.arg_timestamp_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] deviceLocked FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.earlyBootEnded');
          const result = this.impl.earlyBootEnded();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] earlyBootEnded FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.convertStorageKeyToEphemeral');
          const result = this.impl.convertStorageKeyToEphemeral(params.arg_storage_key_blob);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] convertStorageKeyToEphemeral FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyCharacteristics');
          const result = this.impl.getKeyCharacteristics(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getKeyCharacteristics FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRootOfTrustChallenge');
          const result = this.impl.getRootOfTrustChallenge();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRootOfTrustChallenge FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRootOfTrust');
          const result = this.impl.getRootOfTrust(params.arg_challenge);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getRootOfTrust FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendRootOfTrust');
          const result = this.impl.sendRootOfTrust(params.arg_root_of_trust);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] sendRootOfTrust FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAad');
          const result = this.impl.updateAad(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateAad FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] update FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finish');
          const result = this.impl.finish(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] finish FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort(params.arg_op_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error' in response) ? response['arg_error'] : response;
              const resp_obj = { 'arg_error': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] abort FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedSecretParameters');
          const result = this.impl.getSharedSecretParameters();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSharedSecretParameters FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.computeSharedSecret');
          const result = this.impl.computeSharedSecret(params.arg_secret_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] computeSharedSecret FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateTimeStamp');
          const result = this.impl.generateTimeStamp(params.arg_challenge);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] generateTimeStamp FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateEcdsaP256KeyPair');
          const result = this.impl.generateEcdsaP256KeyPair(params.arg_test_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] generateEcdsaP256KeyPair FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateCertificateRequest');
          const result = this.impl.generateCertificateRequest(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] generateCertificateRequest FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVendorPatchLevel');
          const result = this.impl.setVendorPatchLevel(params.arg_android_vendor_patchlevel);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.keymint.KeyMintServerReceiver = mojo.internal.bindings.arc.mojom.keymint.KeyMintServerReceiver;

mojo.internal.bindings.arc.mojom.keymint.KeyMintServerPtr = mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRemote;
mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRequest = mojo.internal.bindings.arc.mojom.keymint.KeyMintServerPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: KeyParameterValue
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec, 'arc.mojom.keymint.KeyParameterValue', {
      'arg_invalid': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_algorithm': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.keymint.AlgorithmSpec,
        'nullable': false,
      },
      'arg_block_mode': {
        'ordinal': 2,
        'type': mojo.internal.bindings.arc.mojom.keymint.BlockModeSpec,
        'nullable': false,
      },
      'arg_padding_mode': {
        'ordinal': 3,
        'type': mojo.internal.bindings.arc.mojom.keymint.PaddingModeSpec,
        'nullable': false,
      },
      'arg_digest': {
        'ordinal': 4,
        'type': mojo.internal.bindings.arc.mojom.keymint.DigestSpec,
        'nullable': false,
      },
      'arg_ec_curve': {
        'ordinal': 5,
        'type': mojo.internal.bindings.arc.mojom.keymint.EcCurveSpec,
        'nullable': false,
      },
      'arg_origin': {
        'ordinal': 6,
        'type': mojo.internal.bindings.arc.mojom.keymint.KeyOriginSpec,
        'nullable': false,
      },
      'arg_key_purpose': {
        'ordinal': 7,
        'type': mojo.internal.bindings.arc.mojom.keymint.KeyPurposeSpec,
        'nullable': false,
      },
      'arg_hardware_authenticator_type': {
        'ordinal': 8,
        'type': mojo.internal.bindings.arc.mojom.keymint.HardwareAuthenticatorTypeSpec,
        'nullable': false,
      },
      'arg_security_level': {
        'ordinal': 9,
        'type': mojo.internal.bindings.arc.mojom.keymint.SecurityLevelSpec,
        'nullable': false,
      },
      'arg_bool_value': {
        'ordinal': 10,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_integer': {
        'ordinal': 11,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_long_integer': {
        'ordinal': 12,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_date_time': {
        'ordinal': 13,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_blob': {
        'ordinal': 14,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: GenerateEcdsaP256KeyPairResultOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec, 'arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrError', {
      'arg_key_pair_result': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: GenerateCertificateRequestResultOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec, 'arc.mojom.keymint.GenerateCertificateRequestResultOrError', {
      'arg_certificate_request_result': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: KeyCharacteristicsArrayOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec, 'arc.mojom.keymint.KeyCharacteristicsArrayOrError', {
      'arg_key_characteristics': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: BeginResultOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec, 'arc.mojom.keymint.BeginResultOrError', {
      'arg_begin_result': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: KeyCreationResultOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec, 'arc.mojom.keymint.KeyCreationResultOrError', {
      'arg_key_creation_result': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: ByteArrayOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, 'arc.mojom.keymint.ByteArrayOrError', {
      'arg_output': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: SharedSecretParametersOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec, 'arc.mojom.keymint.SharedSecretParametersOrError', {
      'arg_secret_parameters': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: TimeStampTokenOrError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec, 'arc.mojom.keymint.TimeStampTokenOrError', {
      'arg_timestamp_token': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: AttestationKey
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec, 'arc.mojom.keymint.AttestationKey', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_attest_key_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_issuer_subject_name', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: KeyParameter
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, 'arc.mojom.keymint.KeyParameter', [
      mojo.internal.StructField('arg_tag', 0, 0, mojo.internal.bindings.arc.mojom.keymint.TagSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.arc.mojom.keymint.KeyParameterValueSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SharedSecretParameters
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec, 'arc.mojom.keymint.SharedSecretParameters', [
      mojo.internal.StructField('arg_seed', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_nonce', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyCreationResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultSpec, 'arc.mojom.keymint.KeyCreationResult', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_characteristics', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate_chain', 16, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.CertificateSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Certificate
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.CertificateSpec, 'arc.mojom.keymint.Certificate', [
      mojo.internal.StructField('arg_encoded_certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: KeyCharacteristics
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsSpec, 'arc.mojom.keymint.KeyCharacteristics', [
      mojo.internal.StructField('arg_security_level', 0, 0, mojo.internal.bindings.arc.mojom.keymint.SecurityLevelSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_authorizations', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GenerateKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec, 'arc.mojom.keymint.GenerateKeyRequest', [
      mojo.internal.StructField('arg_key_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_attestation_key', 8, 0, mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImportKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec, 'arc.mojom.keymint.ImportKeyRequest', [
      mojo.internal.StructField('arg_key_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_format', 8, 0, mojo.internal.bindings.arc.mojom.keymint.KeyFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_attestation_key', 24, 0, mojo.internal.bindings.arc.mojom.keymint.AttestationKeySpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ImportWrappedKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec, 'arc.mojom.keymint.ImportWrappedKeyRequest', [
      mojo.internal.StructField('arg_wrapped_key_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_wrapping_key_blob', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_masking_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_unwrapping_params', 24, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_password_sid', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_biometric_sid', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: UpgradeKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec, 'arc.mojom.keymint.UpgradeKeyRequest', [
      mojo.internal.StructField('arg_key_blob_to_upgrade', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_upgrade_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec, 'arc.mojom.keymint.BeginRequest', [
      mojo.internal.StructField('arg_key_purpose', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyPurposeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_blob', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 16, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_token', 24, 0, mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BeginResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.BeginResultSpec, 'arc.mojom.keymint.BeginResult', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyParameterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_op_handle', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HardwareAuthToken
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec, 'arc.mojom.keymint.HardwareAuthToken', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_user_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_authenticator_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_authenticator_type', 24, 0, mojo.internal.bindings.arc.mojom.keymint.HardwareAuthenticatorTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 32, 0, mojo.internal.bindings.arc.mojom.keymint.TimestampSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mac', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Timestamp
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.TimestampSpec, 'arc.mojom.keymint.Timestamp', [
      mojo.internal.StructField('arg_milli_seconds', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TimeStampToken
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec, 'arc.mojom.keymint.TimeStampToken', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.arc.mojom.keymint.TimestampSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mac', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetKeyCharacteristicsRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec, 'arc.mojom.keymint.GetKeyCharacteristicsRequest', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_app_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_app_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec, 'arc.mojom.keymint.UpdateRequest', [
      mojo.internal.StructField('arg_op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_token', 16, 0, mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_timestamp_token', 24, 0, mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FinishRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec, 'arc.mojom.keymint.FinishRequest', [
      mojo.internal.StructField('arg_op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_token', 24, 0, mojo.internal.bindings.arc.mojom.keymint.HardwareAuthTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_timestamp_token', 32, 0, mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_confirmation_token', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: KeyMintKeyBlob
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec, 'arc.mojom.keymint.KeyMintKeyBlob', [
      mojo.internal.StructField('arg_key_material', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: KeyMintBlob
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, 'arc.mojom.keymint.KeyMintBlob', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GenerateEcdsaP256KeyPairResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec, 'arc.mojom.keymint.GenerateEcdsaP256KeyPairResult', [
      mojo.internal.StructField('arg_maced_public_key', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_handle_to_private_key', 8, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintKeyBlobSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CertificateRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec, 'arc.mojom.keymint.CertificateRequest', [
      mojo.internal.StructField('arg_test_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_keys_to_sign', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_cert_chain', 16, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_challenge', 24, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GenerateCertificateRequestResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultSpec, 'arc.mojom.keymint.GenerateCertificateRequestResult', [
      mojo.internal.StructField('arg_device_info', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_protected_data', 8, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mac_of_keys_to_sign', 16, 0, mojo.internal.bindings.arc.mojom.keymint.KeyMintBlobSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec, 'arc.mojom.keymint.KeyMintHost_GetServer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintHost_GetServer_ResponseParams', [
      mojo.internal.StructField('arg_server_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.keymint.KeyMintServerRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec, 'arc.mojom.keymint.KeyMintInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.keymint.KeyMintHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_SetSystemVersion_Params', [
      mojo.internal.StructField('arg_android_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_android_patchlevel', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_AddRngEntropy_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.GenerateKeyRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ImportKeyRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportWrappedKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ImportWrappedKeyRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyCreationResultOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpgradeKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.UpgradeKeyRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteKey_Params', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteAllKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Begin_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.BeginRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Begin_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.BeginResultOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeviceLocked_Params', [
      mojo.internal.StructField('arg_password_only', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp_token', 8, 0, mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_EarlyBootEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_Params', [
      mojo.internal.StructField('arg_storage_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.GetKeyCharacteristicsRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrust_Params', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_SendRootOfTrust_Params', [
      mojo.internal.StructField('arg_root_of_trust', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpdateAad_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Update_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.UpdateRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Update_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Finish_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.FinishRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Finish_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Abort_Params', [
      mojo.internal.StructField('arg_op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Abort_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_Params', [
      mojo.internal.StructField('arg_secret_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.keymint.SharedSecretParametersSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.ByteArrayOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_Params', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.TimeStampTokenOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_Params', [
      mojo.internal.StructField('arg_test_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.keymint.CertificateRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_Params', [
      mojo.internal.StructField('arg_android_vendor_patchlevel', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

