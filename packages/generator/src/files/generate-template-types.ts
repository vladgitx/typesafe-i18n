import { writeFileIfContainsChanges, writeFileIfNotExists } from '../file-utils'
import { GeneratorConfigWithDefaultValues } from '../generate-files'
import { fileEnding } from '../output-handler'

const getCustomTypesTemplate = ({ typesFileName: typesFile }: GeneratorConfigWithDefaultValues) => {
	return `// use this file to export your custom types; these types will be imported by './${typesFile}${fileEnding}'`
}

export const generateCustomTypesTemplate = async (
	config: GeneratorConfigWithDefaultValues,
	forceOverride: boolean,
): Promise<void> => {
	const { outputPath, typesTemplateFileName: typesTemplatePath } = config

	const customTypesTemplate = getCustomTypesTemplate(config)

	const write = forceOverride ? writeFileIfContainsChanges : writeFileIfNotExists
	await write(outputPath, typesTemplatePath, customTypesTemplate)
}
