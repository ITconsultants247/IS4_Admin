/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace IS4_Admin.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('IS4_Admin');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}