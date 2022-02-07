// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

import en from './en'

import en_test from './en/test'

const localeTranslations = {
	en: {
		...en,
		test: en_test
	},
}

export const loadLocale = (locale: Locales) => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = () => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales) => {
	loadedFormatters[locale] = initFormatters(locale)
}