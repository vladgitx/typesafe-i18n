// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual.js'
import type { Locales, Namespaces, Translations } from './types.actual.js'
import { loadedFormatters, loadedLocales, locales } from './util.actual.js'

export const localeTranslationLoaders = {
	'en-us': () => import('./en-us/index.js'),
	it: () => import('./it/index.js'),
}

const localeNamespaceLoaders = {
	'en-us': {
		test: () => import('./en-us/test/index.js'),
		'some-other_namespace': () => import('./en-us/some-other_namespace/index.js')
	},
	it: {
		test: () => import('./it/test/index.js'),
		'some-other_namespace': () => import('./it/some-other_namespace/index.js')
	}
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>): Translations =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const importLocaleAsync = async (locale: Locales): Promise<Translations> =>
	(await localeTranslationLoaders[locale]()).default as unknown as Translations

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(locale, await importLocaleAsync(locale))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))

export const importNamespaceAsync = async<Namespace extends Namespaces>(locale: Locales, namespace: Namespace) =>
	(await localeNamespaceLoaders[locale][namespace]()).default as unknown as Translations[Namespace]

export const loadNamespaceAsync = async <Namespace extends Namespaces>(locale: Locales, namespace: Namespace): Promise<void> =>
	void updateDictionary(locale, { [namespace]: await importNamespaceAsync(locale, namespace )})