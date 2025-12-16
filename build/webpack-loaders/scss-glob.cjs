const path = require('path');
const fg = require('fast-glob');

const IMPORT_GLOB_REGEX = /@import\s+['"]([^'"]*\*[^'"]*)['"]\s*;/g;

module.exports = function scssGlobLoader(source) {
    const callback = this.async();
    const fileDir = path.dirname(this.resourcePath);

    processGlobs(source, fileDir, this)
        .then(result => callback(null, result))
        .catch(err => callback(err));
};

async function processGlobs(source, fileDir, loaderContext) {
    const matches = [...source.matchAll(IMPORT_GLOB_REGEX)];

    if (matches.length === 0) {
        return source;
    }

    let result = source;

    for (const match of matches) {
        const [fullMatch, globPattern] = match;

        const files = await fg(globPattern, {
            cwd: fileDir,
            absolute: true,
            onlyFiles: true,
        });

        files.sort();
        files.forEach(file => loaderContext.addDependency(file));

        const imports = files
            .map(file => {
                const relativePath = path.relative(fileDir, file);
                const normalizedPath = relativePath.split(path.sep).join('/');
                return `@import '${normalizedPath}';`;
            })
            .join('\n');

        result = result.replace(fullMatch, imports || `/* No files matched: ${globPattern} */`);
    }

    return result;
}
