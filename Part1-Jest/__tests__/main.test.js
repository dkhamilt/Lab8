const volumeIcon = require('../assets/scripts/main');

describe('Volume Icon', () => {
    test('lvl 0', () => {
        expect(volumeIcon(0)).toContain('0.svg');
    });
    test('lvl 1', () => {
        expect(volumeIcon(1)).toContain('1.svg');
    });
    test('lvl 2', () => {
        expect(volumeIcon(34)).toContain('2.svg');
    });
    test('lvl 3', () => {
        expect(volumeIcon(67)).toContain('3.svg');
    });
});