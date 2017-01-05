'use strict';

module.exports = str => {
	const lines = str.split('\n');
	const maxLength = Math.max.apply(null, lines.map(line => line.length));

	return lines
		.map(line => {
			if (line.length < maxLength) {
				line += ' '.repeat(maxLength - line.length);
			}

			return line;
		})
		.join('\n');
};
