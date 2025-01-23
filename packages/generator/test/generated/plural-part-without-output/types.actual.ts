// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

import type { InboxType } from './types-template.actual'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * N​e​w​ ​m​e​s​s​a​g​e​{​{​s​}​}​ ​i​n​ ​{​i​n​b​o​x​}
	 * @param {InboxType} inbox
	 */
	PLURAL_WITHOUT_OUTPUT: RequiredParams<'inbox'>
}

export type TranslationFunctions = {
	/**
	 * New message{{s}} in {inbox}
	 */
	PLURAL_WITHOUT_OUTPUT: (arg: { inbox: InboxType, nrOfMessages: number | string | boolean }) => LocalizedString
}

export type Formatters = {}