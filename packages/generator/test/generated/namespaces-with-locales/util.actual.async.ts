// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Namespaces, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

export const localeTranslationLoaders = {
	'en-us': () => import('./en-us'),
	de_at: () => import('./de_at'),
	it: () => import('./it'),
	de: () => import('./de'),
}

const localeNamespaceLoaders = {
	'en-us': {
		test: () => import('./en-us/test'),
		'some-other_namespace': () => import('./en-us/some-other_namespace')
	},
	de_at: {
		test: () => import('./de_at/test'),
		'some-other_namespace': () => import('./de_at/some-other_namespace')
	},
	it: {
		test: () => import('./it/test'),
		'some-other_namespace': () => import('./it/some-other_namespace')
	},
	de: {
		test: () => import('./de/test'),
		'some-other_namespace': () => import('./de/some-other_namespace')
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