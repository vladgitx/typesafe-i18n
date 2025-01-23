// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​,​ ​I​ ​h​a​v​e​ ​{​n​r​O​f​A​p​p​l​e​s​}​ ​{​{​A​f​p​e​l​|​Ä​p​f​e​l​}​}
	 * @param {unknown} name
	 * @param {string | number | boolean} nrOfApples
	 */
	TEST: string
}

export type TranslationFunctions = {
	/**
	 * Hi {name}, I have {nrOfApples} {{Afpel|Äpfel}}
	 */
	TEST: (arg: { name: unknown, nrOfApples: string | number | boolean }) => LocalizedString
}

export type Formatters = {}