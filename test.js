import test from 'ava';
import equalLength from './';

test('fail if input is not a string', t => {
	t.throws(() => equalLength(1), 'Expected input to be a string, got number');
});

test('extend lines to equal length', t => {
	const actual = equalLength([
		'a  ',
		'b',
		'c '
	].join('\n'));

	const expected = [
		'a  ',
		'b  ',
		'c  '
	].join('\n');

	t.is(actual, expected);
});

test('ignore if all lines are equal', t => {
	const str = [
		'abc',
		'a  ',
		'c  '
	].join('\n');

	t.is(equalLength(str), str);
});
